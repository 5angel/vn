import { ImageMap } from "./utils";

enum Direction {
  LEFT,
  RIGHT,
  MIDDLE,
}

const DIRECTIONS = ["left", "right", "middle"];

export default class Sprite {
  private name: string = null;
  private title: string = null;
  private direction: Direction = null;
  private image: HTMLImageElement = null;

  private static resources: ImageMap = null;

  static init(data: ImageMap) {
    Sprite.resources = data;
  }

  constructor({ name, title, direction = Direction.LEFT }) {
    this.name = name;
    this.title = title;
    this.direction = direction;
  }

  private getScene() {
    return document.getElementById("scene");
  }

  private getImage() {
    return Sprite.resources[this.name];
  }

  private getDirection() {
    return DIRECTIONS[this.direction];
  }

  enter() {
    this.image = this.getImage();

    const list = this.image.classList;

    list.add("sprite", this.getDirection());

    this.getScene().appendChild(this.image);
  }

  leave() {
    this.image.parentNode.removeChild(this.image);
  }
}
