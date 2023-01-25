'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value,
   this.right = null,
   this.left = null
}

let list = new BinarySearchTree(50)

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(value)
      }else{
         this.left.insert(value)
      }
   }else{
      if(this.right=== null){
         this.right = new BinarySearchTree(value)  
      }else{
         this.right.insert(value)
      }
   }
}

BinarySearchTree.prototype.contains = function(value){

      if(this.value === value) return true

      if(this.left && this.left.contains(value)) return true

      if(this.right && this.right.contains(value)) return true

      return false

   }
                                                                                                                              
BinarySearchTree.prototype.depthFirstForEach = function(cb, dato){
      switch (dato) {
         case "pre-order":
            cb(this.value)//guarda el nodo
            if(this.left) this.left.depthFirstForEach(cb,dato) // izquierda
            if(this.right) this.right.depthFirstForEach(cb,dato)//  derecha
            /*
            nodo
            izquierda
            derecha
            */
            break;
            case "pos-order":
            if(this.left) this.left.depthFirstForEach(cb,dato)//izquierda
            if(this.right) this.right.depthFirstForEach(cb,dato)//  derecha
            cb(this.value)//guarda el nodo
             /*
            nodo
            izquierda
            derecha 
            */
            break;
         default:
            if(this.left) this.left.depthFirstForEach(cb,dato)//izquierda
            cb(this.value)//guarda el nodo
            if(this.right) this.right.depthFirstForEach(cb,dato)//derecha
            /*
            izquierda
            nodo
            derecha 
            */           
            break;
      }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,queue){
   //por niveles
   //cuando no hay filas en el array 
   if(!queue){
      var queue = [] //se usa var porque es global al contexto de ejecución de la funcion breadthFirstForEach ahora si usas let no funciona
   }
   //ejecuto la callBack
   cb(this.value) //este guarda el Nodo
   //pregunta nuevamente si existen datos en los lados iz y der
   if(this.left) queue.push(this.left);
   if(this.right) queue.push(this.right);
   
   if(queue.length > 0){
      queue.shift().breadthFirstForEach(cb,queue) //pasa el nodo que obtuvo y la queue nuevamente
   }
}

BinarySearchTree.prototype.size = function(){
   let contarNodos = 1;
   //SUMA TODOS LOS DE LA IZQUIERDA               
   if(this.left){
     contarNodos += this.left.size()
   }
   //SUMA TODOS LOS DE LA DERECHA
   if(this.right){
     contarNodos += this.right.size()
   }
   return contarNodos;

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
