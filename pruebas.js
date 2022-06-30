var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 10500},
    {nombre: "Celular", costo: 3200},
    {nombre: "Laptop", costo: 15000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
    {nombre: "Monitor", costo: 2300},
    
];
var articulosfiltrados = articulos.filter(function(articulo){return articulo.costo <= 3000
});
console.log(articulosfiltrados);


