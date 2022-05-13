import { Grid } from './Grid.js';
import { Snake } from './Snake.js';
import { InputManager } from './InputManager.js';

class Game {

  constructor(gridSize = 20, startSnakeSize = 3) {
    this.gridSize = gridSize;
    this.startSnakeSize = startSnakeSize;
    this.over = false;
    this.snake = null;
    this.grid = null;
  }

  start() {
    this.grid = new Grid(this.gridSize);
    this.snake = new Snake(this.grid, this.startSnakeSize);
    const input = new InputManager(this.snake);
    input.start();
    this.spawnFood();
  }

  update() {
    this.snake.move();
    if (this.snake.ate) {
      this.spawnFood()
      this.snake.ate = false;
    }
    if (!this.snake.checkCollision())
      return
    this.snake.die()
    this.over = true;
  }

  spawnFood() {
    let tile;
    do {
      let randomRow = this.#getRandomNumber();
      let randomCol = this.#getRandomNumber();
      tile = this.grid.gridArray[randomRow][randomCol]
    } while (tile.classList.contains('snake'));
    tile.classList.add('food')
  }

  #getRandomNumber(start = 0, stop = this.gridSize) {
    return Math.floor(Math.random() * (stop - 1) + start);
  }
}

export { Game }