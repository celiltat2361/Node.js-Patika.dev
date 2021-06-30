const arguments = process.argv.slice(2);

const area = (r) => {
  let pi = Math.PI;
  let result = pi * (r * r);
  console.log(`result = ${result.toFixed(2)}`)
}

area(arguments[0]*1);