// MIRROR THE TEXT ON THE CREDITCARD INSCRIPTIONS WHEN THE USER IS TYPING IN THE INPUT:
// Cardname
const cardname = document.getElementById("cardname");
const mirrorCardname = document.getElementById("cardnameInscription");

cardname.addEventListener("input", function (event) {
  mirrorCardname.innerText = event.target.value.split("").join("");
});
// Cardnumber
const cardnumber = document.getElementById("cardnumber");
const mirrorCardnumber = document.getElementById("cardnumberInscription");

cardnumber.addEventListener("input", function (event) {
  mirrorCardnumber.innerText = event.target.value.split("").join("");
});
// Create space after every four characters with input for Cardnumber
document.getElementById("cardnumber").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
// Month
const month = document.getElementById("expmonth");
const mirrorMonth = document.getElementById("expmonthInscription");

month.addEventListener("input", function (event) {
  mirrorMonth.innerText = event.target.value.split("").join("");
});
// Year
const year = document.getElementById("expyear");
const mirrorYear = document.getElementById("expyearInscription");

year.addEventListener("input", function (event) {
  mirrorYear.innerText = event.target.value.split("").join("");
});
// Cvc
const cvc = document.getElementById("cvc");
const mirrorCvc = document.getElementById("cvcInscription");

cvc.addEventListener("input", function (event) {
  mirrorCvc.innerText = event.target.value.split("").join("");
});
// ERRORs <- CALL them Before Using Them
// Add class error
function addError(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
}
// Remove error message:
function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}
// ERROR "WRONG FORMAT" CARDNUMBER:
// REGEX = Regular Expression
function isValid(cardnumber) {
  // Add the regex to a const also use a better regex for 12 number credit card
  const cardRegex = new RegExp(
    "\\b[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\b"
  );
  return cardRegex.test(cardnumber);
}

// TOGGLE TO THANK YOU MESSAGE WHEN CONFIRM BUTTON IS CLICKED:
function confirm() {
  if (document.querySelector(".cardform").style.display === "none") {
    document.querySelector(".completionMessage").style.display = "none";
    document.querySelector(".cardform").style.display = "block";
  } else {
    document.querySelector(".cardform").style.display = "none";
    document.querySelector(".completionMessage").style.display = "block";
  }
}

// ACTIVE STATES WHEN SUBMITTING FORM:
// This tells the browser to pay attention to the following element:
const form = document.getElementById("form");

// This tells the browser to prevent the form from submitting by default:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // This tells the browser to pay attention to the following elements:
  const cardname = form["cardname"].value;
  const cardnumber = form["cardnumber"].value;
  const expmonth = form["expmonth"].value;
  const expyear = form["expyear"].value;
  const cvc = form["cvc"].value;
  // When the input is empty, do this:
  if (cardname === "") {
    addError("cardname", "Can't be blank");
    // When the input is valid, do this:
  } else {
    removeError("cardname");
  }
  // When the input is empty, do this:
  if (cardnumber === "") {
    addError("cardnumber", "Can't be blank");
    // When the input is invalid check REGEX and do this:
  } else if (!isValid(cardnumber)) {
    // Changed the string error for a 16 characters validation
    addError("cardnumber", "Wrong format, numbers only at least 16 characters");
    // When the input is valid, do this:
  } else {
    removeError("cardnumber");
  }
  // When the input is empty, do this:
  if (expmonth === "") {
    addError("expmonth", "Can't be blank");
    // When the input is valid, do this:
  } else {
    removeError("expmonth");
  }
  // When the input is empty, do this:
  if (expyear === "") {
    addError("expyear", "Can't be blank");
    // When the input is valid, do this:
  } else {
    removeError("expyear");
  }
  // When the input is empty, do this:
  if (cvc === "") {
    addError("cvc", "Can't be blank");
    // When the input is valid, do this:
  } else {
    removeError("cvc");
  }
  // Dirty way of returning when error but works if there is no error class the form is valid and the confirm function executes
  const isThereAnyError = document.querySelector(".error");
  if (isThereAnyError) return;
  confirm();
});
