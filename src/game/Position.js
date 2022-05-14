class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isEqualTo(otherPosition) {
    return this.x === otherPosition.x && this.y === otherPosition.y;
  }

  toArray() {
    return [this.x, this.y];
  }

  static fromArray(coordinates) {
    return new Position(coordinates[0], coordinates[1]);
  }
}

export { Position };