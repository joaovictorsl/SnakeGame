class Grid {
  constructor(size) {
    this.size = size;
    this.canvas = document.getElementById("canvas");
    this.gridArray = this.populate();
  }

  populate() {
    let gridArray = [];
    for (let y = 0; y < this.size; y++) {
      const row = this.createTile('row', y, this.canvas);
      gridArray.push([]);

      for (let x = 0; x < this.size; x++) {
        const column = this.createTile('col', x, row);
        gridArray[y].push(column);
      }
    }
    return gridArray;
  }

  createTile(type, value, father) {
    const element = document.createElement('div');
    element.classList.add(type);
    element.setAttribute(type, value);
    father.appendChild(element);

    return element;
  }

  spawnSnake(snake) {
    snake.body.forEach((position, idx) => {
      if (idx == 0)
        this.gridArray[position.y][position.x].classList.add('head');
      this.gridArray[position.y][position.x].classList.add('snake');
    })
  }

  updateSnake(newHeadPosition, oldHeadPosition, oldTailPosition) {
    if (oldTailPosition)
      this.gridArray[oldTailPosition.y][oldTailPosition.x].classList.remove('snake');
    this.gridArray[oldHeadPosition.y][oldHeadPosition.x].classList.remove('head');
    this.gridArray[oldHeadPosition.y][oldHeadPosition.x].classList.add('snake');
    this.gridArray[newHeadPosition.y][newHeadPosition.x].classList.add('head');
  }

}

export { Grid };
