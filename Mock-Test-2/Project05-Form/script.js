// function for validate email //
// ===========================//

function validateEmail() {
  var email = document.getElementById("email").value.trim();

  if (email === "") {
    alert("Email can't be empty");
    return false;
  } else if (!validateEmailFormat(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

function validateEmailFormat(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================= //
// function for validateage
// ============================= //

function validateAge() {
  var age = document.getElementById("age").value.trim();

  if (age === "") {
    alert("Age can't be empty");
    return false;
  } else if (isNaN(age) || parseInt(age) < 18) {
    alert("Age should be a number and should not be less than 18 years");
    return false;
  }

  return true;
}
// ========================= //
// function for valid color //
// ========================= //

function validateColor() {
  var color = document.getElementById("color").value.trim();

  if (color === "") {
    alert("Color can't be empty");
    return false;
  }

  return true;
}
//=========================//
// function for date //
// ========================//
function validateDate() {
  var date = document.getElementById("date").value.trim();

  if (date === "") {
    alert("Date can't be empty");
    return false;
  } else if (!validateDateFormat(date)) {
    alert("Please enter a valid date in the format YYYY-MM-DD");
    return false;
  } else if (!validateDateRange(date)) {
    alert("Date should not be more than 5 years old from the current date");
    return false;
  }

  return true;
}

function validateDateFormat(date) {
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
}

function validateDateRange(date) {
  var inputDate = new Date(date);
  var currentDate = new Date();
  var maxAge = new Date(
    currentDate.getFullYear() - 5,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  return inputDate <= currentDate && inputDate >= maxAge;
}

//=========================//
// function for gender //
// ========================//
function validateGender() {
  var gender = document.querySelector('input[name="gender"]:checked');

  if (!gender) {
    alert("Please select a gender");
    return false;
  }

  return true;
}
//=========================//
// function for checking name //
// ========================//
function validateName() {
  var name = document.getElementById("name").value.trim();

  if (name === "") {
    alert("Name can't be empty");
    return false;
  } else if (/\d/.test(name)) {
    alert("Name should not contain any numbers");
    return false;
  } else if (/[^\w\s]/.test(name)) {
    alert("Name should not contain any special characters");
    return false;
  }

  return true;
}

//=========================//
// function for valid phonenumber //
// ========================//
function validatePhoneNumber() {
  var phone = document.getElementById("phone").value.trim();

  if (phone === "") {
    alert("Phone number can't be empty");
    return false;
  } else if (!/^\d{10}$/.test(phone)) {
    alert("Phone number should have exactly 10 digits");
    return false;
  }

  return true;
}

//=========================//
// function for valid password //
// ========================//

function validatePassword() {
  var password = document.getElementById("password").value.trim();

  if (password === "") {
    alert("Password can't be empty");
    return false;
  } else if (password.length < 8) {
    alert("Password should be at least 8 characters long");
    return false;
  } else if (!validatePasswordStrength(password)) {
    alert(
      "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
    return false;
  }

  return true;
}

function validatePasswordStrength(password) {
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var numberRegex = /\d/;
  var specialCharRegex = /[^\w\s]/;

  return (
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  );
}
