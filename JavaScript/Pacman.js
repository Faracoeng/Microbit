input.onButtonPressed(Button.A, function () {
    pacman.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    pacman.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.AB, function () {
    pacman.move(1)
})
let pacman: game.LedSprite = null
music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
pacman = game.createSprite(2, 2)
let bolachinha = game.createSprite(4, 4)
let fantasma = game.createSprite(0, 0)
basic.forever(function () {
    if (pacman.isTouching(fantasma)) {
        music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
    } else if (pacman.isTouching(bolachinha)) {
        bolachinha.change(LedSpriteProperty.X, Math.randomRange(0, 4))
        bolachinha.change(LedSpriteProperty.Y, Math.randomRange(0, 4))
    }
    if (fantasma < pacman) {
        bolachinha.move(1)
        basic.pause(500)
    } else if (fantasma > pacman) {
        bolachinha.move(-1)
        basic.pause(500)
    } else if (fantasma < pacman) {
        bolachinha.move(1)
        basic.pause(500)
    } else if (fantasma > pacman) {
        bolachinha.move(1)
        basic.pause(500)
    }
})

