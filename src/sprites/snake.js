import { Sprite } from './sprite'
import { random } from './../utils'

export class Snake extends Sprite {
    name = 'snake'
    speed
    direction
    length = 1

    constructor(speed = 1, ...args) {
        super(...args)
        this.speed = speed

        switch (random(0, 3)) {
            case 0:
                this.direction = 'top'
                break
            case 1:
                this.direction = 'right'
                break
            case 2:
                this.direction = 'bottom'
                break
            case 3:
                this.direction = 'left'
                break
        }
    }

    start() {
        setInterval(() => {
            
        }, this.speed * 1000)
    }
}