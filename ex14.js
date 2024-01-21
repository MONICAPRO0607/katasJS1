// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(array) {
  const wordCount = {};
  for (let i = 0; i < array.length; i++) {
  ;
    if (wordCount[array[i]] >=1) {
      wordCount[array[i]]++;
    } else {
      wordCount[array[i]] = 1;
    }
  }

  console.log(wordCount);
}

const result = repeatCounter(counterWords);