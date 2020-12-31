import "./styles.css";

import { preloadResources } from "./utils";
import Sprite from "./sprite";

const sprites: {
  [name: string]: Sprite;
} = {};

const config: Array<any> = require("./sprites.json");

function createElement(id: string): HTMLDivElement {
  const element = document.createElement("div");
  element.id = id;
  return element;
}

async function main() {
  const names = config.map(({ name }) => name);
  const resources = await preloadResources("bg1.jpg", ...names);
  Sprite.init(resources);

  const container = createElement("container");
  const bubble = createElement("bubble");
  const title = createElement("title");
  const text = createElement("text");
  const scene = createElement("scene");

  document.body.appendChild(container);

  const bg: HTMLImageElement = resources["bg1"];

  container.appendChild(bg);
  container.appendChild(scene);
  container.appendChild(bubble);

  bubble.appendChild(title);
  bubble.appendChild(text);

  config.forEach((data) => {
    const { name } = data;
    sprites[name] = new Sprite(data);
  });

  const kosulya = sprites["kosulya"];
  const lisa = sprites["lisa"];
  kosulya.enter();
  lisa.enter();
}

main();
