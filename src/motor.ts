import { mostrarEnlaces } from "./ui";

const datosInput = ():string => {
  const input = document.getElementById("input-busqueda");
  if (input !== null && input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement){
    return input.value;
  }
  return "";
}

export const obtenerUrl = (texto: string): string[] => {
  const patronExtraerImg = /img\s+src="(?<url>[^"]+)"/gm;

  const urlsObtenidas: string[] = [];

  for (const u of texto.matchAll(patronExtraerImg)) {
    const url = u.groups?.url;
    if (url) {
      urlsObtenidas.push(url);
    }
  }

  return urlsObtenidas;
};

const boton = document.getElementById("boton-extraer");
if (boton !== null) {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    main();
  });
}

export const main = () => {
  const textoInput = datosInput();
  const urls = obtenerUrl(textoInput);
  const contenedor = mostrarEnlaces(urls);
  
  const divUrls = document.getElementById("urls");

  if (!(divUrls instanceof HTMLDivElement)) {
    throw new Error("No se encontró el div #urls")
  }

  divUrls.innerHTML = "";
  divUrls.appendChild(contenedor);
};
