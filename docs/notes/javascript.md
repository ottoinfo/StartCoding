# Why Javascript?

No correct answer. Why choose any language? Its most likely what you know and have used previously. I don't want to tell anybody what language they should use or what will have the best chance of getting me a job. You can do a google search for `scripting language usage statistics` or look at a website like [PYPL PopularitY of Programming Language](https://pypl.github.io/PYPL.html) to try to figure out a languages statistics or future. Is it trending up or down.

You may want to look at [Glass Door](https://www.glassdoor.com/Salaries/web-engineer-salary-SRCH_KO0,12.htm) to find a baseline for engineering salaries. You can do google searches: `front end engineering salary`, `back end engineering salary`, `mobile engineering salary`, `game engineering salary`, `qa engineering salary`, etc... 

> According to some sources, the difference is as little as 1%, while other sources (such as Glassdoor) suggest that back end engineers can earn even 25% more than front end developers!

Another idea is look at [indeed](https://www.indeed.com/jobs?q=front+end+Engineer&l=) and start checking job positions available for different roles. Understand that the results are probably skewed. Jobs may say `must know back end. front end, and can design for the web...`

- web designer (22,666)
- full stack engineer (19,099)
- front end engineer (14,941)
- back end engineer (17,019)
- qa engineer (14,696)
- mobile engineer (1,269)
- iOS engineer (5,140)
- android engineer (9,694)

# Learning a Language

The most important part is to learn a language and understand the lifecycle and ideas behind how code works. You can and should be able to take the basics and apply to another language. Example would be like learning spanish. You might not understand Italian but some words will be similar and you will kind of understand.

I have a list of users and I need to print or log their name. I just need to know how I would do this in one language and I can google search the rest. `how to loop over object and grab attribute in javascript`.

```
// data.json
{
    name: 'Cameron',
    title: 'Junior PHP Developer',
    yearsExperience: 2,
},
{
    name: 'Tom',
    title: 'Lead Frontend/JavaScript Developer',
    yearsExperience: 8,
},
{
    name: 'Steven',
    title: 'iOS Developer',
    yearsExperience: 4,
},
```

```javascript 
for (person in data) {
    console.log(person.name)
}
```

```php 
foreach ($data as &$person) {
    print_r($person)
}
```

```python
for item in data:
   print item.name
```

Every language has there own idiosyncrasy for writing code. This should hopefully be apparent.

# Compiler and Entrypoint

A `Compiler` is a program that converts instructions into a machine-code or lower-level form so that they can be read and executed by a computer.

`Entrypoint` is a point in a program where the execution of a program begins, and where the program has access to command line arguments.

Public Private Protected

Variables ( var, let, const )

Types ( string, number, boolean, array, object )

> var name: string = 'mike' 
> var hasName: boolean = false

Closures

Hoisting

Function

Scope
- local
- block
- global

Encapsulation

## Class
`public` - the property or method can be accessed from everywhere. This is default
`protected` - the property or method can be accessed within the class and by classes derived from that class
`private` - the property or method can ONLY be accessed within the class

> Protected properties are usually prefixed with an underscore _


Memory & Garbage Collection

Event Loop


OOP vs Functional




