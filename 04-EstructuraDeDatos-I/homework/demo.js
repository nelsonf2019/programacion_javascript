//--------------STACK ARRAY-----------
//Funcion constructora
function Stack(){
    this.arr = [];
   // thiS.value = value;
  }
  
  Stack.prototype.push = function(value){
    this.arr.push(value);
  }
  Stack.prototype.pop = function(value){
    this.arr.pop();
  }
  Stack.prototype.size = function(){
    return this.arr.length;// return es para que devuelva un valor
  }
  //var miStack = new Stack();
  //miStack.push(5);
  //miStack.push(6);
  //miStack.push(88);
  //miStack.push(9);
  ///mistack.pop();

///-----------------Colaaa------------
  function Queue() {
    this.arr =[]
  }


  Queue.prototype.unshift = function(){
        
  }
  





