import "./styles.css";

import Scene, { SceneConfig } from "./Scene";
import ResourceManager from "./ResourceManager";

const scenes: SceneConfig[] = require("./data/scenes.json");

async function main() {
  const scene = new Scene();

  await ResourceManager.getInstance().preload();

  scene.start(scenes[0]);
}

main();
