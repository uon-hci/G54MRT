import grovepi
import grove6axis
import time
from . import csv
from .db import db

# Sensor
class Sensor:
    def __init__(self, id, type, port, interval):
        self.id = id
        self.type = type
        self.port = port
        self.interval = interval
        self.lastCapture = time.time()
        if self.type == 'accelerometer':
            grove6axis.init6Axis()
    def capture(self):
        if self.lastCapture:
            now = time.time()
            if now - self.lastCapture >= self.interval:
                print('capturing..', self.type)
                data = self.read()
                db.insert({
                    'id': self.id,
                    'timestamp': now,
                    'value': data
                })
                self.lastCapture = now

# Analog
class AnalogSensor(Sensor):
    def read(self):
        return grovepi.analogRead(self.port)

# Digital
class DigitalSensor(Sensor):
    def read(self):
        return grovepi.digitalRead(self.port)

# I2C
class I2CSensor(Sensor):
    def read(self):
        if self.type == 'accelerometer':
            data = {}
            data['orientation'] = grove6axis.getOrientation()
            data['acceleration'] = grove6axis.getAccel()
            data['magnitude'] = grove6axis.getMag()
            return data
        else:
            return None
