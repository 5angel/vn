import Container from "./container";

export enum Direction {
  LEFT,
  RIGHT,
  MIDDLE,
}

export type SpriteConfig = {
  name: string;
  title: string;
};

export type ActionConfig = {
  direction: Direction;
};

const DIRECTIONS = ["left", "right", "middle"];

const TEXT_SPEED = 50;

export default class Sprite {
  private name: string = null;
  private title: string = null;
  private direction: Direction = Direction.LEFT;
  private image: HTMLImageElement = null;
  private phrase: string = null;
  private entered: boolean = false;
  private active: boolean = false;

  constructor({ name, title }) {
    this.name = name;
    this.title = title;
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

  isInScene() {
    return this.entered;
  }

  isActive() {
    return this.active;
  }

  enter(): Promise<void> {
    return new Promise((resolve) => {
      this.entered = true;

      const direction = this.getDirection();
      const animation = `enter-${direction}`;

      this.image.classList.add(animation);
      this.image.classList.add(direction);
      this.setActive(true);

      Container.getInstance().getElement().appendChild(this.image);

      const onAnimationEnd = () => {
        this.image.classList.remove(animation);
        this.image.removeEventListener("animationend", onAnimationEnd);
        resolve();
      };

      this.image.addEventListener("animationend", onAnimationEnd);
    });
  }

  leave() {
    this.entered = false;
    this.setActive(false);
    this.image.parentNode.removeChild(this.image);
  }

  setActive(value: boolean) {
    const { classList: list } = this.image;

    if (value) {
      this.active = true;
      list.add("active");
    } else {
      this.active = false;
      list.remove("active");
    }
  }

  private sayTimeout(resolve: () => void, offset: number = 1) {
    const total = this.phrase.length;
    if (offset <= total) {
      setTimeout(() => {
        const text = this.phrase.slice(0, offset);
        const step = this.phrase[offset + 1] === " " ? 2 : 1;
        Container.getInstance().setText(text);
        this.sayTimeout(resolve, offset + step);
      }, TEXT_SPEED);
    } else {
      setTimeout(() => {
        resolve();
      }, 500);
    }
  }

  say(phrase: string): Promise<void> {
    if (!this.active) {
      this.setActive(true);
    }

    this.phrase = phrase;

    Container.getInstance().setTitle(this.title);

    return new Promise((resolve) => {
      this.sayTimeout(resolve);
    });
  }

  applyAction({ direction }: ActionConfig) {
    if (direction != null) {
      this.direction = direction;
    }
  }
}
