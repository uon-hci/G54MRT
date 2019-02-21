# Modules
import psxap8_lib as mylib
import time

# Config
config = mylib.readConfig('psxap8_config.json')
sensors = config['sensors']

# Loop
while True:
    try:
        motionData = mylib.readSensor(sensors['motion'])
        soundData = mylib.readSensor(sensors['sound'])
        print('Motion', motionData)
        print('Sound', soundData)
        time.sleep(2)
    except IOError:
        print('Error')