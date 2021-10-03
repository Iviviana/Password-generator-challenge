# Password Generator Challenge

This project required writing Javascript to make a password generator for users. It required the use of arrays, functions, and prompts to acheieve what was desired.

![screenshot of webpage](/friendly-parakeet/Develop/screenshot.png)

# Organization

Above the first function, we have arrays that when called on will list the characters the user selected to us. The array below those is used for the prompts so the user can select what characters they will use.

# characterSelection function

This is the first function, it contains the prompts for the user to select the characters they would like to use (from lowercase, uppercase, numeric, and special characters). There's also the prompt for the desired length of the password here. 

It contains a series of if and else statements with a window confirm for each selection, excluding the length of the password, that let the user know which option they selected. 

# generatePassword function

This is the second and last function. It is the function that will generate the password for the user. It uses the arrays that contain the characters of each option and using a series of if statements places the ones selected by the users into a new array. The new array is then used in a loop using Math.random to pull random positions from the array, into the password variable. The password will then show up in the generate password text box.

[Link to deployed webpage](https://iviviana.github.io/Password-generator-challenge/)