input.onButtonPressed(Button.A, function () {
    Vädringluka += 1
    if (dörr == 1) {
        servos.P0.setAngle(90)
    }
    if (dörr == 2) {
        servos.P0.setAngle(0)
        dörr = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Vädringluka += 1
    if (Vädringluka == 1) {
        servos.P1.setAngle(45)
    }
    if (Vädringluka == 2) {
        servos.P1.setAngle(0)
        Vädringluka = 0
    }
})
let Vädringluka = 0
let dörr = 0
dörr = 0
servos.P0.setAngle(0)
Vädringluka = 0
servos.P1.setAngle(0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) > 413) {
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 1)
    }
})
