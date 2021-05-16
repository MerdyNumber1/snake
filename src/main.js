import './styles/style.css'
import { Canvas } from './canvas'
import { Snake } from './sprites/snake'
import { Apple } from './sprites/apple'


export const main = () => {
    const cvs = new Canvas(50, 50)
    const snake = new Snake(1, cvs)
    const apple = new Apple(cvs)
    cvs.render()
    apple.spawn()
    snake.spawn()
}