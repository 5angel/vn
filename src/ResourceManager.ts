import Sprite, { SpriteConfig } from "./sprite";

import { preloadImage, preloadSound } from "./utils";

type ResourceMap<T> = {
  [name: string]: T;
};

const sprites: SpriteConfig[] = require("./data/sprites.json");

const BG_TOTAL = 1;

export default class ResourceManager {
  private bgs: ResourceMap<HTMLImageElement> = null;
  private sprites: ResourceMap<Sprite> = null;
  private sounds: ResourceMap<HTMLAudioElement> = {};

  private static instance = new ResourceManager();

  static getInstance() {
    return this.instance;
  }

  constructor() {
    if (ResourceManager.instance != null) {
      throw new TypeError("instance already exists");
    }

    this.fillResourceMaps();

    ResourceManager.instance = this;
  }

  fillResourceMaps() {
    this.bgs = new Array(BG_TOTAL)
      .fill("bg")
      .map((name, index) => `${name}${index + 1}`)
      .reduce((result, name) => {
        result[name] = null;
        return result;
      }, {});

    this.sprites = sprites.reduce((result, config) => {
      const sprite = new Sprite(config);
      const { name } = config;
      this.sounds[name] = null;
      result[name] = sprite;
      return result;
    }, {});
  }

  getSprite(name: string) {
    return this.sprites[name];
  }

  getBackground(name: string) {
    return this.bgs[name];
  }

  getSound(name: string) {
    return this.sounds[name];
  }

  async preload() {
    const images = await this.preloadSpritesFor(this.sprites);
    const keys = Object.keys(this.sprites);

    for (let i = 0; i < keys.length; ++i) {
      const name = keys[i];
      this.sounds[name] = await this.preloadSoundFor(name);
      const sprite = this.sprites[name];
      sprite.setImage(images[name]);
    }

    this.bgs = await this.preloadSpritesFor(this.bgs, "jpg");
  }

  private async preloadSoundFor(name: string): Promise<HTMLAudioElement> {
    try {
      const audio = await preloadSound(name);
      return audio;
    } catch (error) {
      console.warn(`No sounds found for "${name}"`);
      return null;
    }
  }

  private async preloadSpritesFor<T>(source: ResourceMap<T>, ext?: string) {
    const result: ResourceMap<HTMLImageElement> = {};
    const list = Object.keys(source);

    for (let i = 0; i < list.length; ++i) {
      const name = list[i];
      const image = await preloadImage(name, ext);
      result[name] = image;
    }

    return result;
  }
}
