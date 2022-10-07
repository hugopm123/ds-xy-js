//imprime el número de múltiplos de 7 en el rango [200-300] (¿cuantos?)

var i, contador=0
for (var i=200;i<=300; i++){
    if (i % 7 ==0){
      if(i++){
        contador=contador+1
        console.log(contador)
      } 
    }
}