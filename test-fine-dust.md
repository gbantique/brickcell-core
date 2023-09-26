# test-fine-dust

```ts
Brickcell.initializeAirQualitySensor(AnalogPin.P0, DigitalPin.P1)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeNumber(Brickcell.readFineDust())
    serial.writeString("" + ("\r\n"))
    basic.pause(2000)
})

```