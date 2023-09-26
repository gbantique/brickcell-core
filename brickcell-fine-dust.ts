
namespace Brickcell {
    // Define variables to store pin numbers for LED control and output
    let ledControl: DigitalPin;
    let analogVoltage: AnalogPin;

    //% block="Initialize Fine Dust Sensor:|ADC Pin %outPin|Control Pin %ledPin"
    //% blockId=brickcell_fine_dust_init
    //% subcategory="fine dust"
    export function initializeFineDustSensor(outPin: AnalogPin, ledPin: DigitalPin): void {
        analogVoltage = outPin;
        ledControl = ledPin;
    }

    //% block="Read Fine Dust"
    //% blockId=brickcell_fine_dust_read_fine_dust
    //% subcategory="fine dust"
    export function readFineDust(): number {
        // Step 1: Set the LED control pin
        pins.digitalWritePin(ledControl, 1);

        // Step 2: Wait for 300 microseconds
        control.waitMicros(300);

        // Step 3: Read the analog value of analogVoltage pin
        let measuredVoltage = pins.analogReadPin(analogVoltage);

        // Step 4: Clear the LED control pin
        pins.digitalWritePin(ledControl, 0);

        return measuredVoltage; // Return the measured voltage
    }
}
