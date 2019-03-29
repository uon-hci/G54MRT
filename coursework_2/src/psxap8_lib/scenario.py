import time
import math
from enum import Enum
from tinydb import Query, where
from .db import db

class Comparison(Enum):
    EQUALS = '='
    SUP_EQUALS = '>='
    INF_EQUALS = '<='
    SUP = '>'
    INF = '<'
    DIFF = '!='

class Duration(Enum):
    SHORT = '10'
    MEDIUM = '60'
    LONG = '300'

class ScenarioStatus(Enum):
    INACTIVE = 0
    ACTIVE = 1

class Rule:
    def __init__(self, type, comparison, threshold, *optional):
        if 'attribute' in optional:
            self.attribute = optional['attribute']
        else:
            self.attribute = 'self'
        self.type = type
        self.comparison = comparison
        self.threshold = threshold
    def compare(self, value):
        if self.comparison == Comparison.EQUALS:
            return value == self.threshold
        elif self.comparison == Comparison.SUP_EQUALS:
            return value >= self.threshold
        elif self.comparison == Comparison.INF_EQUALS:
            return value <= self.threshold
        elif self.comparison == Comparison.SUP:
            return value > self.threshold
        elif self.comparison == Comparison.INF:
            return value < self.threshold
        elif self.comparison == Comparison.DIFF:
            return value != self.threshold

class ThresholdRule(Rule):
    def isBroken(self, data):
        for row in data:
            value = row['value'] if self.attribute == 'self' else row['value'][self.attribute]
            if self.compare(value):
                return True
        return False

class ProgressRule(Rule):
    def isBroken(self, data):
        lastData = None
        for row in data:
            value = row['value'] if self.attribute == 'self' else row['value'][self.attribute]
            if lastData:
                if self.compare(math.fabs(lastData - value)):
                    return True
            else:
                lastData = value
        return False

class Scenario:
    def __init__(self, name, timespan, rules):
        self.name = name
        self.timespan = timespan
        self.rules = rules
        self.status = ScenarioStatus.INACTIVE
        self.lastMonitor = time.time()
    def monitor(self):
        now = time.time()
        if now - self.lastMonitor >= self.timespan:
            brokenRules = 0
            DataPoint = Query()
            for rule in self.rules:
                rows = db.search((DataPoint.type == rule.type) & (DataPoint.timestamp > now - self.timespan))
                if rule.isBroken(rows):
                    brokenRules += 1
            if brokenRules >= len(self.rules):
                self.status = ScenarioStatus.ACTIVE
                print('Scenario active: ', self.name)
            else:
                self.status = ScenarioStatus.INACTIVE
                print('Scenario inactive: ', self.name)
            self.lastMonitor = now