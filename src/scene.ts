import DOMManager from "./DOMManager";
import ResourceManager from "./ResourceManager";
import { ActionConfig } from "./Sprite";

export type Phrase = [number, string, ActionConfig];

export type SceneConfig = {
  actors: string[];
  background: string;
  dialogues: Phrase[];
};

export default class Scene {
  constructor() {}

  async start({ actors, background, dialogues }: SceneConfig) {
    const dom = DOMManager.getInstance();
    const resources = ResourceManager.getInstance();
    const sprites = actors.map((name) => resources.getSprite(name));

    dom.setBackground(background);
    dom.toggleSpeech(true);

    for (let i = 0; i < dialogues.length; ++i) {
      const [index, text, config] = dialogues[i];
      const target = sprites[index];

      sprites.forEach((item) => item.setActive(false));

      if (config != null) {
        target.applyAction(config);
      }

      if (!target.isInScene()) {
        await target.enter();
      }

      await target.say(text);
    }
  }
}
