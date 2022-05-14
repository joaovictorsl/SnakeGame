import { Utils } from '../Utils.js';
import { Menu } from './Menu.js';

export class MainMenu extends Menu {

  createMenu() {
    let menu = document.createElement('div');
    menu.className = this.className;
    let title = document.createElement('span');
    title.innerHTML = 'Welcome to SnakeGame!!!';
    menu.appendChild(title);

    [['gridSize', [20, 50, 75]], ['snakeStartSize', [3, 5, 7]]].forEach(optionAndValues => {
      let span = document.createElement('span');
      span.innerHTML = `Select ${Utils.formatAttributeName(optionAndValues[0])}`;
      menu.appendChild(span);
      menu.appendChild(this.createSelection(...optionAndValues));
    });

    let startButton = document.createElement('button');
    startButton.id = 'startButton';
    startButton.innerHTML = 'Start Game';
    menu.appendChild(startButton);
    return menu;
  }

  createSelection(attributeName, values) {
    let selection = document.createElement('div');
    selection.className = 'selection';
    selection = this.addOptionsInSelection(selection, values, attributeName);
    return selection;
  }

  addOptionsInSelection(selection, values, attributeName) {
    values.forEach(value => {
      let option = document.createElement('div');
      option.className = 'option';
      let label = document.createElement('label');
      label.setAttribute('for', attributeName);
      label.innerHTML = value;
      let input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', attributeName);
      input.setAttribute('value', value);
      option.appendChild(label);
      option.appendChild(input);
      selection.appendChild(option);
    });
    return selection;
  }

}