import { Menu } from './Menu.js';

export class GameOverMenu extends Menu {

  build(snake) {
    let canvas = document.getElementById('canvas');
    let menu = this.createMenu(snake);
    canvas.appendChild(menu);
  }

  createMenu(snake) {
    let menu = document.createElement('div');
    menu.className = this.className;

    let highestScoreSpan = document.createElement('span');
    let highestScore = this.updateHighestScore(snake.body.length);
    highestScoreSpan.innerHTML = `Your highest score: ${highestScore}`;
    menu.appendChild(highestScoreSpan);

    let points = document.createElement('span');
    points.innerHTML = `Your score: ${snake.body.length}`;
    menu.appendChild(points);

    let resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.innerHTML = 'Reset';
    menu.appendChild(resetButton);

    return menu;
  }

  updateHighestScore(newScore) {
    let highestScore = localStorage.getItem('highestScore');
    if (highestScore && highestScore < newScore) {
      highestScore = newScore;
      localStorage.setItem('highestScore', newScore);
    }
    return highestScore;
  }
}
