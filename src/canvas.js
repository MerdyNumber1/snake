export class Canvas {
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