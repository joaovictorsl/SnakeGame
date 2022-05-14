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
    gridSize[0].click()
    let snakeStartSize = Array.from(document.getElementsByName("snakeStartSize"));
    snakeStartSize[0].click()
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
    let updateRate = {
      20: 100,
      50: 75,
      75: 50,
    };
    const game = new Game(gridSize, startSnakeSize);
    game.start();
    console.log('updateRate[game.gridSize]', updateRate[game.gridSize])
    const interval = setInterval(() => {
      game.update();
      if (game.over) {
        game.clear();
        clearInterval(interval);
        this.gameOverMenu.build(game.snake);
        let resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', () => this.resetGame());
      }
    }, updateRate[game.gridSize]);
  }

  resetGame() {
    this.gameOverMenu.destroy();
    this.main();
  }

}


let app = new App();
app.main();
