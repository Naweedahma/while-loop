input.onButtonPressed(Button.A, function () {
    Counter += 1
    basic.showNumber(Counter)
})
input.onButtonPressed(Button.B, function () {
    Counter += -1
    basic.showNumber(Counter)
})
let Counter = 0
Counter = 0
basic.showNumber(Counter)
basic.forever(function () {
    while (Counter == 5) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
