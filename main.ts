let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    for (let indeks = 0; indeks <= 7; indeks++) {
        led.plotBrightness(indeks, 0, input.acceleration(Dimension.X) / 2)
        strip.setPixelColor(indeks, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
})
