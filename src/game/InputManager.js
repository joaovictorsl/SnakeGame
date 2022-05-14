class InputManager {
  constructor(snake) {
    this.snake = snake;
  }

  start() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      let desiredDirection = this.snake.direction;
      if (event.key == 'ArrowLeft' || event.key == 'a') {
        desiredDirection = 'L';
      }
      else if (event.key == 'ArrowRight' || event.key == 'd') {
        desiredDirection = 'R';
      }
      else if (event.key == 'ArrowUp' || event.key == 'w') {
        desiredDirection = 'U';
      }
      else if (event.key == 'ArrowDown' || event.key == 's') {
        desiredDirection = 'D';
      }
      if (this.#isDirectionOpposite(desiredDirection)) {
        return
      }
      this.snake.direction = desiredDirection
    });
  }

  #isDirectionOpposite(direction) {
    let newHeadPosition = this.snake.getNewHeadPosition(direction);
    if (newHeadPosition.isEqualTo(this.snake.body[1])) {
      return true;
    }
    return false;
  }
}

export { InputManager };