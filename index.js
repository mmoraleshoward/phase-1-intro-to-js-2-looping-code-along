// Code your solutions in this file

/**const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);**/

function writeCards(names, eventName){
    let messages = []
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}

function countDown(count) {
    while (count >= 0){
        console.log(count--)
    }
    return count
}

