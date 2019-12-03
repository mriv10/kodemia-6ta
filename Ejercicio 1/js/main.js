var MexicanPeso
var Euro
var Dollar
var CubanPeso
var CubaNationalPeso

MexicanPeso=500
//tasa de cambio 1 Euro = 21.66 Pesos Mexicanos.
Euro=MexicanPeso/21.66
console.log('Son '+ Euro + ' Euro')
//tasa de cambio 1 Dólar = 19.56 Pesos Mexicanos. 
Dollar=MexicanPeso/19.56
console.log('Son '+ Dollar + ' USD')
//tasa de cambio 1 Peso Cubano = 19.69 Pesos Mexicanos.
CubaNationalPeso=MexicanPeso/19.69
//tasa de cambio 1 Peso Cubano = 0.038 Peso Cubano Convertible.
CubanPeso=CubaNationalPeso*0.038
console.log('Son '+ CubanPeso + ' CUC')
