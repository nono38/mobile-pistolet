radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.Servo(SuperBit.enServo.S8, 89)
        basic.pause(1)
        basic.pause(1)
        SuperBit.Servo(SuperBit.enServo.S8, 15)
        SuperBit.Servo(SuperBit.enServo.S8, 5)
    } else if (receivedNumber == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    } else if (receivedNumber == 3) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
    } else if (receivedNumber == 4) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    } else if (receivedNumber == 5) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
    }
})
radio.setGroup(152)
SuperBit.Servo(SuperBit.enServo.S8, 25)
