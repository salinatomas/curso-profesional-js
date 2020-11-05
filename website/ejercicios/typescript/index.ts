// Tipos básicos:

// Boolean:
var muted: boolean = true
muted = false

// Numbers:
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

// Strings:
let nombre: string = 'Tomás'
let saludo = `Me llamo ${nombre}`

// Arrays de tipo cadena de texto:
let people: string[] = []
people = ['Damian', 'Ruth', 'Tomás', 'Franco', 'Sofía']

// Arrays multi-tipos:
let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Tomasito')
peopleAndNumbers.push(90)

console.log(peopleAndNumbers)

// Enum:
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Verde
console.log(colorFavorito)

// Any:
let comodin: any = "Joker"
comodin = 1

// Object:
let someObject: object = {name: 'Tomás', appellido: 'Salina'}

// ____________________________________

// Funciones:
function add(a: number, b: number): number {
  return a + b
}

const sum = add(4, 5)
console.log(sum);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)
console.log(fourPlus6)

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`
}

const tomas = fullName('Tomas')

// _______________________________

// Interfaces:
interface Rectangulo {
  ancho: number
  alto: number
  color?: Color
}

let rect: Rectangulo = {
  alto: 6,
  ancho: 5,
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho
}

const areaRect = area(rect)

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}`: 'Un rectángulo'
}
console.log(rect.toString());



