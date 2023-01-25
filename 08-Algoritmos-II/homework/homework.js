'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
    
    let izquierda = [],derecha = [];
    let pivote = array[0]
    //const arrayNew = []
    
    for(let i = 1; i < array.length; i++ ){
        if(array[i] < pivote ) izquierda.push(array[i])
        else derecha.push(array[i]) 
        
    }
    //quickSort(izquierda).concat(pivote).concat(quickSort(derecha))
    return quickSort(izquierda).concat(pivote).concat(quickSort(derecha))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length <= 1) return array;

  let medioArray = Math.floor(array.length/2);
  let izquierda = array.slice(0,medioArray);
  let derecha = array.slice(medioArray);
  let nuevoArray = []

  izquierda = mergeSort(izquierda);//recursividad
  izquierda = mergeSort(izquierda);//recursividad
  
  while(izquierda.length && derecha.length ){
    if(izquierda[0] < derecha[0]){
      nuevoArray.push(izquierda.shift());
    }else{
      nuevoArray.push(derecha.shift());
    }
  }

  nuevoArray = nuevoArray.concat(izquierda,derecha)
  return nuevoArray;
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
