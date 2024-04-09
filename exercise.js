// const originalName = 'abba'


// const lowerCase =  originalName.toLocaleLowerCase()
// const convertToArray = lowerCase.split('')

// const reverseName = convertToArray.reverse().join("")

// let isPalindromes = false

// if(originalName === reverseName) {
//     isPalindromes = true
// }


// console.log(reverseName)
// console.log(originalName)

// console.log(isPalindromes)


// function reverseValue (str) {
//     console.log('str', str)
//     let reversed = ''

//     for(let x of str) {
//         // console.log('x', x)
//         console.log('reversed', reversed)

//     reversed = x + reversed
// }
//     // console.log(reversed)
// }

// reverseValue("poy")



// const numbers  = [2, 3, 5, 6,8]

// let textNumbers = ""

// for(let i =0 ; i < numbers.length; i++) {
//     textNumbers += numbers[i]
// }

// console.log(textNumbers)


// const originalName = "apple"

// const arrayName = originalName.split("")
// // console.log('arrayName', arrayName)
// let reverseName = ""


// // for(let i = 0; i < arrayName.length; i++) {
// //     reverseName =  arrayName[i] + reverseName
// // }

// function reverNameFunc (str) {
//     for(let x in str) {
//         reverseName = str[x] + reverseName
//     }

// }


// reverNameFunc('poyyy')

// // arrayName.map((element, i) => {


// // reverseName = element + reverseName
// // })

// console.log(reverseName)





// const strValue = '32eddseew3'


// const converToArray = strValue.split('')

// const eachString = {}

// converToArray.forEach(element => {
//     const key = isNaN(element) ? element : parseInt(element)
//     if(eachString[key]) {
//         eachString[key]++
//     }else {
//         eachString[key] = 1
//     }
// });

// let maxChar = {}
// console.log('each', eachString)
// for( let x in eachString) {
//     console.log('x',Object.values(maxChar)[0])

//     if(!Object.values(maxChar)[0]) {
//         console.log(true)
//         maxChar[x] = eachString[x]
//     }else {
//         console.log(false)

//         if(Object.values(maxChar)[0] <  eachString[x]) {
//         Object.keys[maxChar] = eachString[x]

//         }
//     }

// }


// console.log('maxChar', maxChar)


// eachString.forEach(element => {
//     console.log(element)
// });

// console.log('eachString', eachString)


// count the character how many repeat and get the max character that repeat
// const strValueTest = '32eddseew3'

// const stringToArray = strValueTest.split('')


// const countChar = {}


// stringToArray.forEach(element => {
//     if(countChar[element]) {
//         countChar[element]++
//     }else {
//         countChar[element] = 1 
//     }
// });

// console.log('countChar', countChar)


// let maxCharCount = {}


// for(let x in countChar) {

//     // console.log(x, countChar[x])
//     // console.log(Object.keys[maxCharCount], ' he;lllo')

//     if(!Object.keys(maxCharCount)[0]) {
//         // console.log('triee')
//         maxCharCount[x] = countChar[x]
//     }else {

//         if(countChar[x] > Object.values(maxCharCount)[0] ) {
//             console.log('true',       JSON.parse(maxCharCount[Object.keys(maxCharCount)]))
//             maxCharCount[Object.keys(maxCharCount)] 

//         }
//     }
// }

// console.log('maxCharCount', maxCharCount, Object.keys(maxCharCount))


// count the character how many appear, then get that

// const strValueTest = '32eddseew3'
// const splitValue = strValue.split('')

// const countChar = {}


// splitValue.forEach(element => {
//     if(countChar[element]) {
//         countChar[element]++
//     }else {
//         countChar[element] = 1
//     }
// });


// let maxChar = 0

// for(let x in countChar) {



//     if(!Object.keys(maxChar)[0]) {
//         console.log('trie')
//         maxChar = x
//     }else {
//         if(Object.values(maxChar)[0] < countChar[x] ) {
//             maxChar = x
//         }
//     }

// }

// console.log('maxChar', `${maxChar}: ${countChar[maxChar]}`)


// const reverseInteger = 11134444
// const stringValue = reverseInteger.toString()
// const arrayValue = stringValue.split('')
// const reverseValue = arrayValue.reverse()
// const reverseString = reverseValue.join("")
// const finalReverseValue = parseInt(reverseString)



// for(let i = 0; i < 15; i++) {

//     if(i%3 === 0 && i%5===0) {
//         console.log('fizzbuzz')
//         i++
//     }

//     if(i%3===0){
//         console.log('fizz')
//         i++
//     }
//     if(i%5===0){
//         console.log('buzz')
//         i++
//     }
//     if(i >15){
//         break;
//     }

//     else {
//         console.log(i)
//     }
// }

// const strValue = 'hellopoy'

// const countStr = {}
// let isUnique = null
// for (let x of strValue) {
//     countStr[x] ? countStr[x]++ : countStr[x] = 1
// }


// for (let index in countStr) {
//     console.log('countStr', countStr.${index})

//     if (countStr[index] > 1) {
//         isUnique = false
//         break
//     }
//     isUnique = true

// }

// console.log('cor', isUnique)

const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize("screenshot.png", config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })