import Scene from "./scene";

enum Direction {
  LEFT,
  RIGHT,
  MIDDLE,
}

export type SpriteConfig = {
  name: string;
  title: string;
  direction: Direction;
};

const DIRECTIONS = ["left", "right", "middle"];

const TEXT_SPEED = 50;

export default class Sprite {
  private name: string = null;
  private title: string = null;
  private direction: Direction = null;
  private image: HTMLImageElement = null;
  private phrase: string = null;

  constructor({ name, title, direction = Direction.LEFT }) {
    this.name = name;
    this.title = title;
    this.direction = direction;
  }

  getImage() {
    return this.image;
  }

  setImage(image: HTMLImageElement) {
    this.image = image;
    image.classList.add("sprite");
  }

  getDirection() {
    return DIRECTIONS[this.direction];
  }

  enter() {
    const direction = this.getDirection();
    const animation = `enter-${direction}`;
    this.image.classList.add(animation);
    this.image.classList.add(direction);
    Scene.getInstance().getElement().appendChild(this.image);

    const onAnimationEnd = () => {
      this.image.classList.remove(animation);
      this.image.removeEventListener("animationend", onAnimationEnd);
    };

    this.image.addEventListener("animationend", onAnimationEnd);
  }

  leave(sprite: Sprite) {
    this.image.parentNode.removeChild(this.image);
  }

  private sayTimeout(resolve: () => void, offset: number = 1) {
    const total = this.phrase.length;
    if (offset <= total) {
      setTimeout(() => {
        const text = this.phrase.slice(0, offset);
        const step = this.phrase[offset + 1] === " " ? 2 : 1;
        Scene.getInstance().setText(text);
        this.sayTimeout(resolve, offset + step);
      }, TEXT_SPEED);
    } else {
      resolve();
    }
  }

  say(phrase: string): Promise<void> {
    this.phrase = phrase;

    Scene.getInstance().setTitle(this.title);

    return new Promise((resolve) => {
      this.sayTimeout(resolve);
    });
  }
}
