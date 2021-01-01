export function preloadImage(
  name: string,
  ext: string = "png"
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = `assets/${name}.${ext}`;
    image.onload = () => resolve(image);
  });
}

export function createElement(id: string, tag: string = "div"): HTMLElement {
  const element = document.createElement(tag);
  element.id = id;
  return element;
}
