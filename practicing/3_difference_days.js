function differenceDays() {
  console.time();
  const day1 = new Date("02/22/1997");
  const day2 = new Date("09/22/2023");

  const setDifference = day2.getTime() - day1.getTime();

  const daysDifference = setDifference / (1000 * 60 * 60 * 24);

  const output = Math.floor(daysDifference);

  console.timeEnd();
  return output;
}

console.log(differenceDays());
