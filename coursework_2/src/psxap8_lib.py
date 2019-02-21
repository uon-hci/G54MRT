# Modules
import json
import grovepi

def readConfig(path):
    with open(path) as f:
        config = json.load(f)
    return config

def readSensor(sensor):
    if sensor['type'] is 'analog':
        return grovepi.analogRead(sensor['port'])
    else:
        return grovepi.digitalRead(sensor['port'])
    