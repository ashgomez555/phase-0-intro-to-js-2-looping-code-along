// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    } 
    return gifts;
}

wrapGifts(gifts)


const names = ["Natalie", "Allison", "Vanessa"]
const event = "birthday"
const myArr = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
    myArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}

return myArr
}


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}