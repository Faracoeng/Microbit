input.onButtonPressed(Button.AB, function () {
    Tiro = game.createSprite(Nave.get(LedSpriteProperty.X), Nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Tiro.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (Tiro.get(LedSpriteProperty.Y) == 0) {
        Tiro.delete()
    }
})
input.onButtonPressed(Button.A, function () {
    Nave.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Nave.move(1)
})
let Inimigo: game.LedSprite = null
let Tiro: game.LedSprite = null
let Nave: game.LedSprite = null
music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
Nave = game.createSprite(2, 4)
basic.forever(function () {
    Inimigo = game.createSprite(Math.randomRange(0, 4), 0)
    Inimigo.turn(Direction.Right, 90)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        Inimigo.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (Tiro.isTouching(Inimigo)) {
            Inimigo.delete()
            Tiro.delete()
        }
        if (Inimigo.isTouching(Nave)) {
            game.gameOver()
        } else if (Inimigo.get(LedSpriteProperty.Y) == 4) {
            Inimigo.delete()
        }
    }
})

