class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" "));
  }
}

// Crear una nueva cola
let miCola = new Queue();

// Agregar elementos a la cola
miCola.enqueue(10);
miCola.enqueue(20);
miCola.enqueue(30);

// Mostrar el contenido de la cola
miCola.print(); // Output: 10 20 30

// Obtener el primer elemento de la cola (sin sacarlo)
console.log(miCola.front()); // Output: 10

// Sacar un elemento de la cola
miCola.dequeue();

// Mostrar el contenido actualizado de la cola
miCola.print(); // Output: 20 30

// Verificar si la cola está vacía
console.log(miCola.isEmpty()); // Output: false

// Obtener el tamaño de la cola
console.log(miCola.size()); // Output: 2
