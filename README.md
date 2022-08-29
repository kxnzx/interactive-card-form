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

![Mobile](images/Mobile1.gif)

### Links

- View my Solution on [Frontend Mentor]()
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

However, when I included the toggle function (to show the Thank You! Completion message after button has been clicked) the errors and the preventDefault() do not work anymore. How can I fix this?

I also wonder what input type to use for the cardnumber, month, year and cvc in HTML?

The REGEX that I used for the cardnumber does not function correctly either. How can I create the error when the wrong format has been entered?

Any help is much appreciated!

I tried the following to write the javascript shorter, but it did not work:

```js
// HOW TO ADD MULTIPLE ID'S TO VARIABLE

const main = document.querySelectorAll(
  "#cardname, #cardnumber, #expmonth, #expyear, #cvc"
);

const mirror = document.querySelectorAll(
  "#cardnameInscription, #cardnumberInscription, #expmonthInscription, #expyearInscription, #cvcInscription"
);

// HOW TO ADD EVENTLISTNER TO MULTIPLE VARIABLES WITH CLASS

[document.querySelector(".input"), document.querySelector(".details")].forEach(
  (item) => {
    item.addEventListener("input", function (event) {
      mirror.innerText = event.target.value.split("").join("");
    });
  }
);
```

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
