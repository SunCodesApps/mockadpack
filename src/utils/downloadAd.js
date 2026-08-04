import { toPng } from "html-to-image";

export async function downloadAd(element, filename) {
  console.log(
  element.clientWidth,
  element.clientHeight,
  element.firstElementChild.clientWidth,
  element.firstElementChild.clientHeight
);
  const dataUrl = await toPng(element);

  const link = document.createElement("a");
  link.download = `${filename}.png`;
  link.href = dataUrl;
  link.click();
}