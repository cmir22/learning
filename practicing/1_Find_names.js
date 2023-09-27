let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

function getNames() {
  let names = [];

  if (input.length > 0) {
    names = input.map((element) => element.name);
    return names;
  } else {
    return names;
  }
}

console.log(getNames());
