const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}


class Canvas {
    cells = []
    rootElement
    size = {
        x: 0,
        y: 0,
    }

    constructor(x, y, rootSelector = '#root') {
        this.rootElement = document.querySelector(rootSelector)
        this.size = { x, y }

        for (let i = 0; i < y; i++) {
            this.cells.push([...Array(x).fill('field')])
        }
    }

    render() {
        this.rootElement.innerHTML = this.cells.map(row => (
            `<div class="row">${row.map(cell => (
                `<div class="${cell} cell"></div>`
            )).join('')}</div>`
        )).join('')
    }
}


class Sprite {
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


class Snake extends Sprite {
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

class Apple extends Sprite {
    name = 'apple'
}


const main = () => {
    const cvs = new Canvas(50, 50)
    const snake = new Snake(1, cvs)
    const apple = new Apple(cvs)
    cvs.render()
    apple.spawn()
    snake.spawn()
}

main()