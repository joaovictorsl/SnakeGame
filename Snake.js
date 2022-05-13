import { Position } from './Position.js';

class Snake {
  constructor(grid, size = 5) {
    this.grid = grid;
    this.body = this.#populateBody(size);
    this.direction = 'R';
    this.ate = false;

    this.grid.spawnSnake(this);
  }

  #populateBody(size) {
    let body = [];
    for (let i = 0; i < size; i++) {
      body.unshift(new Position(i, 10))
    }
    return body;
  }


  eat(tile) {
    tile.classList.remove('food');
    this.ate = true;
  }

  die() {

  }

  move() {
    let oldHeadPosition = this.body[0];
    let newHeadPosition = this.getNewHeadPosition();
    let tile = this.grid.gridArray[newHeadPosition.y][newHeadPosition.x];
    let removeTail = true;

    if (tile.classList.contains('food')) {
      console.log('food')
      this.eat(tile, newHeadPosition)
      removeTail = false;
    }

    let oldTailPosition = removeTail && this.#setOldTailPosition();

    this.#updateBodyPositions(newHeadPosition, removeTail);
    this.grid.updateSnake(newHeadPosition, oldHeadPosition, oldTailPosition);
  }

  getNewHeadPosition(direction = null) {
    direction = direction || this.direction;
    let newHeadPosition;
    let oldHead = this.body[0];

    switch (direction) {
      case 'U':
        newHeadPosition = new Position(oldHead.x, oldHead.y - 1);
        break;
      case 'D':
        newHeadPosition = new Position(oldHead.x, oldHead.y + 1);
        break;
      case 'L':
        newHeadPosition = new Position(oldHead.x - 1, oldHead.y);
        break;
      case 'R':
        newHeadPosition = new Position(oldHead.x + 1, oldHead.y);
        break;
      default:
        break;
    }

    return this.#keepSnakeInGrid(newHeadPosition);
  }

  #setOldTailPosition() {
    let lastElement = this.body[this.body.length - 1];
    return new Position(lastElement.x, lastElement.y);
  }

  #updateBodyPositions(newHeadPosition, removeTail) {
    this.body.unshift(newHeadPosition)
    if (removeTail)
      this.body.pop()
  }

  #keepSnakeInGrid(newHeadPosition) {
    let positionAsArray = newHeadPosition.toArray()

    for (let idx in positionAsArray) {
      if (positionAsArray[idx] > this.grid.size - 1) {
        positionAsArray[idx] = 0;
      }
      else if (positionAsArray[idx] < 0) {
        positionAsArray[idx] = this.grid.size - 1;
      }
    }

    newHeadPosition = Position.fromArray(positionAsArray)

    return new Position(newHeadPosition.x, newHeadPosition.y);
  }

  checkCollision() {
    let bodyAsArray = this.body.map((value) => value.toArray())

    for (let i = 0; i < bodyAsArray.length - 1; i++) {
      const element = bodyAsArray[i];
      for (let j = i + 1; j < bodyAsArray.length; j++) {
        const otherElement = bodyAsArray[j];
        if (this.#compareArrays(element, otherElement)) {
          return true
        }
      }
    }
  }

  #compareArrays(arr1, arr2) {
    if (!arr2)
      return false;

    if (arr1.length != arr2.length)
      return false;

    for (var i = 0, l = arr1.length; i < l; i++) {
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
        if (!arr1[i].equals(arr2[i]))
          return false;
      }
      else if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

export { Snake }