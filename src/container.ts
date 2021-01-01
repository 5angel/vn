import Sprite, { SpriteConfig } from "./sprite";
import { createElement, preloadImage } from "./utils";

type SpriteMap = {
  [name: string]: Sprite;
};

type BgMap = {
  [name: string]: HTMLImageElement;
};

const BG_TOTAL = 1;

const containerEl = createElement("container");
const bubbleEl = createElement("bubble");
const titleEl = createElement("title");
const textEl = createElement("text");
const sceneEl = createElement("scene");

export default class Container {
  private bgs: BgMap = null;
  private sprites: SpriteMap = null;

  static instance: Container = null;

  static getInstance() {
    return this.instance;
  }

  constructor(sprites: SpriteConfig[]) {
    document.body.appendChild(containerEl);

    containerEl.appendChild(sceneEl);
    containerEl.appendChild(bubbleEl);

    bubbleEl.appendChild(titleEl);
    bubbleEl.appendChild(textEl);

    titleEl.classList.add("hidden");
    bubbleEl.classList.add("hidden");

    this.bgs = new Array(BG_TOTAL)
      .fill("bg")
      .map((name, index) => `${name}${index + 1}`)
      .reduce((result, name) => {
        result[name] = null;
        return result;
      }, {});

    this.sprites = sprites.reduce((result, config) => {
      const sprite = new Sprite(config);
      result[config.name] = sprite;
      return result;
    }, {});

    Container.instance = this;
  }

  async preloadBgs() {
    const list = Object.keys(this.bgs);

    for (let i = 0; i < list.length; ++i) {
      const name = list[i];
      const image = await preloadImage(name, "jpg");
      this.bgs[name] = image;
    }
  }

  async preloadSprites() {
    const list = Object.keys(this.sprites);

    for (let i = 0; i < list.length; ++i) {
      const name = list[i];
      const image = await preloadImage(name);
      const sprite = this.sprites[name];

      sprite.setImage(image);
    }
  }

  getElement() {
    return sceneEl;
  }

  getSprite(name: string) {
    return this.sprites[name];
  }

  setBackground(name: string) {
    const previous = document.getElementById("bg");

    if (previous != null) {
      previous.id = "";
      previous.parentNode.removeChild(previous);
    }

    const image = this.bgs[name];
    image.id = "bg";

    containerEl.prepend(image);
  }

  showBubble() {
    bubbleEl.classList.remove("hidden");
  }

  hideBubble() {
    bubbleEl.classList.add("hidden");
  }

  setText(text: string) {
    textEl.innerText = text;
  }

  setTitle(title: string) {
    titleEl.innerText = title;
    const { classList: list } = titleEl;
    const hidden = list.contains("hidden");

    if (title !== "" && hidden) {
      list.remove("hidden");
    } else if (title === "" && !hidden) {
      list.add("hidden");
    }
  }
}
