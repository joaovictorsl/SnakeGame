export class Menu {
  constructor(className = 'menu') {
    this.className = className;
  }

  build() {
    let canvas = document.getElementById('canvas');
    let menu = this.createMenu();
    canvas.appendChild(menu);
  }

  destroy() {
    let menu = document.getElementsByClassName(this.className)[0];
    menu.remove();
  }

  createMenu() {
    let menu = document.createElement('div');
    menu.className = this.className;
    return menu;
  }

}