const inputUrl = document.querySelector("#insercion-url");
const inputPosicion = document.querySelector("#borrar-pos");
const mostrarImagenes = document.querySelector("#contenedor-imagenes");

const imagenesAgregadas = [];


function agregarImagen() {

  imagenesAgregadas.push(inputUrl.value);

  actualizarImagenes();
}


function borrarUltimaImagen() {

  imagenesAgregadas.pop();

  actualizarImagenes();

}

function borrarPosicionImg() {

  imagenesAgregadas.splice(inputPosicion.value, 1);

  actualizarImagenes();

}

function actualizarImagenes() {
  
  mostrarImagenes.innerHTML = "";

  for (let i = 0; i < imagenesAgregadas.length; i++) {
    mostrarImagenes.innerHTML += `
      <div>
        <h3>Imagen ${i}</h3>
        <img src="${imagenesAgregadas[i]}" alt="img-${i}">
      </div>
    `;
  }
}


