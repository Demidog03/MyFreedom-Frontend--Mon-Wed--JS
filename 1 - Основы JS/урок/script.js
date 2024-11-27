// console.log('ПРИВЕТ') // вывод в консоль

/* console.log('ПРИВЕТ')
console.log('ПОКА') */ 

// Как комментировать код в JS

// // -> одна строка
// /* */ -> несколько строк

// ПЕРЕМЕННЫЕ
// var - забываем, let, const

/*
//VAR
var name = "Guzel"
// var name -> declaration (декларирования) - создание переменной
// = "Guzel" -> assigning (присваивание) - заполнить чем то переменную

console.log(name)

// undefined - не определенность
var age
age = 25
console.log(age) // 25
age = 21
console.log(age) // 21
*/

/*
// LET
let speciality = 'Frontend Developer'
speciality = 'Backend Developer'
// let speciality -> еще раз создавать нельзя
console.log(speciality)

// CONST
const salary = 400000
// salary = 350000 -> так нельзя
console.log(salary)

// ПРАВИЛО - сперва создаем переменную через const,
// если понимаем что она будет меняться меняем const на let
*/


// ТИПЫ ДАННЫХ
/*
let name = 'Nazgul'
name = 999
console.log(name)
*/

// string - строка
// number - цифра
// boolean - булевое (true/false)
// object - обьект
// null - нулл
// undefined - неопределенный
// symbol - символ

/*
// STRING
const laptopModel = 'Acer nitro 5'
// const laptopModel = "Acer nitro 5"
// const laptopModel = `Acer nitro 5`

// // camelCase
// const myName = 'Olzhas'
// // Snake Case
// const my_name = 'Olzhas'
// // Kebab Case - в JS не работает
// const my-name = 'Olzhas'
// // PascalCase
// const MyName = 'Olzhas'
// // UPPER Snake Case
// const MY_NAME = 'Olzhas'


// NUMBER
const displaySize = 15.6
console.log(displaySize)

// BOOLEAN
const isFinishedSchool = true
const isMale = true
const isFemale = false
console.log(isMale)

// OBJECT
// const name = 'Olzhas'
// const surname = "Otep"
// const age = 21
// const speciality = 'Frontend Developer'

// const name2 = 'Ainagul'
// const surname2 = 'Arstambayeva'
// const age2 = 25
// const speciality2 = 'Cosmetologist'

const person1 = {
    name: 'Olzhas',
    surname: 'Otep',
    age: 21,
    speciality: 'Frontend Developer'
}

const person2 = {
    name: 'Ainagul',
    surname: 'Arstambayeva',
    age: 25,
    speciality: 'Cosmetologist'
}

console.log(person1)
console.log(person2)

// NULL
const futureSalary = null
const secondName = null
console.log(null)

// UNDEFINED
let phoneNumber
console.log(phoneNumber)

*/

// АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 * 5)
// console.log(10 / 5)

// const num1 = 20
// const num2 = 10
// console.log(num1 / num2)
// console.log((10 + 5) * 2)

// ОСТАТОК
// console.log(4 % 2)
// console.log(4 % 3)

// СТЕПЕНЬ
// console.log(4 ** 2)

// Конкатенация строк
// console.log('Привет' + 'Пока')
// console.log('Привет' + 2)
// console.log(2 + 'Привет')

// const name1 = 'Ainagul'
// const name2 = 'Moldir'
// const newYearMessage = ', поздравяю с новым годом!'
// console.log(name1 + newYearMessage)
// console.log(name2 + newYearMessage)

// const name3 = 'Erbol'
// console.log(`Добрый вечер ${name2}, Мы сегодня планируем корпратив. Приезжайте в 20:00`)



// ALERT
// console.log('ПРИВЕТ')
// alert('ПРИВЕТ')

// PROMPT
// const username = prompt('Введите имя: ')
// console.log(username)

// const age = prompt('Введите ваш возраст: ')
// console.log(+age)
// console.log(Number(age))
// console.log(+'dadsada') // NaN -> Not a Number
// console.log(Number('dadsada')) // NaN -> Not a Number

// CONFIRM
// const isAbove21 = confirm('Вам есть 21?')
// console.log(isAbove21)


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 > 5)
// console.log(5 > 10)
// console.log(10 == 10)
// console.log(5 == 10)
// console.log(10 >= 10)
// console.log(11 >= 10)
// console.log(5 === 5)

// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 !== 10)

// // reverse
// console.log(!true)
// console.log(!false)
// console.log(!(10 === 10)) // !true

// Оператори И/ИЛИ (&& / ||)
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(true || true) // true
// console.log(false || false) // false

// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false
// console.log(true && true) // true


// УСЛОВИЕ
// const age = prompt('Сколько вам лет?')
// if (age >= 21) { // if (true) -> if (20 >= 21)
//     console.log('Вам можно покупать сигареты!')
// }
// else {
//     console.log('Вам нельзя покупать сигареты!')
// }


// const answer1 = prompt('Напишите первый язык программирования, которую вы знаете:')
// const answer2 = prompt('Напишите второй язык программирования, которую вы знаете:')

// if (answer1 === 'JS' || answer2 === 'PHP') {
//     console.log('Вы нам подходите)')
// }
// else {
//     console.log('Вы нам не подходите. Мы вам перезвоним)')
// }

const gender = prompt('Какой у вас пол?')
const age = prompt('Сколько вам лет?')
const height = prompt('Какой у вас рост?')
const weight = prompt('Какой у вас вес?')
const hairColor = prompt('Какой у вас цвет волос?')

if (gender === 'Женщина' && age >= 20 && height >= 175 && weight <= 60 && hairColor === 'Коричневый') {
    console.log('Поздравляю, вы модель!!!')
}
else {
    console.log('Вы не модель!')
}
