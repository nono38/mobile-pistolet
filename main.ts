radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.Servo(SuperBit.enServo.S4, 89)
        basic.pause(100)
        SuperBit.Servo(SuperBit.enServo.S4, 15)
        SuperBit.Servo(SuperBit.enServo.S4, 5)
        basic.pause(100)
    } else if (receivedNumber == 3) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    } else if (receivedNumber == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
    } else if (receivedNumber == 4) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    } else if (receivedNumber == 5) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
    } else if (receivedNumber == 6) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
    }
})
SuperBit.Servo(SuperBit.enServo.S4, 25)
radio.setGroup(152)
