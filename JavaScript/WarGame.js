radio.onDataPacketReceived(function ({ receivedString: nome, receivedNumber: valor_X }) {
    pos_Tiro_inimigo = Math.abs(valor_X - 4)
    if (nome == "tiroX") {
        tiroOponente = game.createSprite(pos_Tiro_inimigo, 0)
        basic.pause(100)
        while (tiroOponente.get(LedSpriteProperty.Y) < 4) {
            tiroOponente.change(LedSpriteProperty.Y, 1)
            if (tiroOponente.isTouching(jogador)) {
                radio.sendValue("acertou", 1)
                basic.showNumber(game.score())
                basic.pause(2000)
            } else {
                basic.pause(100)
            }
        }
        tiroOponente.set(LedSpriteProperty.Brightness, 0)
    }
    if (nome == "acertou") {
        game.addScore(1)
        basic.showNumber(game.score())
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.AB, function () {
    tiro = game.createSprite(jogador.get(LedSpriteProperty.X), jogador.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        tiro.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (tiro.get(LedSpriteProperty.Y) == 0) {
            tiro.set(LedSpriteProperty.Brightness, 0)
        }
    }
    radio.sendValue("tiroX", tiro.get(LedSpriteProperty.X))
})
input.onButtonPressed(Button.A, function () {
    jogador.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    jogador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jogador.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    jogador.change(LedSpriteProperty.X, 1)
})
let tiro: game.LedSprite = null
let tiroOponente: game.LedSprite = null
let pos_Tiro_inimigo = 0
let jogador: game.LedSprite = null
jogador = game.createSprite(2, 4)

