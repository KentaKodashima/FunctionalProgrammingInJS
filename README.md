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