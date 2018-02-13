export default class BlackTriangle {
  constructor(selector) {
    this.angle = 0;
    this.innerEl = document.querySelector(selector).querySelector('.BlackTriangle-inner');
  }

  rotate(amount) {
    this.angle = (this.angle + amount) % 360;
  }

  render() {
    this.innerEl.style.transform = `rotate(${this.angle}deg)`;
  }
}
