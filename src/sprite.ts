import DOMManager from "./DOMManager";
import SpeechBubble from "./SpeechBubble";

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

export default class Sprite {
  private name: string = null;
  private title: string = null;
  private direction: Direction = Direction.LEFT;
  private image: HTMLImageElement = null;
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
      const { classList: list } = this.image;

      list.add(animation);
      list.add(direction);
      this.setActive(true);

      DOMManager.getInstance().insert(this.image);

      const onAnimationEnd = () => {
        list.remove(animation);
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

  say(phrase: string): Promise<void> {
    if (!this.active) {
      this.setActive(true);
    }

    DOMManager.getInstance().setTitle(this.title);

    return SpeechBubble.getInstance().print(phrase);
  }

  applyAction({ direction }: ActionConfig) {
    if (direction != null) {
      this.direction = direction;
    }
  }
}
