# Functional Programming in JS

## Objective
This is the repository to record my learnings about functional programming in JS.

## What is functional programming?
Functional programming is the process of building software using pure functions and avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions.

Difinition by [Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

Though, it is not possible not to have any side effects in a software product. The goal of functional programming is to manage it better for us to test and debug.

## FUnctional programmign concepts
- Avoid side effects
- Avoid mutations
- Avoid shared state
- Use pure functions
- Use function composition
- Use declarative code instead of imperative code

## What is a pure function?
- The function depends on the input provided and not on external data that changes.
- The function that doesn't cause side effects, meaning it doesn't cause change beyond its scope.
- Given the same input, the function will always return the same output.

## What are side effects?
- Changing a value globally (variable, property or data structure).
- Changing the original value of a functions argument.
- Throwing an exception.
- Printing to the screen or logging.
- Triggering an external process.
- Invoking other functions that have side-effects.

## Stateful program
A program is considered stateful if it is designed to remember data from events or user interactions. The remembered information is called the state of program.

A JS program stores data in variables and objects. The contents of these storage locations at any given moment while the program is running is considered its state.

## Shared states
### What are shared states
Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A hared scope can include global scope or closure scopes. A state is shared when it is in a scope where there are multiple functions that can access and modify the state.

### The problem with shared state
In order to understand the effects of function, you have to know all of other functions that have affect on the state. 

### Avoiding shared state
In order to avoid shared states in JS, we can pass the state between functions or clone the object when an object is passed so the original one will not be modified.

### Cloning an object in JS
#### Shallow copy
We can use `Object.assign({},obj)` or the spread operator, `...obj`, to shallow copy an object. However, it can't copy the objects inside the object since it is a shallow copy.

#### Deep copy
In order to copy an object deeply, we can use `JSON.parse(JSON.stringify(obj))`.

#### recude, map and filter
None of reduce, map and filter functions don't modify the original array.

reduce: combines the elements of an array using the function you specify.  
Map: passes each element of the array to the function you provided and returns a new array that consists of the values returned by that function.  
filter: returns a new array that is a subset of the existing array.

## Function composition
The idea of combining multiple functions with a single task in order to achieve complicated task.

### Functions (in the functional programming paradigm) VS. Procedures
- Functions have an input
- Functions return a value
- Functions are simplified to a single task

### Fist class funciton
The term "first-class" means that something is just a value. A first-class function is one that can go anywhere that any other value can go - there are few to no restrictions. Meaning, a first class function is treated as a value.

### Higher order function
Higher order functions are functions that operate on other functions by either taking them as arguments or returning them. The fact that JS supports first-class functions makes it possible to create higher order functions.

### Closure
- A closure is the local variables for a function - kept alive after the function has returned
- Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope
- A closure is a function having access to the parent scope, even after the parent function has closed

### Curring
#### Arity
Arity is the number of parameters that a function has.

#### Advantages of currying
It will take a function that expects multiple arguments and reduce it to multiple functions that expect only a single argument. This allows us to use high arity functions as a part of composition. Functions with only a single argument in composition can be called **unary functions**.

- Currying can be used to specialize functions
- Currying simplifies function composition

#### Partial application
- A partial application is a function which has been applied to some, but not yet all of its arguments. In other words, it's a function which has some arguments fixed inside its closure scope.
- Partial application is when we call a function with fewer arguments thatn it expects and that function returns a function that takes the remaining arguments.

#### Curried function
- A curried function is a function that takes multiple arguments one at a time.
- Currying is where a function that expects multiple arguments is broken down into successive functions that each take a single argument and return another function to accept the next argument.

## Imperative programming vs declarative programming
### Imperative programming
Imperative programming is a programming style that tells the computer how to accomplish some task.

### declarative programming
Declarative programming expresses the logic of a program without identifying the control flow. Control flow is abstracted away, so declarative code only needs to specify what to do, not how it should be done. Declarative code is much more easier to reason about than imperative code.

## Another functional approach using recursion and factory