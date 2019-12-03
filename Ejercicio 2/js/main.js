var Years
var Months
var Days
var Seconds

//Condiciones generales:
//Años = 365 días.
//Meses = 30 días.

Years=26
Months=8
Days=22

//Fórmula:
//Años= 365 días * 24 horas * [(60 minutos * 60 segundos)]->equivalente a 3600.
//Meses= 30 días * 24 horas * [60 minutos * 60 segundos]
//Días= 24 horas * [60 minutos * 60 segundos]
Seconds=(Years*365*24*3600)+(Months*30*24*3600)+(Days*24*3600)


console.log('Tengo 26 años, con 8 meses y 22 días y he vivido ' + Seconds + ' segundos.')
