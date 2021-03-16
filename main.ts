input.onButtonPressed(Button.AB, function () {
    SuperBit.Servo(SuperBit.enServo.S8, 15)
    basic.pause(1000)
    SuperBit.Servo(SuperBit.enServo.S8, 0)
    SuperBit.MotorStopAll()
})
basic.forever(function () {
	
})
