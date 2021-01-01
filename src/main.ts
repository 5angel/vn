import "./styles.css";

import { SpriteConfig } from "./sprite";
import Scene from "./scene";

const config: SpriteConfig[] = require("./sprites.json");

async function main() {
  const scene = new Scene(config);

  await scene.preloadBgs();
  await scene.preloadSprites();

  scene.setBackground("bg1");

  setTimeout(async () => {
    const kosulya = scene.getSprite("kosulya");
    kosulya.enter();
    await kosulya.say("Добрый день, какого хуя?");

    const lisa = scene.getSprite("lisa");
    lisa.enter();
    lisa.say("Слыш");
  }, 1000);
}

main();
