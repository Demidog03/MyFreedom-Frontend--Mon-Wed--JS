// BOM - Browser Object Model

// console.log(location)
// console.log(location.reload()) // Обновить сайт вручную в js
//location.replace('https://google.com') // аналог href ссылки в html

// console.log(navigator)
// navigator.clipboard.writeText('Hello')

// console.log(history)

// console.log(screen)


// DOM - Document Object Model

// получить доступ к HTML тэгам

// querySelector()
// const tag1 = document.querySelector('h1')
// const tag1 = document.querySelector('#tag1')
// const tag2 = document.querySelector('#tag2')
// const tags = document.querySelectorAll('h1')

// console.log(tag1)
// console.log(tag2)
// console.log(tags)


// getElementById()
// const tag1 = document.getElementById('tag1')
// console.log(tag1)

// getElementsByClassName()
// const tags = document.getElementsByClassName('tag')
// console.log(tags)

// getElementsByName()
// const tags = document.getElementsByName('programming_language')
// console.log(tags)

// getElementsByTagName
// const tags = document.getElementsByTagName('input')
// console.log(tags)

// const tag1 = document.querySelector('#tag1')
// tag1.innerText = 'MyFreedom'
// tag1.style.color = 'red'
// tag1.style.fontSize = '15px'

// ЗАДАНИЕ 2

// // 1
// const ulTag = document.querySelector('#list')

// for(let i = 0; i < ulTag.children.length; i++) {
//     console.log(ulTag.children[i].innerText)
// }

// for(let i = 0; i < ulTag.children.length; i++) {
//     ulTag.children[i].innerText = i
// }

// //2
// const allLiTags = document.querySelectorAll('#list li')

// for(let i = 0; i < allLiTags.length; i++) {
//     console.log(allLiTags[i].innerText)
// }

// for(let i = 0; i < allLiTags.length; i++) {
//     allLiTags[i].innerText = i
// }


// remove()
// const text1 = document.getElementById('text1')
// text1.remove()

const forRemoveTags1 = document.querySelectorAll('.forRemove')
// const forRemoveTags2 = document.getElementsByClassName('forRemove')

// for (const tag of forRemoveTags1) {
//     tag.remove()
// }

// for(let i = 0; i < forRemoveTags1.length; i++) {
//     forRemoveTags1[i].remove()
// }

// forRemoveTags1.forEach(tag => {
//     tag.remove()
// })
