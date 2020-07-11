radio.setGroup(156)
basic.forever(function () {
    radio.sendString("BBABABBA")
    basic.pause(2000)
})
