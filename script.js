import { Game } from './Game.js';

function main() {
  const game = new Game(undefined, 5);
  game.start();
  const interval = setInterval(() => {
    game.update();
    if (game.over) {
      console.log('over')
      clearInterval(interval)
    }
  }, 100);
}

main();