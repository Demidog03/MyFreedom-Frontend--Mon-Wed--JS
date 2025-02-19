// setTimeout(() => {
//     console.log('Привет')
// }, 0)
// console.log('Пока')


// Синхронный код - выполняется сразу и по порядку (сверху вниз)
// Ассинхронный код - несколько кодов могут выполняться паралельно

// const promise = new Promise((resolve) => {
//     resolve('ПРОМИС')
// }) // 1
// promise.then(value => {
//     console.log(value)
// }) // 4
// console.log('Первый код') // 2
// setTimeout(() => {
//     console.log('ТАЙМАУТ')
// }, 0) // 5
// console.log('Третий код') // 3



// const button = document.getElementById('button')

// // setTimeout
// setTimeout(() => {
//     console.log('Таймаут')
// }, 500)

// // setInterval
// const interval = setInterval(() => {
//     console.log('Интервал')
// }, 500)

// button.addEventListener('click', () => {
//     clearInterval(interval) // остановить интервал
// })



// API - механизм обращения к серверу с правилами
// httpRequest
// const httpRequest = new XMLHttpRequest()

// httpRequest.open('GET', 'https://jsonplaceholder.org/postsaewrw')
// httpRequest.send()
// httpRequest.onload = () => {
//     if(httpRequest.status === 404) {
//         alert('Ошибка запроса!')
//         return
//     }
//     const data = JSON.parse(httpRequest.response) // ответ запроса
//     console.log(data)
//     console.log(httpRequest)
// }

// httpRequest.onerror = () => {
//     alert('Ошибка соединения!')
// }

// Задание 1 

// 1-решение
// for(let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(`Сообщение номер ${i}`)
//     }, i * 2000)
// }

// 2000 = 1 * 2000
// 4000 = 2 * 2000
// 6000 = 3 * 2000
// 8000 = 4 * 2000
// 10000 = 5 * 2000

// 2-решение
// let num = 1
// const interval = setInterval(() => {
//     if(num === 6) {
//         clearInterval(interval)
//         return
//     }
//     console.log(`Сообщение номер ${num}`)
//     num++
// }, 2000)


// Задание 2
const clock = document.getElementById('clock')
setInterval(() => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(seconds < 10) {
        seconds = '0' + seconds
    }
    if(minutes < 10) {
        seconds = '0' + seconds
    }
    if(hours < 10) {
        seconds = '0' + seconds
    }

    console.log(`${hours}:${minutes}:${seconds}`)
    clock.innerText = `${hours}:${minutes}:${seconds}`
}, 1000)


