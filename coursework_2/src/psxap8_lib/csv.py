import pathlib

def newLine(file, firstWrite, header, timestamp, data):
    if firstWrite:
        file.write_text('timestamp,' + header + '\n')
    file.open('a').write(str(timestamp) + ',' + str(data) + '\n')

def writeSensor(file, timestamp, sensorData, name):
    firstWrite = False
    if (not file.is_file()):
        file.touch(exist_ok = True)
        firstWrite = True
    if name == 'sound' or name == 'light':
        newLine(file, firstWrite, name, timestamp, sensorData)
    elif name == 'accelerometer':
        header = 'accelerationX,accelerationY,accelerationZ,magnitudeX,magnitudeY,magnitudeZ,orientationX,orientationY,orientationZ'
        acc = sensorData['acceleration']
        mag = sensorData['magnitude']
        ori = sensorData['orientation']
        line = str(acc[0]) + ',' + str(acc[1]) + ',' + str(acc[2]) + ',' + str(mag[0]) + ',' + str(mag[1]) + ',' + str(mag[2]) + ',' + str(ori[0]) + ',' + str(ori[1]) + ',' + str(ori[2])
        newLine(file, firstWrite, header, timestamp, line)
    
def write(timestamp, sensorData, name):
    directoryName = 'psxap8_csv'
    pathlib.Path(directoryName).mkdir(exist_ok = True)
    file = pathlib.Path(directoryName + '/' + name + '.csv')
    writeSensor(file, timestamp, sensorData, name)
