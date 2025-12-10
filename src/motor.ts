import { ejemplo } from "./ejemplo";

export const obtenerUrl = (): string[] => {
  const patronExtraerImg = /img\s+src="(?<url>[^"]+)"/gm;

  const urlsObtenidas: string[] = [];

  for (const u of ejemplo.matchAll(patronExtraerImg)) {
    const url = u.groups?.url;
    if (url) {
      urlsObtenidas.push(url);
    }
  }

  return urlsObtenidas;
};