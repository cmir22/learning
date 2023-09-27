class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
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

// Crear una nueva pila
let miPila = new Stack();

// Agregar elementos a la pila
miPila.push(10);
miPila.push(20);
miPila.push(30);

// Mostrar el contenido de la pila
miPila.print(); // Output: 10 20 30

// Obtener el elemento superior (sin sacarlo)
console.log(miPila.peek()); // Output: 30

// Sacar un elemento de la pila
miPila.pop();

// Mostrar el contenido actualizado de la pila
miPila.print(); // Output: 10 20

// Verificar si la pila está vacía
console.log(miPila.isEmpty()); // Output: false

// Obtener el tamaño de la pila
console.log(miPila.size()); // Output: 2
