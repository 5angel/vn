export type ImageMap = {
  [name: string]: HTMLImageElement;
};

const resources: ImageMap = {};

function preloadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => resolve(image);
  });
}

export async function preloadResources(...urls: string[]): Promise<ImageMap> {
  for (let i = 0; i < urls.length; ++i) {
    const filename = urls[i];
    const [name, ext = "png"] = filename.split(".");
    const image = await preloadImage(`assets/${name}.${ext}`);
    resources[name] = image;
  }
  return resources;
}
