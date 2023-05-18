import { jsonData } from './data.js'

const opciones = document.querySelector('.tipos')
// contenedor de las cards
const containerCards = document.querySelector('.cover__container-cards');
const searchInput = document.getElementById("buscar");

let filterTipe = 'todas';
let disponibles = false;
let search = '';
// Generar el Html de cada producto
const templete = (producto) => {
  return `
  <article class="card">
    <h2 class="card__title"> ${producto.nombre}</h2>
    <p class="card__tipo"> Tipo: ${producto.tipo}</p>
    <p class="card__price"> Precio: ${producto.precio.toFixed(2)}</p>
    <span class="${producto.disponible ? `card__stock` : `card__stock-red`}">${producto.disponible ? `Disponible` : ` No Disponible`}</span>
  </article> 
`
}
const htmlProductos = jsonData.map(producto => templete(producto)).join("");
// Insertar el HTML generado en el contenedor
containerCards.innerHTML = htmlProductos;

opciones.addEventListener('change', () => {
  filterTipe = opciones.value;
  busqueda();
})

const check = document.getElementById('check');

check.addEventListener('click', () => {
  disponibles = check.checked;
  busqueda();
})


searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  search = searchValue;
  busqueda();
});

const busqueda = () => {
  let productoFiltrado = jsonData;
  if (filterTipe !== 'todas') {
    productoFiltrado = jsonData.filter(prod => prod.tipo === filterTipe)
  }
  if (disponibles) {
    productoFiltrado = productoFiltrado.filter(prod => prod.disponible === true)
  }

  if (search !== '') {
    productoFiltrado = productoFiltrado.filter(prod => prod.nombre.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)) //
  }

  const productByfilter = productoFiltrado.map(producto => templete(producto)).join("");
  containerCards.innerHTML = productByfilter;



}