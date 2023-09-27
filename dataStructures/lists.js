// Crear una lista
let lista = [1, 2, 3, 4, 5];

// Acceder a elementos
console.log(lista[0]); // Output: 1
console.log(lista[2]); // Output: 3

// Modificar elementos
lista[1] = 10;
console.log(lista); // Output: [1, 10, 3, 4, 5]

// Añadir elementos al final
lista.push(6);
console.log(lista); // Output: [1, 10, 3, 4, 5, 6]

// Eliminar último elemento
let elementoEliminado = lista.pop();
console.log(elementoEliminado); // Output: 6
console.log(lista); // Output: [1, 10, 3, 4, 5]

// Longitud de la lista
console.log(lista.length); // Output: 5
