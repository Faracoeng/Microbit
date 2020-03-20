let contador = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    contador = 10
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 10; index++) {
        basic.showNumber(contador)
        contador = contador - 1
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
})
