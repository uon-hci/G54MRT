# Modules
from psxap8_lib import utils
import time

# Init
sensors = utils.initSensors()
scenarios = utils.initScenarios()

# Loop
while True:
    try:
        for sensor in sensors:
            sensor.capture()
        for scenario in scenarios:
            scenario.monitor()
        time.sleep(0.1)
    except IOError:
        print(IOError)