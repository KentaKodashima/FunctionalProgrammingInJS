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

## What are shared states
Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A hared scope can include global scope or closure scopes. A state is shared when it is in a scope where there are multiple functions that can access and modify the state.

## The problem with shared state
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