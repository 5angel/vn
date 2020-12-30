import "./assets/styles.css";

type ImageMap = {
  [name: string]: HTMLImageElement;
};

function createElement(id: string): HTMLDivElement {
  const element = document.createElement("div");
  element.id = id;
  return element;
}

const container = createElement("container");
const bubble = createElement("bubble");
const title = createElement("title");
const text = createElement("text");

const resources: ImageMap = {};

function preloadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => resolve(image);
  });
}

async function preloadResources(...urls: string[]): Promise<ImageMap> {
  for (let i = 0; i < urls.length; ++i) {
    const filename = urls[i];
    const [name, ext = "png"] = filename.split(".");
    const image = await preloadImage(`assets/${name}.${ext}`);
    resources[name] = image;
  }
  return resources;
}

function appendImage(name: string, className: string) {
  const image = resources[name];
  image.className = className;
  container.appendChild(image);
}

function appendBg(name: string) {
  return appendImage(name, "bg");
}

function appendSprite(name: string) {
  return appendImage(name, "sprite");
}

async function main() {
  title.innerText = "Косуля";

  document.body.appendChild(container);
  container.appendChild(bubble);
  bubble.appendChild(title);
  bubble.appendChild(text);

  await preloadResources("bg1.jpg", "kosulya");

  appendBg("bg1");
  appendSprite("kosulya");
}

main();
