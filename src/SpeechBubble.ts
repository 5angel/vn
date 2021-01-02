import DOMManager from "./DOMManager";

const TEXT_SPEED = 50;
const TEXT_DELAY = 500;

export default class SpeechBubble {
  static instance: SpeechBubble = new SpeechBubble();

  static getInstance() {
    return this.instance;
  }

  private text = null;

  constructor() {
    if (SpeechBubble.instance != null) {
      throw new TypeError("instance already exists");
    }

    SpeechBubble.instance = this;
  }

  private printTimeout(resolve: () => void, offset: number = 1) {
    const total = this.text.length;
    if (offset <= total) {
      setTimeout(() => {
        const text = this.text.slice(0, offset);
        const step = this.text[offset + 1] === " " ? 2 : 1;

        DOMManager.getInstance().setText(text);
        this.printTimeout(resolve, offset + step);
      }, TEXT_SPEED);
    } else {
      setTimeout(() => {
        resolve();
      }, TEXT_DELAY);
    }
  }

  print(text: string): Promise<void> {
    this.text = text;

    return new Promise((resolve) => {
      this.printTimeout(resolve);
    });
  }
}
