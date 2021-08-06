import { Sprite } from './sprite'
import { random } from 'utils'

const SnakeDirectionState = {
    'ArrowUp': 'top',
    'ArrowDown': 'bottom',
    'ArrowLeft': 'left',
    'ArrowRight': 'right'
}

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
        document.addEventListener('keyup', (e) => this.onKeyUp(e))
        setInterval(() => this.onMoveTick(), this.speed * 1000)
    }

    onMoveTick() {
        switch (this.direction) {
            case 'top':
                this.moveToTop()
                break
            case 'bottom':
                this.moveToBottom()
                break
            case 'left':
                this.moveToLeft()
                break
            case 'right':
                this.moveToRight()
                break
        }
    }

    onKeyUp(e) {
        const newDirection = SnakeDirectionState[e.key]

        console.log((newDirection !== 'top' && this.direction !== 'bottom') &&
        (newDirection !== 'bottom' && this.direction !== 'top'))

        if (
            (newDirection !== 'top' && this.direction !== 'bottom') &&
            (newDirection !== 'bottom' && this.direction !== 'top') &&
            (newDirection !== 'right' && this.direction !== 'left') &&
            (newDirection !== 'left' && this.direction !== 'right') 
        ) {
            console.log('fdsf')
            this.direction = newDirection
        }
    }

    move(x, y) {
        this.canvas.cells[this.coords.y][this.coords.x] = 'field'
        this.coords = { x, y }
        this.canvas.cells[y][x] = 'snake'

        this.canvas.render()
    }

    moveToTop() {
        this.move(this.coords.x, this.coords.y - 1)
    }

    moveToBottom() {
        this.move(this.coords.x, this.coords.y + 1)
    }
    
    moveToLeft() {
        this.move(this.coords.x - 1, this.coords.y)
    }

    moveToRight() {
        this.move(this.coords.x + 1, this.coords.y)
    }
}