import "./styles.css";

import Scene, { SceneConfig } from "./scene";

const scenes: SceneConfig[] = require("./data/scenes.json");

async function main() {
  const scene = new Scene();
  await scene.preload();
  scene.start(scenes[0]);
}

main();
