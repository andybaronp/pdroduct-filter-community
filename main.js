const jsonData = `
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
 }
]
`;

// console.log(typeof jsonData);

// convertir cadena a Obj

const productos = JSON.parse(jsonData);
// console.log(productos)


// contenedor de las cards
const containerCards = document.querySelector('.cover__container-cards');

// loop para iterar los productos 
for (let i = 0; i < productos.length; i++) {
  


// crear una una Card

const card = document.createElement('article');
card.classList.add('card');

// agregar el titulo de la card

const titulo = document.createElement('h2');
titulo.classList.add('card__title');
titulo.textContent = productos[i].nombre;
card.appendChild(titulo);

const tipo = document.createElement('p');
tipo.classList.add('card__tipo');
tipo.textContent = `Tipo: ${productos[i].tipo}`;
card.appendChild(tipo);

const precio = document.createElement('p');
precio.classList.add('card__price');
precio.textContent = `Precio: $${productos[i].precio.toFixed(2)}`;
card.appendChild(precio);

const stock = document.createElement('span');
stock.classList.add('card__stock');
if (productos[i].disponible) {
  stock.textContent = 'Disponible';
} else {
  stock.textContent = 'No disponible';
  stock.classList.add('card__stock-red');
}
// operador ternario
// const stock = document.createElement('span');
// stock.classList.add('card__stock');
// stock.textContent = productos[i].disponible ? 'Disponible' : 'No disponible';
// stock.classList.add(productos[i].disponible ? 'card__stock' : 'card__stock-red');
// cuerpo.appendChild(stock);

card.appendChild(stock);

containerCards.appendChild(card);
}