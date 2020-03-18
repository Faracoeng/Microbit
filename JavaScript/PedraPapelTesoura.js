let ValorSorteado = 0
input.onGesture(Gesture.Shake, function () {
    ValorSorteado = Math.randomRange(0, 2)
    if (ValorSorteado == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (ValorSorteado == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
