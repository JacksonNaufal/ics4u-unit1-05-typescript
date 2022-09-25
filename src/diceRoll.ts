/**
 * The program is the classic
 * diceroll guesser
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// These are my constants and variables for my program
let counter = 1
const max = 6
const min = 1
const randomNumber = Math.floor(Math.random() * max) + min

// this loop will loop an infinite amount of times, till the guess is correct
// or till the user inputs something stupid, ex "Bob".
while (true) {
  // let userInput = any number less than 6 and greater than or equal to one
  const userInput = prompt('Enter your number (max: 6) (min: 1): ')
  const userGuess = parseFloat(userInput)

  // this checks if the user inputted a valid item
  if (userGuess > max || userGuess < min) {
    console.log('Invalid Number!')
  } else {
    if (userGuess < max || userGuess > min) {
      if (userGuess === randomNumber) {
        console.log('You Guessed Right!')
        console.log(`It took you ${counter} attempts!`)
        break
      } else if (userGuess > randomNumber) {
        console.log('You Guessed To High')
        console.log(`This is your ${counter} attempt!`)
      } else if (userGuess < randomNumber) {
        console.log(`This is your ${counter} attempt!`)
        console.log('You Guessed To Low!')
      }
      counter = counter + 1
    } else {
      console.log('Invalid Input!')
      break
    }
  }
}
console.log('\nDone.')
