import Sprite, { SpriteConfig } from "./Sprite";
import { createElement } from "./utils";
import ResourceManager from "./ResourceManager";

export default class DOMManager {
  static instance: DOMManager = new DOMManager();

  static getInstance() {
    return this.instance;
  }

  private container: HTMLElement;
  private bubble: HTMLElement;
  private title: HTMLElement;
  private text: HTMLElement;
  private icon: HTMLElement;
  private scene: HTMLElement;

  constructor() {
    if (DOMManager.instance != null) {
      throw new TypeError("instance already exists");
    }

    this.setupDOM();

    DOMManager.instance = this;
  }

  setupDOM() {
    this.container = createElement("container");
    this.bubble = createElement("bubble");
    this.title = createElement("title");
    this.text = createElement("text");
    this.icon = createElement("icon");
    this.scene = createElement("scene");

    document.body.appendChild(this.container);

    this.container.appendChild(this.scene);
    this.container.appendChild(this.bubble);

    this.bubble.appendChild(this.title);
    this.bubble.appendChild(this.text);
    this.bubble.appendChild(this.icon);

    this.title.classList.add("hidden");
    this.bubble.classList.add("hidden");
  }

  setBackground(name: string) {
    const previous = document.getElementById("bg");

    if (previous != null) {
      previous.id = "";
      previous.parentNode.removeChild(previous);
    }

    const image = ResourceManager.getInstance().getBackground(name);
    image.id = "bg";

    this.container.prepend(image);
  }

  private toggleElement(element: HTMLElement, value: boolean) {
    const { classList: list } = element;
    const active = list.contains("hidden");

    if (!value && !active) {
      list.add("hidden");
    } else if (value && active) {
      list.remove("hidden");
    }
  }

  toggleSpeech(value: boolean) {
    this.toggleElement(this.bubble, value);
  }

  toggleIcon(value: boolean) {
    this.toggleElement(this.icon, value);
  }

  setText(text: string) {
    this.text.innerText = text;
  }

  setTitle(title: string) {
    this.title.innerText = title;
    const { classList: list } = this.title;
    const hidden = list.contains("hidden");

    if (title !== "" && hidden) {
      list.remove("hidden");
    } else if (title === "" && !hidden) {
      list.add("hidden");
    }
  }

  insert(element: HTMLElement) {
    this.scene.appendChild(element);
  }

  getContainer() {
    return this.container;
  }
}
