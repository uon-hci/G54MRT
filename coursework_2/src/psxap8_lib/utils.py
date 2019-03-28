# Modules
import json
import grovepi
import grove6axis
import math
from .sensor import AnalogSensor
from .sensor import DigitalSensor
from .sensor import I2CSensor
from .scenario import Comparison
from .scenario import ThresholdRule

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

def initRules():
    soundRule = ThresholdRule('sound', 'self', Comparison.SUP_EQUALS, 50)

def isMoving(accelerometerData):
    if (isMoving.lastValue == None):
        isMoving.lastValue = accelerometerData['acceleration']
        return False
    else:
        acceleration = accelerometerData['acceleration']
        lastX = isMoving.lastValue[0]
        lastY = isMoving.lastValue[1]
        lastZ = isMoving.lastValue[2]
        x = acceleration[0]
        y = acceleration[1]
        z = acceleration[2]
        isMoving.lastVavalue = acceleration
        return math.fabs(lastX - x) > 0.3 or math.fabs(lastY - y) > 0.3 or math.fabs(lastZ - z) > 0.3
isMoving.lastValue = None

