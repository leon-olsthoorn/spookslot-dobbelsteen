input.onButtonPressed(Button.A, function () {
    if (begin != 0) {
        mode = 1
        basic.clearScreen()
        factor = 2
        basic.showString("TRAP")
    }
})
input.onGesture(Gesture.Shake, function () {
    if (mode == 0) {
        basic.clearScreen()
        music.play(music.stringPlayable("D C F D E C E C ", 500), music.PlaybackMode.UntilDone)
        basic.showString("" + (tekstlijst._pickRandom()))
        basic.pause(500)
        begin = 1
    } else {
        basic.clearScreen()
        basic.pause(500)
        music.play(music.stringPlayable("D C F D E C E C ", 500), music.PlaybackMode.UntilDone)
        if (randint(1, 5) != 5) {
            basic.showNumber(factor * randint(1, 4))
        } else {
            basic.showIcon(IconNames.Ghost)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (begin != 0) {
        mode = 2
        basic.clearScreen()
        factor = 1
        basic.showString("VLOER")
    }
})
let factor = 0
let tekstlijst: string[] = []
let begin = 0
let mode = 0
mode = 0
begin = 0
tekstlijst = [
"Fedde",
"Duuk",
"Mama",
"Papa"
]
basic.showString("wie begint? Schud!")
