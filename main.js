const jsonData = 
[
 {
   "id": 1,
   "tipo": "verdura",
   "nombre": "Lechuga",
   "precio": 1.50,
   "disponible": true
 },
 {
   "id": 2,
   "tipo": "verdura",
   "nombre": "Espinaca",
   "precio": 2.00,
   "disponible": false
 },
 {
   "id": 3,
   "tipo": "fruta",
   "nombre": "Manzana",
   "precio": 0.80,
   "disponible": true
 },
 {
   "id": 4,
   "tipo": "fruta",
   "nombre": "Plátano",
   "precio": 0.60,
   "disponible": true
 },
 {
   "id": 5,
   "tipo": "víveres",
   "nombre": "Arroz",
   "precio": 1.20,
   "disponible": true
 },
 {
   "id": 6,
   "tipo": "víveres",
   "nombre": "Frijoles",
   "precio": 1.50,
   "disponible": false
 },
 {
   "id": 7,
   "tipo": "verdura",
   "nombre": "Brócoli",
   "precio": 2.50,
   "disponible": true
 },
 {
   "id": 8,
   "tipo": "fruta",
   "nombre": "Piña",
   "precio": 1.00,
   "disponible": false
 },
 {
   "id": 9,
   "tipo": "víveres",
   "nombre": "Harina",
   "precio": 0.90,
   "disponible": true
 },
 {
   "id": 10,
   "tipo": "verdura",
   "nombre": "Cebolla",
   "precio": 0.50,
   "disponible": true
 },
 {
   "id": 11,
   "tipo": "fruta",
   "nombre": "Naranja",
   "precio": 0.75,
   "disponible": true
 },
 {
   "id": 12,
   "tipo": "víveres",
   "nombre": "Azúcar",
   "precio": 1.00,
   "disponible": false
 },
 {
   "id": 13,
   "tipo": "verdura",
   "nombre": "Zanahoria",
   "precio": 0.80,
   "disponible": true
 },
 {
   "id": 14,
   "tipo": "fruta",
   "nombre": "Mango",
   "precio": 1.50,
   "disponible": false
 },
 {
   "id": 15,
   "tipo": "víveres",
   "nombre": "Aceite",
   "precio": 2.00,
   "disponible": true
 },
 {
   "id": 16,
   "tipo": "verdura",
   "nombre": "Tomate",
   "precio": 1.20,
   "disponible": true },{
   "id": 17,
   "tipo": "víveres",
   "nombre": "Pasta",
   "precio": 0.70,
   "disponible": true
 },
 {
   "id": 18,
   "tipo": "verdura",
   "nombre": "Pimiento",
   "precio": 1.00,
   "disponible": false
 },
 {
   "id": 19,
   "tipo": "fruta",
   "nombre": "Kiwi",
   "precio": 1.20,
   "disponible": true
 },
 {
   "id": 20,
   "tipo": "víveres",
   "nombre": "Lentejas",
   "precio": 1.80,
   "disponible": true
 },
 {
   "id": 21,
   "tipo": "verdura",
   "nombre": "Papa",
   "precio": 0.40,
   "disponible": true
 },
 {
   "id": 22,
   "tipo": "fruta",
   "nombre": "Sandía",
   "precio": 3.50,
   "disponible": true
 },
 {
   "id": 23,
   "tipo": "víveres",
   "nombre": "Sal",
   "precio": 0.50,
   "disponible": false
 },
 {
   "id": 24,
   "tipo": "verdura",
   "nombre": "Ajo",
   "precio": 0.70,
   "disponible": true
 },
 {
   "id": 25,
   "tipo": "fruta",
   "nombre": "Uva",
   "precio": 2.00,
   "disponible": false
 },
 {
   "id": 26,
   "tipo": "víveres",
   "nombre": "Café",
   "precio": 4.00,
   "disponible": true
 },
 {
   "id": 27,
   "tipo": "verdura",
   "nombre": "Calabacín",
   "precio": 1.20,
   "disponible": false
 },
 {
   "id": 28,
   "tipo": "fruta",
   "nombre": "Fresa",
   "precio": 1.80,
   "disponible": true
 },
 {
   "id": 29,
   "tipo": "víveres",
   "nombre": "Galletas",
   "precio": 0.90,
   "disponible": true
 },
 {
   "id": 30,
   "tipo": "verdura",
   "nombre": "Cebollino",
   "precio": 0.60,
   "disponible": true
 },
  
]
;

const opciones = document.querySelector('.tipos') 
// contenedor de las cards
const containerCards = document.querySelector('.cover__container-cards');

// Generar el Html de cada producto
const templete = (producto) => {
  return `
  <article class="card">
    <h2 class="card__title"> ${producto.nombre}</h2>
    <p class="card__tipo"> Tipo: ${producto.tipo}</p>
    <p class="card__price"> Precio: ${producto.precio.toFixed(2)}</p>
    <span class="${producto.disponible ? `card__stock` : `card__stock-red`}">${producto.disponible ? `Disponible` :` No Disponible`}</span>
  </article> 
`
}
const htmlProductos = jsonData.map( producto => templete(producto)).join("");

// Insertar el HTML generado en el contenedor
containerCards.innerHTML = htmlProductos;


opciones.addEventListener('change', () => {
  if (opciones.value === 'todas') {
   const allProdcuts = jsonData.map( producto => templete(producto)).join("");
    containerCards.innerHTML = allProdcuts;
    return
  }
  const productBytype = jsonData.filter(prod => prod.tipo === opciones.value)
  const productByfilter =  productBytype.map(producto => templete(producto)).join("");
  containerCards.innerHTML = productByfilter;

})

 