// function sayHello() {
//     console.log('Hello!')
// }

// const sayHello = function() {
//     console.log('Hello!')
// }

// const sayHello = () => {
//     console.log('Hello!')
// }

// sayHello()


// ЗАДАНИЕ 1

// function sum(num1, num2) {
//     if(arguments.length !== 2) {
//         console.log('введите два параметра')
//     }
//     else if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log('введенные данные не являются числами')
//     }
//     else {
//         console.log(num1 + num2);
//     }
// }

// sum()

// ЗАДАНИЕ 2

// function square(a) {
//     // if(typeof a === 'undefined') {
//     //     console.error('Функция "square" не может быть вызвана без аргумента')
//     // }
//     if(arguments.length !== 1) {
//         console.error('Функция "square" не может быть вызвана без аргумента')
//     }
//     else {
//         console.log(a * a)
//     }
// }

// square()

// function quessNumber(num1) {
//     const min = 1;
//     const max = 10;
//     const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

//     console.log(num2)

//     if( num1 == num2 ) {
//         console.log("Выигрыш")
//     }
//     else{
//         console.error("Проигрыш")
//     }
// }

// quessNumber()
// quessNumber()


// for (let i = 0; i < 10; i++) {

// }

// for (const element of object) {
    
// }

// for (const key in object) {
    
// }

// while () {

// }

// for (let i = 0; i < 5; i++) {
//     if(i === 2) {
//         break;
//     }
//     console.log(i)
// }

// FOR EACH
// const numbers = [2, 5, -43, -7, 31, -9, 7]
// numbers.forEach((value, index, array) => {
//     // if(index === 2) {
//     //     break;
//     // }; // нельзя остановить!
//     console.log(value)
// })

// numbers.forEach(function(value, index, array) {
//     console.log(value)
// })

// const numbersClone = numbers.map((value) => {
//     return value
// })

// Задание: Создать копию массивы но вместо отрицательных чисел должен быть null
//[2, 5, null, null, 31, null, 7]

// console.log(numbers)
// console.log(numbersClone)


// ЗАДАНИЕ 4

// function copyArr(arr) {
//     return arr.map(value => value)
// }

// function copyArr(arr) {
//     const cloneArr = []
//     arr.forEach(value => {
//         cloneArr.push(value)
//     })
//     return cloneArr
// }

// const cloneArr1 = copyArr([1, 2, 3, 4])
// const cloneArr2 = copyArr([4, 5, 6, 7])

// console.log(cloneArr1)
// console.log(cloneArr2)


// ЗАДАНИЕ 5
// ['Riza', 'Nazgul', 'Indira']
// ['Hello, Riza', 'Hello, Nazgul', 'Hello, Indira']

// const arr = ['beka', 'nurik', 'aruzhan']
// function copyArr(arr) {
//     const newArr = arr.map((value) => "Hello" + value)
//     return newArr
// }


// console.log(copyArr(arr))


// const name = new String('Olzhas')
// console.log(name)
// console.log(name.length)
// console.log(name[1])
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())


// const speciality = 'Frontend Developer'
// console.log(speciality.trim())
// console.log(speciality.includes('a'))
// console.log(speciality.slice(0, 5))
// console.log(speciality.slice(9))

// const arr = [1, 2, 3, 4, 5]

// console.log(arr.slice(0, 2)) // ctrl + c
// console.log(arr.splice(0, 2)) // ctrl + x
// console.log(arr)


// ЗАДАНИЕ 8
function ucFirst(str) {
    // const firstLetter = str[0].toUpperCase()
    // const slicedStr = str.slice(1)
    // console.log(firstLetter + slicedStr)
    console.log(str[0].toUpperCase() + str.slice(1))
}
ucFirst('frontend')
ucFirst('backend')
ucFirst('myFreedom')