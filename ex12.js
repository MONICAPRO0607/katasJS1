// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  let correctArray = [];
  if (param != null){ //Este if es una validación para comprobar que el parámetro que recibe la función es válido para trabajar
    if (param.length > 0) { //Este is es para comprobar que el array que recibe la función no está vacío
      // console.log("este array tiene elementos")
      for (let i = 0; i < param.length; i++){
        if (!correctArray.includes(param[i])) {
          correctArray.push(param[i])
        }
      }
      return correctArray
    }
    else {
      console.log("este parámetro es un array vacío")
    }
  } else {
    console.log("parámetro inválido")
  }

}
console.log(removeDuplicates(duplicates))
