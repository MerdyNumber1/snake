import { random } from './../utils'

export class Sprite {
    name
    canvas
    coords = { x: 0, y: 0, }

    constructor(canvas) {
        this.canvas = canvas
    }

    spawn() { 
        this.coords = {
            x: random(0, this.canvas.size.x),
            y: random(0, this.canvas.size.y),
        }

        this.canvas.cells[this.coords.y][this.coords.x] = this.name
        this.canvas.render()
    }
}