import DOMManager from "./DOMManager";

const TEXT_SPEED = 50;

export default class SpeechBubble {
  static instance: SpeechBubble = new SpeechBubble();

  static getInstance() {
    return this.instance;
  }

  private text = null;
  private finished = true;

  constructor() {
    if (SpeechBubble.instance != null) {
      throw new TypeError("instance already exists");
    }

    SpeechBubble.instance = this;
  }

  private printTimeout(resolve: () => void, offset: number = 1) {
    if (this.finished) {
      DOMManager.getInstance().setText(this.text);
      resolve();
      return;
    }

    const total = this.text.length;
    if (offset <= total) {
      setTimeout(() => {
        const text = this.text.slice(0, offset);
        const step = this.text[offset + 1] === " " ? 2 : 1;

        DOMManager.getInstance().setText(text);
        this.printTimeout(resolve, offset + step);
      }, TEXT_SPEED);
    } else {
      resolve();
    }
  }

  print(text: string): Promise<void> {
    const dom = DOMManager.getInstance();

    dom.toggleIcon(false);

    this.text = text;
    this.finished = false;

    new Promise<void>((resolve) => {
      this.printTimeout(resolve);
    }).then(() => {
      this.finished = true;
      dom.toggleIcon(true);
    });

    const container = dom.getContainer();

    return new Promise((resolve) => {
      const handleClick = () => {
        if (this.finished) {
          container.removeEventListener("click", handleClick);
          resolve();
        } else {
          this.finished = true;
        }
      };

      container.addEventListener("click", handleClick);
    });
  }
}
