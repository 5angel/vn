export function preloadImage(
  name: string,
  ext: string = "png"
): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = `assets/${name}.${ext}`;
    image.onload = () => resolve(image);
  });
}

export function preloadSound(name: string): Promise<HTMLAudioElement> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(`assets/sound/${name}.mp3`);

    const removeListeners = () => {
      audio.removeEventListener("suspend", onError);
      audio.removeEventListener("canplaythrough", onLoad);
    };

    const onLoad = () => {
      resolve(audio);
      removeListeners();
    };

    const onError = () => {
      reject();
      removeListeners();
    };

    audio.addEventListener("error", onError);
    audio.addEventListener("canplaythrough", onLoad);
  });
}

export function createElement(id: string, tag: string = "div"): HTMLElement {
  const element = document.createElement(tag);
  element.id = id;
  return element;
}
