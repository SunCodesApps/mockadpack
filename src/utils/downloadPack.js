import { toPng } from "html-to-image";
import JSZip from "jszip";

export async function downloadCompanyPack(
  ad,
  formats,
  adIndex,
  previewRefs
) {
  const zip = new JSZip();

  for (const format of formats) {
    const element =
      previewRefs.current[`${adIndex}-${format.id}`];

    if (!element) continue;

    const dataUrl = await toPng(element);

    const base64 = dataUrl.split(",")[1];

    zip.file(
      `${ad.company}-${format.id}.png`,
      base64,
      { base64: true }
    );
  }

  const blob = await zip.generateAsync({
    type: "blob",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${ad.company}.zip`;
  link.click();
}

export async function downloadAllCompaniesPack(
  ads,
  formats,
  previewRefs
) {
  const zip = new JSZip();

  for (let adIndex = 0; adIndex < ads.length; adIndex++) {
    const ad = ads[adIndex];
    const folder = zip.folder(ad.company);

    for (const format of formats) {
      const element =
        previewRefs.current[`${adIndex}-${format.id}`];

      if (!element) continue;

      const dataUrl = await toPng(element);
      const base64 = dataUrl.split(",")[1];

      folder.file(
        `${format.id}.png`,
        base64,
        { base64: true }
      );
    }
  }

  const blob = await zip.generateAsync({
    type: "blob",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "MockAdPack.zip";
  link.click();
  URL.revokeObjectURL(link.href);
}