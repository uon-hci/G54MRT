# Modules
import psxap8_lib as mylib
import time

# Config
config = mylib.readConfig('psxap8_config.json')
sensors = config['sensors']

# Init sensors
mylib.initSensors(sensors)

# Loop
while True:
    try:
        # motionData = mylib.readSensor(sensors['motion'])
        soundData = mylib.readSensor(sensors['sound'])
        accelerometerData = mylib.readSensor(sensors['accelerometer'])
        lightData = mylib.readSensor(sensors['light'])
        # print('Motion', motionData)
        print('Sound', soundData)
        print('Accelerometer', accelerometerData)
        print('Light', lightData)
        timestamp = time.time()
        mylib.writeCSV(timestamp, soundData, 'sound')
        mylib.writeCSV(timestamp, lightData, 'light')
        mylib.writeCSV(timestamp, accelerometerData, 'accelerometer')
        time.sleep(2)
    except IOError:
        print('Error')