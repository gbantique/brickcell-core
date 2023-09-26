//% color="#FFBF00" icon="\uf12e" weight=70
namespace Brickcell {
    //% blockId=brickcell_core_move_forward_with_obstacle_check
    //% block="Move forward with obstacle check at speed $speed"
    //% speed.min=0 speed.max=100
    //% subcategory="core"
    export function moveForwardWithObstacleCheck(speed: number) {
        const distance = readDistanceSensor();
        if (distance > 10) {
            moveForward(speed);
        } else {
            // Stop or take evasive action
        }
    }
}