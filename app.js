import { Game } from './src/game/Game.js';
import { MainMenu } from './src/menus/MainMenu.js';
import { GameOverMenu } from './src/menus/GameOverMenu.js';


class App {

  constructor() {
    this.mainMenu = new MainMenu();
    this.gameOverMenu = new GameOverMenu();
  }

  main() {
    this.mainMenu.build();
    let gridSize = Array.from(document.getElementsByName("gridSize"));
    let snakeStartSize = Array.from(document.getElementsByName("snakeStartSize"));
    let startButton = document.getElementById("startButton");

    startButton.addEventListener('click', () => this.handleStartGame(gridSize.filter(v => v.checked)[0], snakeStartSize.filter(v => v.checked)[0]));
  }

  handleStartGame(gridSize, startSnakeSize) {
    gridSize = parseInt(gridSize?.value) || undefined;
    startSnakeSize = parseInt(startSnakeSize?.value) || undefined;
    this.startGame(gridSize, startSnakeSize);
  }

  startGame(gridSize, startSnakeSize) {
    this.mainMenu.destroy();
    const game = new Game(gridSize, startSnakeSize);
    game.start();
    const interval = setInterval(() => {
      game.update();
      if (game.over) {
        game.clear();
        clearInterval(interval);
        this.gameOverMenu.build(game.snake);
        let resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', () => this.resetGame());
      }
    }, 100);
  }

  resetGame() {
    this.gameOverMenu.destroy();
    this.main();
  }

}


let app = new App();
app.main();
