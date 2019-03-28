import time
from enum import Enum
from tinydb import where
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
    MONITORING = 1
    ACTIVE = 2

class Trigger:
    def __init__(self, rule, scenario):
        self.rule = rule
        self.scenario = scenario
    def verify(self, data):
        if self.rule.isBroken(data):
            self.scenario.monitor()

class Rule:
    def __init__(self, type, attribute, comparison, value):
        self.name = name
        self.type = type
        self.attribute = attribute
        self.comparison = comparison
        self.value = value

class ThresholdRule(Rule):
    def isBroken(self, data):
        v = data if self.attribute == 'self' else data[self.attribute]
        if self.comparison == Comparison.EQUALS:
            return v == self.value
        elif self.comparison == Comparison.SUP_EQUALS:
            return v >= self.value
        elif self.comparison == Comparison.INF_EQUALS:
            return v <= self.value
        elif self.comparison == Comparison.SUP:
            return v > self.value
        elif self.comparison == Comparison.INF:
            return v < self.value
        elif self.comparison == Comparison.DIFF:
            return v != self.value


class Scenario:
    def __init__(self, name, type, duration, rules):
        self.name = name
        self.type = type
        self.rules = rules
        self.status = ScenarioStatus.INACTIVE
    def monitor(self):
        self.status = ScenarioStatus.MONITORING
        now = time.time()
        time.sleep(self.duration)
        brokenRules = 0
        for rule in self.rules:
            isBroken = False
            rows = db.search(where('type') == rule.type & where('timestamp') > now)
            for row in rows:
                if rule.isBroken(row.value):
                    brokenRules += 1
                    isBroken = True
                    break
            if isBroken:
                break
        if brokenRules >= len(self.rules):
            self.status = ScenarioStatus.ACTIVE
            print('Scenario active: ', self.name)
        else:
            self.status = ScenarioStatus.INACTIVE
                    

# Sensors are given rules at creation
# Sensors always save previous value (to be able to compare)
# When a sensor capture data, it checks for rules
# A Rule can be:
#       A Threshold Rule: comparing the value to a threshold
#       A Progression Rule: comparing the difference between the current value and the last one
# Each Rule leads to a Scenario
# A Scenario can be:
#       An InstantScenario: a single value at a certain thresold is enough to justify an event
#       An ExtendedScenario: multiple values from multiple sensors must be detected together to justify an event