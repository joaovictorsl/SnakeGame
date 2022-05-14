export class GameOverScreen {
  build(snake) {
    let canvas = document.getElementById('canvas');
    let highestScore = localStorage.getItem('highestScore');
    let background = document.createElement('div');
    background.className = 'gameOverBackground';
    if (highestScore) {
      let highestScoreSpan = document.createElement('span');
      if (highestScore < snake.body.length) {
        highestScore = snake.body.length;
        localStorage.setItem('highestScore', snake.body.length);
      }
      highestScoreSpan.innerHTML = highestScore;
      background.appendChild(highestScoreSpan);
    }
    let points = document.createElement('span');
    points.innerHTML = snake.body.length;
    background.appendChild(points);
    canvas.appendChild(background);
  }
}
