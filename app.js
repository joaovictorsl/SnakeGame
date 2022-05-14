import { Game } from './Game/Game.js';
import { Menu } from './Menu.js';
import { GameOverScreen } from './GameOverScreen.js';

class App {

  constructor() {
    this.menu = new Menu();
    this.gameOverScreen = new GameOverScreen();
  }

  main() {
    this.menu.build();
    let gridSize = Array.from(document.getElementsByName("gridSize"));
    let snakeStartSize = Array.from(document.getElementsByName("snakeStartSize"));
    let startButton = document.getElementById("startButton");

    startButton.addEventListener('click', () => this.handleStartGame(gridSize.filter(v => v.checked)[0], snakeStartSize.filter(v => v.checked)[0]));
  }

  handleStartGame(gridSize, startSnakeSize) {
    gridSize = parseInt(gridSize?.value) || undefined;
    startSnakeSize = parseInt(startSnakeSize?.value) || undefined;
    this.menu.destroy();
    this.startGame(gridSize, startSnakeSize);
  }

  startGame(gridSize, startSnakeSize) {
    const game = new Game(gridSize, startSnakeSize);
    game.start();
    const interval = setInterval(() => {
      game.update();
      if (game.over) {
        console.log('over');
        clearInterval(interval);
        game.clear();
        this.gameOverScreen.build(game.snake);
      }
    }, 100);
  }

}


let app = new App();
app.main();
