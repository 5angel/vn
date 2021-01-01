import Container from "./container";
import Sprite, { Direction, SpriteConfig, ActionConfig } from "./sprite";

export type Phrase = [number, string, ActionConfig];

export type SceneConfig = {
  actors: string[];
  background: string;
  dialogues: Phrase[];
};
const config: SpriteConfig[] = require("./data/sprites.json");

export default class Scene {
  private container: Container = null;

  constructor() {
    this.container = new Container(config);
  }

  async start({ actors, background, dialogues }: SceneConfig) {
    this.container.setBackground(background);

    const sprites = actors.map((name) => this.container.getSprite(name));

    for (let i = 0; i < dialogues.length; ++i) {
      const [index, text, config] = dialogues[i];
      const target = sprites[index];

      if (config != null) {
        target.applyAction(config);
      }

      if (!target.isActive()) {
        await target.enter();
      }

      await target.say(text);
    }
  }

  async preload() {
    await this.container.preloadBgs();
    await this.container.preloadSprites();
  }
}
