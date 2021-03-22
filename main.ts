// on button A pressed the number variable increases by 1 and is displayed
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
// on button B pressed the number variable decreases by 1 and is displayed
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (3 - guesses))
    basic.showString("Guesses Left")
})
let guesses = 0
let number = 0
// sets the secretnumber variable to a random number between 0 and 20
let secretnumber = randint(0, 20)
// restricts number variable from passing 0 and 20
number = Math.constrain(number, 0, 20)
basic.forever(function () {
    // If A+B is pressed the number variable is compared against the secretnumber variable
    // if the guesses variable reaches 3 the secretnumber is displayed followed by a reset
    if (input.buttonIsPressed(Button.AB)) {
        // if the number variable is equal to the secretnumber variable (guess is correct) music is played and a check is displayed followed by a reset
        // if the number variable does not equal the secretnumber variable (guess is incorrect) the microbit gives you tips (add/subtract)
        if (number == secretnumber) {
            music.playMelody("C5 G B A F A C5 - ", 300)
            basic.showIcon(IconNames.Yes)
            control.reset()
        } else if (number != secretnumber) {
            // if the number variable is lower than the secretnumber variable (guess is too low) the word "Add" is displayed and the guesses variable increases by 1
            // if the number variable is higher than the secretnumber variable (guess is too high) the word "Subtract" is displayed and the guesses variable increases by 1
            if (number < secretnumber) {
                // displays "Add"
                basic.showString("Add")
                // increases guesses variable by 1
                guesses += 1
            } else if (number > secretnumber) {
                // displays "Subtract"
                basic.showString("Subtract")
                // increases the guesses variable by 1
                guesses += 1
            }
        }
    } else if (guesses == 3) {
        basic.showString("Good Try! Secret Number =")
        basic.showNumber(secretnumber)
        control.reset()
    }
})
