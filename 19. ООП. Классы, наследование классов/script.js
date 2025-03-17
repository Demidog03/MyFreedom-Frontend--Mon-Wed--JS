// OOP - Object Oriented Programming

// const student1 = {
//     name: 'Ainagul',
//     speciality: 'Frontend Developer',
//     work: function() {
//         console.log(`Ainagul is working as ${this.speciality}!`)
//     },
//     address: {
//         city: 'Astana',
//         country: 'Kazakshtan',
//         showAddress() {
//             console.log(`Ainagul is living in ${this.country}, ${this.city}`)
//         }
//     }
// }

// const student2 = {
//     name: 'Galymzhan',
//     speciality: 'Backend Developer',
//     work() {
//         console.log(`Galymzhan is working as ${this.speciality}!`)
//     },
//     address: {
//         city: 'Astana',
//         country: 'Kazakstan',
//         showAddress() {
//             console.log(`Galymzhan is living in ${this.country}, ${this.city}`)
//         }
//     }
// }

// student1.speciality = 'UX/UI Designer'
// student1.speciality = 'QA Engineer'
// student2.speciality = 'ML Engineer'
// console.log(student1)

// student1.work()
// student2.work()

// student1.address.showAddress()


// ФУНКЦИЯ-КОНСТРУКТОР
// function Student(name, speciality, country, city) {
//     // this = {}
//     this.name = name
//     this.speciality = speciality
//     this.address = {
//         country,
//         city
//     }
//     this.work = function() {
//         console.log(`${this.name} is working as ${this.speciality}`)
//     }
//     this.showAddress = function() {
//         console.log(`${this.name} is living in ${this.address.country}, ${this.address.city}`)
//     }
//     // return this
// }

// const student1 = new Student('Nazgul', 'Devops Engineer', 'Kazakhstan', 'Almaty')
// const student2 = new Student('Akzhan', 'SysAdmin', 'Vietnam', 'Dalat')

// console.log(student1)
// console.log(student2)

// student1.work()
// student1.showAddress()
// student2.work()
// student2.showAddress()

// ЗАДАНИЕ 2
// function Shop(title, address) {
//     this.title = title
//     this.address = address
// }

// const shop1 = new Shop('Techodom', 'Kabanbai Batyr 62, MEGA Silkway')
// const shop2 = new Shop('Mechta', 'Syganak 3')

// const shops = [shop1, shop2]
// console.log(shops)

// const shopAddresses = shops.map(shop => shop.address)
// console.log(shopAddresses)


// CLASS
// function Student(name, speciality, country, city) {
//     // this = {}
//     this.name = name
//     this.speciality = speciality
//     this.address = {
//         country,
//         city
//     }
//     this.work = function() {
//         console.log(`${this.name} is working as ${this.speciality}`)
//     }
//     this.showAddress = function() {
//         console.log(`${this.name} is living in ${this.address.country}, ${this.address.city}`)
//     }
//     // return this
// }

// class Student {
//     constructor(name, speciality, country, city) {
//         this.name = name
//         this.speciality = speciality
//         this.address = {
//             city,
//             country
//         }
//     }

//     work() {
//         console.log(`${this.name} is working as ${this.speciality}`)
//     }

//     showAddress() {
//         console.log(`${this.name} is living in ${this.address.country}, ${this.address.city}`)
//     }
// }

// const student1 = new Student('Erbol', 'Frontend Developer', 'Canada', 'Toronto')
// const student2 = new Student('Guzel', 'Cloud Engineer', 'France', 'Paris')

// console.log(student1)
// console.log(student2)

// student1.work()
// student2.work()

// student1.showAddress()
// student2.showAddress()

// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')


// ПРИНЦИПЫ ООП
// Abstraction - Абстракция
// Inheritance - Наследование
// Polymorphism - Полиформизм
// Incapsulation - Инкапсуляция

// Abstraction !== abstract class, не обьясняй как делать а просто делай
// class Human {
//     constructor(name) {
//         this.name = name
//         this.speed = '0 m/s'
//     }

//     walk() {
//         console.log(`${this.name} is walking!`)
//         this.speed = '3 m/s'
//     }

//     run() {
//         console.log(`${this.name} is running!`)
//         this.speed = '10 m/s'
//     }
// }

// const human1 = new Human('Indira')
// human1.walk()
// human1.run()
// console.log(human1)

// const numbers = [2, 45, 65, 23]
// numbers.forEach((num) => {
//     console.log(num)
// })


// Inheritance - у каждого успешного человека стоит за спиной неудачник
// class Developer {
//     constructor(name, language) {
//         this.name = name
//         this.language = language
//     }

//     getInfo() {
//         console.log(`${this.name} is a developer, who codes with ${this.language}`)
//     }

//     code() {
//         console.log(`Developer ${this.name} is coding!`)
//     }
// }

// // Frontend Developer - Front (js)
// // Web Developer - Front (js), back(python, php, c#, java, golang)

// class WebDeveloper extends Developer {
//     code() {
//         console.log(`Web developer ${this.name} is coding`)
//     }
// }

// class FrontendDeveloper extends WebDeveloper {
//     code() {
//         console.log(`Frontend Developer ${this.name} is coding`)
//     }
// }

// const developer1 = new Developer('Riza', 'Golang')
// console.log(developer1)
// developer1.getInfo()
// developer1.code()

// const developer2 = new WebDeveloper('Akzhan', 'Java')
// console.log(developer2)
// developer2.getInfo()
// developer2.code()


// Polymorphism - вы не понимаете, это другое
class FrontendDeveloper {
    constructor(name, framework) {
        this.name = name
        this.framework = framework
    }

    getInfo() {
        console.log(`${this.name} is a frontend developer, who uses ${this.framework} framework!`)
    }

    work() {
        console.log(`${this.name} is coding layout and functionality of website!`)
    }
}

class MiddleFrontendDeveloper extends FrontendDeveloper {
    work() {
        super.work()
        console.log(`${this.name} is working with complex components and make unit tests!`)
    }
}

const frontendDeveloper1 = new FrontendDeveloper('Ainagul', 'Next.js')
frontendDeveloper1.getInfo()
frontendDeveloper1.work()

const frontendDeveloper2 = new MiddleFrontendDeveloper('Galymzhan', 'Angular')
frontendDeveloper2.getInfo()
frontendDeveloper2.work()