radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > dice) {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber < dice) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("G B A G C5 B A B ", 120)
    }
    if (receivedNumber == dice) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(69)
