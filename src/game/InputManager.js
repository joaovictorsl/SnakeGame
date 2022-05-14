class InputManager {
  constructor(snake) {
    this.snake = snake;
    const self = this;
    this.keydownHandler = (event) => {
      event.preventDefault();
      let desiredDirection = self.snake.direction;
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
      if (self.#isDirectionOpposite(desiredDirection)) {
        return
      }
      self.snake.direction = desiredDirection
    }
  }

  start() {
    document.addEventListener('keydown', this.keydownHandler);
  }

  clear() {
    document.removeEventListener('keydown', this.keydownHandler);
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