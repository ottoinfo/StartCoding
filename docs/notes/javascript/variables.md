# Variables

Variables are a fundamental to every programing language. This is a method to store data temporarily in a computers memory. We need to be able to access this memory later so we need to give this item a `NAME`.

```javascript
let myCustomVariable;
```

The `NAME` we want it to be human readable and something you will understand later. Also think if another person was gonna look at this code. Would they understand?

```javascript
// We have a file dealing with a Company and Employees
const company = { name: 'abz company'};
const employee = [{ name: 'bob', age: 22}, { name: 'steve', age: 33}];

const a = employee[1].name
const employeeName2 = employee[1].name

... 600 lines code ...

console.log(a, employeeName2) // return steve, steve
```



> variables start with var, let, const

`var` old school way where you could overwrite at anytime

`let` temporary placeholder that can be overwritten at anytime

`const` permanent value that can not be changed, if you try it will throw Error

# Variable Rules

- Cannot be a reserved word: Ex: `const`, `number`, `boolean`
- Should be meaningful
- Can NOT start with a number -> `1name`
- Can Not contain a space or hyphen `first-name`

# Variable Standards

You should come up with a common naming strategy, usually camel case

Camel Case usually means the first letter is lowercase and every subsequent word is starts capitalized

```javascript
let thisisareallylongvariable; // BAD
let thisIsAReallyLongVariable; // GOOD
```

# Case Sensitive

```javascript
let firstName =  'Mike';
let firstname = 'sam';
let FIRSTNAME = 'doug';
```

# Comparing Variables
```javascript
let firstName =  'Mike';
let firstname = 'sam';
let FIRSTNAME = 'doug';

console.log(firstName === firstname) // false
console.log(firstName === FIRSTNAME) // false
console.log(firstName === firstName) // true

let value1 = 3
let value2 = 9
console.log(value1, value2)
console.log( value1 === value2) // false
```