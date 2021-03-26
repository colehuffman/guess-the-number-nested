// when button A is pressed the number variable increases by 1 and is displayed
input.onButtonPressed(Button.A, function () {
    // increases number by 1
    number += 1
    // displays number
    basic.showNumber(number)
})
// when button B is pressed the number variable decreases by 1 and is displayed
input.onButtonPressed(Button.B, function () {
    // decreases number by 1
    number += -1
    // sets number variable to the absolute value of itself, making it unable to be a negative number
    number = Math.abs(number)
    // displays number
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    // displays the amount of guesses are left
    basic.showString("" + (3 - guesses))
    // displays "Guesses Left" so that the user knows what the number means
    basic.showString("Guesses Left")
})
let guesses = 0
let number = 0
// sets the secretnumber variable to a random number between 0 and 20
let secretnumber = randint(0, 20)
/**
 * <---If the number is equal to the secret number the contained code will run
 */
basic.forever(function () {
    // If A+B is pressed the number variable is compared against the secretnumber variable
    if (input.buttonIsPressed(Button.AB)) {
        // if the number variable is less than or equal to the secretnumber variable the contained code will run
        // if the guesses variable reaches 3 the secretnumber is displayed followed by a reset
        // if the number variable is higher than the secretnumber variable (guess is too high) the word "Subtract" is displayed and the guesses variable increases by 1
        if (number <= secretnumber) {
            // if number doesnt equal secretnumber the user is told to add and the guesses counter increases by 1
            if (number != secretnumber) {
                // displays "Add"
                basic.showString("Add")
                // increases guesses variable by 1
                guesses += 1
            } else {
                // plays music
                music.playMelody("C5 G B A F A C5 - ", 300)
                // displays a check
                basic.showIcon(IconNames.Yes)
                // resets the microbit
                control.reset()
            }
        } else if (guesses == 3) {
            basic.showString("Good Try! Secret Number =")
            // displays secretnumber
            basic.showNumber(secretnumber)
            // resets
            control.reset()
        } else if (number > secretnumber) {
            // displays "Subtract"
            basic.showString("Subtract")
            // increases the guesses variable by 1
            guesses += 1
        }
    }
})
