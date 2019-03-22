# Modules
from psxap8_lib import index as myLib
import time

# Init sensors
sensors = myLib.initSensors()

# Loop
while True:
    try:
        for sensor in sensors:
            sensor.capture()
        time.sleep(0.1)
    except IOError:
        print(IOError)