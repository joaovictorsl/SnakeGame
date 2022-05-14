export class Counter {
  constructor(snake) {
    this.snake = snake;
    this.element = null;
  }

  build() {
    this.element = document.createElement('span');
    this.element.className = 'counter';
    this.element.innerHTML = this.snake.body.length;
    let canvas = document.getElementById('canvas');
    canvas.appendChild(this.element);
  }

  update() {
    this.element.innerHTML = this.snake.body.length;
  }

  destroy() {
    this.element.remove();
  }
}
