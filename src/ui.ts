

const crearParrafo = (texto: string): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.innerText = texto;
  return p;
};

const crearImagen = (url: string): HTMLImageElement => {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("imagen-extraida");
  return img;
};

export const mostrarEnlaces = (urlsArray: string[]): HTMLDivElement => {
  const contenedor = document.createElement("div");
  contenedor.classList.add("contenedor-img-urls");

  urlsArray.forEach(url => {
    const divImagen = document.createElement("div-img");
    divImagen.classList.add("imagen");

    const img = crearImagen(url);
    const p = crearParrafo(url);

    divImagen.appendChild(img);
    divImagen.appendChild(p);

    contenedor.appendChild(divImagen);
  });

  return contenedor;
}