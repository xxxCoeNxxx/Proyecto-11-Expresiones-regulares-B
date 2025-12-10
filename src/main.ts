import "./style.css";
import { obtenerUrl } from "./motor";
import { mostrarEnlaces } from "./ui";

const main = () => {
  const urls = obtenerUrl();
  const contenedor = mostrarEnlaces(urls);
  
  const divUrls = document.getElementById("urls");
  divUrls?.appendChild(contenedor);
};

main();