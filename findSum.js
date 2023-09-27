function findSum() {
  const sumTotal = 8;
  let numbers = [1, 2, 2, 4];
  let numbersSum = [];
  numbers = numbers.sort().reverse();

  for (let i = 0; i < numbers.length; i++) {
    numbers.some(function (element) {
      if (numbers[i] + element == sumTotal) {
        return numbersSum.push({ sum: `${element} + ${numbers[i]}` });
      }
    });
  }

  if (numbersSum.length === 0) {
    console.log("Not found sum");
  } else {
    console.log("Found sum numbers: ", numbersSum);
  }
}

findSum();
