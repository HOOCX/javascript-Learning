function sumar(num) {
  console.log(num)
}
sumar(10)

const sumarDos= (num1, num2) => (num1 + num2)
const resultado = sumarDos(20, 30)
console.log(resultado)

const mensaje  = nombre => ('hola soy ' + nombre)

const resultadosDos = mensaje('Hans')
console.log(resultadosDos)

const sumaTres = (num = 1) => {
  console.log(num + 3)
}
sumaTres(10)