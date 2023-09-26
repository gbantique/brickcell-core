# test-lcd-i2c

```ts
let loopCount = 0
Brickcell.init(0)
Brickcell.ShowString("Brickcell", 0, 0)
basic.forever(function () {
    loopCount += 1
    Brickcell.ShowNumber(loopCount, 0, 1)
    basic.pause(1000)
})

```