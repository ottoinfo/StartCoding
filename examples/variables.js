//  What is a Variable

// // VAR - allow to overwrite
// var name = 'josh';
// console.log(name);
// name = 'mike';
// console.log(name);

// // Let - allow to overwrite
// let letName = 'josh';
// console.log(letName);
// letName = 'mike';
// console.log(letName);

// // Const - PERMANENT can NOT reassign
// const constName = 'josh';
// console.log(constName);
// // FAIL - throw Error and code stops ( never move forward )
// constName = 'mike';
// console.log(constName);

// Employee Sample
const company = { name: 'abz company'};
const employee = [{ name: 'bob', age: 22}, { name: 'steve', age: 33}];
const a = employee[1].name
const employeeName2 = employee[1].name
console.log(a, employeeName2) // return steve, steve


// const const = 6
const old = 50
// const new = 2
// console.log(const)


// - Cannot be a reserved word: Ex: `const`, `number`, `boolean`
// - Should be meaningful
// - Can NOT start with a number -> `1name`
// - Can Not contain a space or hyphen `first-name`, `first.name`

// You should come up with a common naming strategy, usually camel case
// Camel Case usually means the first letter is lowercase and every subsequent word is starts capitalized
// let thisisareallylongvariable; // BAD
// let thisIsAReallyLongVariable; // GOOD


let name_last;
let firstName =  'Mike';
let firstname = 'sam';
let FIRSTNAME = 'doug';

console.log(firstName === firstname) // false
console.log(firstName === FIRSTNAME) // false
console.log(firstName === firstName) // true

// When using triple equals === in JavaScript, 
// we are testing for strict equality. 
// This means both the type and the value we are comparing have to be the same.

// console.log, console.debug, console.warn, console.error
const isValid = false
if (isValid) {
    console.log('passed')
}else {
    console.error('failed')
}

// Add multiple messages in a `console`
console.log('one', 'two', 'three')
console.log({ a: 'one', b: 'two'}, '<--->')
console.log(isValid, firstName )
console.log({ isValid, firstName }) // simple object => { isValid: false, firstName: 'Mike' }



// Comparing Variables !!, <, >, >=, ==, ===, !==
let value1 = 3
let value2 = 9


console.log('----')
// Mike try
console.log('What are we comparing', { value1, value2})
let value3 = 3
let value4 = 9

if( 3 < 9 ) {
    console.log('I also have to feed my dog');
}

if( value4 <= 10 ) {
    console.log('I have to check on the kids');
}

if( value4 === 9 ) { // 9 === 9 // true
    console.log('I have to check on the kids');
}

if( value4 !== 10 ) { // 9 !== 10 // true
    console.log('I have to check on the kids');
}
//Stop
console.log('----')


// if else , if elseif else, ? : ( ternary operator )
let compareA = 1
let compareB = false
let compareC = 3

// return 'else'
if (compareA > compareC) {
    console.log('if')
} else {
    console.log('else')
}

// return 'greater'
if ( compareA > compareC) {
    console.log('less')
} else if (compareA < compareC ){
    console.log('greater')
} else {
    console.log('equal')
}

// ternary shorthand for if else => ? (if) : (else)
// return 'greater'
compareA > compareC ? console.log('+++ less') : console.log('+++ greater')
console.log(compareA > compareC ? '---less' : '--greater')

// Bad ternary don't work as just `IF`
// console.log(compareA > compareC ? '---less')

// Compare `&&` 
console.log(compareA > compareC && '=======    less') // return false
console.log(compareA < compareC && '=======    less') // return '=======    less'

// Multiply || Divide always take precidance
console.log( 1 + 3 * 300  ) // Mike say 1200 => 3*300 + 1 => 901
console.log( (1 + 3) * 300  ) // say 1200 


// Compare multiple items && ( and ) || ( or )
let dog = 'Dog'
let cat = 'Cat'
// dog && cat => ( dog && cat )
console.log( dog && cat ? 'both' : 'none')
cat = '' // empty value || false
console.log( dog && cat ? 'both' : 'none') // there was a Dog, but NO Cat return 'none'

// Complicating Logic, so lets simplify
const comparison = dog && cat ? 'both' : 'none' // return 'both' || 'none'
console.log(comparison)

// console.log( dog || cat ? 'one exist' : 'none')


// When you start you will write code DUMB ( meaning lots of lines )
// When you hit your MID Level you try to write as little lines
// When you hit SENIOR Level you will write dumb again understanding everyone should understand


// Multiple comparison
// Dumb Version
if ( 1 > 0 && 3< 4 && 5 === 5 && 7 === typeof 'number') {
    console.log('success - long camparison')
} else {
    console.log('fail - long camparison')
}
// Mid Level
console.log(1 > 0 && 3< 4 && 5===5 && 7 === typeof 'number' ? 'success - long camparison' : 'fail - long camparison')

// Senior write dumb
// const checkComparison = 1 > 0 && 3< 4 && 5 === 5 && 7 === typeof 'number'
const firstComparison = 1 > 0 
const secondComparison = 3 < 4
const thirdComparison = 5 === 5
const fourthComparison = 7 === typeof 'number'
const checkComparison = firstComparison && secondComparison && thirdComparison && fourthComparison
if (checkComparison) {
    console.log('success - long camparison')
} else {
    console.log('fail - long camparison')
}

// Escaping Quotes
// console.log('Why doesn't this work') 
console.log("Why doesn't this work") // one way
console.log('Why doesn\'t this work') // second way escape it `\`

// Check `typeof`




console.log(value1, value2)
console.log( value1 === value2) // false
console.log( null == undefined) // true
console.log( null === undefined) // false

console.log(null, undefined, false, 0, '') // All of these empty OR no value items
console.log(false == 0) // similar
console.log(false === 0) // absolute

