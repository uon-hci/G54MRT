# Modules
import json
import grovepi
import grove6axis
import math
from .sensor import AnalogSensor, DigitalSensor, I2CSensor
from .scenario import Scenario, ThresholdRule, ProgressRule, RepeatedThresholdRule, Comparison

def readConfig(path):
    with open(path) as f:
        config = json.load(f)
    return config

def initSensors():
    config = readConfig('psxap8_lib/psxap8_config.json')
    sensors = config['sensors']
    sensorsObjects = []
    for sensor, config in sensors.items():
        if config['type'] == 'analog':
            sensorsObjects.append(AnalogSensor(config['id'], sensor, config['port'], config['interval']))
        elif config['type'] == 'digital':
            sensorsObjects.append(DigitalSensor(config['id'], sensor, config['port'], config['interval']))
        else:
            sensorsObjects.append(I2CSensor(config['id'], sensor, config['port'], config['interval']))            
    return sensorsObjects

def initScenarios():
    lightRule = ThresholdRule('light', Comparison.SUP_EQUALS, 700)
    lightOnScenario = Scenario('the light is on', 10, [lightRule])
    accelerometerXRule = ProgressRule('accelerometer', Comparison.SUP, 0.3, attributes = ['acceleration', 0])
    accelerometerYRule = ProgressRule('accelerometer', Comparison.SUP, 0.3, attributes = ['acceleration', 1])
    accelerometerZRule = ProgressRule('accelerometer', Comparison.SUP, 0.3, attributes = ['acceleration', 2])
    doorMovedScenario = Scenario('the door has moved', 5, [accelerometerXRule, accelerometerYRule, accelerometerZRule])
    motionRule = RepeatedThresholdRule('motion', Comparison.EQUALS, 1, 2)
    motionDetectedScenario = Scenario('motion has been detected', 5, [motionRule])
    soundRule = ThresholdRule('sound', Comparison.SUP_EQUALS, 100)
    soundsDetected = Scenario('sounds have been detected', 10, [soundRule])
    return [lightOnScenario, doorMovedScenario, motionDetectedScenario, soundsDetected]