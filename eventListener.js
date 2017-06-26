// alert('eventListener linked')

// can be ignored
// var inputField2 = document.getElementsByTagName('input')
// var inputField4 = document.getElementById('firstname')
// var inputField5 = document.getElementsByClassName('inputfield')

// target the input field
var inputField = document.querySelector('#firstname')
var h1 = document.querySelector('h1')
// var inputField3 = document.querySelectorAll('input')

// alert the input field
function keyboardPressed () {
  var typedValue = inputField.value
  h1.textContent = typedValue
}

// whenever someone is typing something
inputField.addEventListener('keyup', keyboardPressed)
