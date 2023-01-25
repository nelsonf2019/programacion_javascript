'use strict';

function BinarioADecimal(num) {
   let BinarioInvertido = num.split("").reverse().join("")
   let binary = 1
   let acc = 0; 
   let resultado = 0;
   for(let i = 0; i < BinarioInvertido.length; i++){
       resultado = Math.pow(2, i)
       if(binary == BinarioInvertido[i]){
          acc = acc + (resultado*1)
       }else{
         acc = acc + (resultado*0)
       }
   }
 return acc;
}
/// trauecto 
// let binario = [];
// while(num>=1){
//   binario.unshift(num%2)
//   num=Math.floor(num/2)
// }
// let otr = binario.join("");
// return otr;
function DecimalABinario(num) {
   let binary = "";
   let resultado = 1
     while(num !== 0){
         if(num % 2 == 0){
             binary += "0";
             resultado = Math.floor(num/2)
             num = resultado
         }else{
             binary += "1";
             resultado = Math.floor(num/2)
             num = resultado
         }
     }
     return binary.split("").reverse().join("")
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
