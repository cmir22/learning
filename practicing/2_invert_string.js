function leftDirection() {
  const stringy = "AdileneMachado";
  const n = 4;

  const string1 = stringy.substring(n, stringy.length);
  const string2 = stringy.substring(0, n);

  return string1 + string2;
}

console.log(leftDirection());
