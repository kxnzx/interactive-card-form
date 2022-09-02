# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

#### Screensize 1440px - Desktop

![Desktop](images/Desktop.gif)

#### Screensize 375px - Mobile

![Mobile](images/Mobile.gif)

### Links

- View my Solution on [Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-card-form-with-vanilla-javascript-ZjsgI9xNlr)
- View the Live Site [here](https://kxnzx.github.io/interactive-card-form/)

## My process

- HTML semantics
- Importing Google Fonts
- Set variables
- Reset default settings
- Styles (Mobile First)
- JavaScript

### Built with

- Semantic HTML5 markup
- JavaScript
- SASS custom properties
- CSS Grid
- CSS Flexbox
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/) - For Fonts

### What I learned

I succeeded in the following:

- mirroring the text from the input into the creditcard inscription
- display of error messages when input is empty
- create space after every four characters with input for cardnumber
- prevent button from submitting by default

However, when I included the toggle function (to show the Thank You! Completion message after button has been clicked) the errors and the preventDefault() do not work anymore.

I also wonder what input type to use for the cardnumber, month, year and cvc in HTML?

The REGEX that I used for the cardnumber does not function correctly either. How can I create the error when the wrong format has been entered?

Any help is much appreciated!

Answer from @DavidMorgade on Frontend Mentor:

The first thing that take me more time to figure out is why the form wasn't submitting, I was clicking the button adding console logs in your form and they weren't working, and then I noticed that the main problem wasn't in your JS files, was in your HTML.

You were trying to submit the form using a html <button>, I just changed it to <input type='submit'> and now the form was submitting.

```html
<!--Removed onclick html is deprecated and causes bugs, added input type submit, because either the form won't submit with a html button-->
<input type="submit" class="confirm_button" value="Confirm" />
```

The other main problem was that you were using an html function call onclick this is a really bad practice that can cause you a lot of problems (look how your form wasn't working correctly), you should use your confirm() function inside your form submission, not onclick because you want it to execute when your form is submitted, not when the button is clicked.

Other major change that I did was adding your confirm() function to your form submit but only executing it when no error message was displayed, like this:

const isThereAnyError = document.querySelector('.error');
if(isThereAnyError) return;
confirm();

I was selecting errors, if there are no error classes around the isThereAnyError will be undefined wich means false wich causes your form to stop executing and return, if there were no error classes your form will keep going and will use the confirm() function.

Moved all your validate functions to the top for readable reasons, you were using them before calling them.

Added a better regex for 16 card numbers check.

    Recomendations for future projects:

Instead of using a lot of if else checkers, try selecting all the input at once and do the validation with a loop checking the type and adding the errors, this is a little bit harder than the solution you got, it will come with time don't worry.

Use more modern syntax that will make your code much more readable, ternay operators, logical && or || operators, try making your code more dinamic!, no pressure on this, just practice and read a lof of documentation / watch more ES6+ content.

    Still missing on your JS some things:

Validate that the year and month are digits and not letters. Validate CVC is a digit of 3 numbers.

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
