# Modules
import json
import grovepi
import grove6axis
import pathlib

def readConfig(path):
    with open(path) as f:
        config = json.load(f)
    return config

def initSensors(sensors):
    for sensor, config in sensors.items():
        if sensor == 'accelerometer':
            grove6axis.init6Axis()

def readAccelerometer():
    data = {}
    data['orientation'] = grove6axis.getOrientation()
    data['acceleration'] = grove6axis.getAccel()
    data['magnitude'] = grove6axis.getMag()
    return data

def readSensor(sensor):
    if sensor['type'] == 'analog':
        return grovepi.analogRead(sensor['port'])
    elif sensor['type'] == 'digital':
        return grovepi.digitalRead(sensor['port'])
    else:
        if sensor['port'] == 2:
            return readAccelerometer()

def newCSVLine(file, firstWrite, header, timestamp, data):
    if firstWrite:
        file.write_text('timestamp,' + header + '\n')
    file.open('a').write(str(timestamp) + ',' + str(data) + '\n')

def writeSensorCSV(file, timestamp, sensorData, name):
    firstWrite = False
    if (not file.is_file()):
        file.touch(exist_ok = True)
        firstWrite = True
    if name == 'sound' or name == 'light':
        newCSVLine(file, firstWrite, name, timestamp, sensorData)
    elif name == 'accelerometer':
        header = 'accelerationX,accelerationY,accelerationZ,magnitudeX,magnitudeY,magnitudeZ,orientationX,orientationY,orientationZ'
        acc = sensorData['acceleration']
        mag = sensorData['magnitude']
        ori = sensorData['orientation']
        line = str(acc[0]) + ',' + str(acc[1]) + ',' + str(acc[2]) + ',' + str(mag[0]) + ',' + str(mag[1]) + ',' + str(mag[2]) + ',' + str(ori[0]) + ',' + str(ori[1]) + ',' + str(ori[2])
        newCSVLine(file, firstWrite, header, timestamp, line)
    
def writeCSV(timestamp, sensorData, name):
    directoryName = 'psxap8_csv'
    pathlib.Path(directoryName).mkdir(exist_ok = True)
    file = pathlib.Path(directoryName + '/' + name + '.csv')
    writeSensorCSV(file, timestamp, sensorData, name)