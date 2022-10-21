const { minions } = require("./minions");
//==================================================================
// forEach
minions.forEach((element) => {
    console.log(element + ' is present!')
})
//==================================================================
// .map
const capitilizedMinions = minions.map(element => {
    if(element === 'kevin') {
        return 'kevin'
    } else {
        let notCapitalizedLetters = element.slice(1)
        return element.charAt(0).toUpperCase() + notCapitalizedLetters
    }
})
console.log(capitilizedMinions)

//==================================================================
// .filter
const actuallyCapitalizedMinions = capitilizedMinions.filter(element => {
    return element !== 'kevin'
})
console.log(actuallyCapitalizedMinions)

//==================================================================
// .every
const trueCapitilize = actuallyCapitalizedMinions.every(element => {
    return minions
})

console.log(trueCapitilize)

//==================================================================
// BONUS
//==================================================================
