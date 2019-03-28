# Modules
from psxap8_lib import utils
import time

# Init sensors
sensors = utils.initSensors()

# Loop
while True:
    try:
        for sensor in sensors:
            sensor.capture()
        time.sleep(0.1)
    except IOError:
        print(IOError)