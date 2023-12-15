radio.onReceivedString(function (receivedString) {
    Data = receivedString
})
let Data = ""
radio.setGroup(1)
let Etat = 0
let savetime = control.millis()
basic.forever(function () {
    if (Data == "Prioritaire") {
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
        Etat = 0
        savetime = control.millis()
    } else if (control.millis() - savetime >= 5000 && Etat == 0) {
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
        Etat = 1
        savetime = control.millis()
    } else if (control.millis() - savetime >= 1000 && Etat == 1) {
        pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
        Etat = 2
        savetime = control.millis()
    } else if (control.millis() - savetime >= 5000 && Etat == 2) {
        pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
        Etat = 0
        savetime = control.millis()
    }
})
