import DOMManager from "./DOMManager";
import ResourceManager from "./ResourceManager";
import SpeechBubble from "./SpeechBubble";

export enum Direction {
  LEFT,
  RIGHT,
  MIDDLE,
}

export enum Emote {
  NONE,
  ANGRY,
  NERVOUS,
  SHAKE,
  SIGH,
  WHAT,
}

export type SpriteConfig = {
  name: string;
  title: string;
};

export type ActionConfig = {
  direction: Direction;
  emote: Emote;
};

const DIRECTIONS = ["left", "right", "middle"];
const EMOTES = [null, "angry", "nervous", "shake", "sigh", "what"];

export default class Sprite {
  private element: HTMLElement = null;
  private name: string = null;
  private title: string = null;
  private direction: Direction = Direction.LEFT;
  private image: HTMLImageElement = null;
  private entered: boolean = false;
  private active: boolean = false;
  private emote: Emote = null;

  constructor({ name, title }) {
    this.name = name;
    this.title = title;
    this.element = document.createElement("div");

    this.element.classList.add("sprite");
    this.element.id = this.name;
  }

  getImage() {
    return this.image;
  }

  setImage(image: HTMLImageElement) {
    const parent = this.image?.parentNode;

    if (parent != null) {
      parent.removeChild(this.image);
    }

    this.image = image;
    this.element.appendChild(image);
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

      const direction = `to-${this.getDirection()}`;
      const { classList: list } = this.element;

      list.add("enter");
      list.add(direction);
      this.setActive(true);

      DOMManager.getInstance().insert(this.element);

      const onAnimationEnd = () => {
        list.remove("enter");
        this.element.removeEventListener("animationend", onAnimationEnd);
        resolve();
      };

      this.element.addEventListener("animationend", onAnimationEnd);
    });
  }

  leave() {
    this.entered = false;
    this.setActive(false);
    this.element.parentNode.removeChild(this.element);
  }

  setEmote(value: Emote) {
    const previous = `emote-${EMOTES[this.emote]}`;
    const { classList: list } = this.element;

    if (this.emote != null && list.contains(previous)) {
      list.remove(previous);
    }

    this.emote = value;

    const next = `emote-${EMOTES[this.emote]}`;

    if (this.emote != null && !list.contains(next)) {
      list.add(next);
    }
  }

  setActive(value: boolean) {
    const { classList: list } = this.element;

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

    this.startSpeech();

    return SpeechBubble.getInstance().print(phrase);
  }

  applyAction({ direction, emote }: ActionConfig) {
    if (direction != null) {
      this.direction = direction;
    }

    if (emote != null) {
      this.setEmote(emote);
    }
  }

  private async startSpeech() {
    try {
      this.playSound();
      const finished = SpeechBubble.getInstance().isFinished();
      if (!finished) {
        this.startSpeech();
      }
    } catch (error) {
      console.warn(`No speech sounds for "${this.name}"`);
    }
  }

  private playSound() {
    const audio = ResourceManager.getInstance().getSound(this.name);

    audio.play();
  }
}
