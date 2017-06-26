var button = document.querySelector('btn')
var body = document.querySelector('body')
var input = document.querySelector('input')
var counter = 0
var score = document.querySelector('.score')

//  ======================== Database of colors >>
var arrColors = ['blue', 'green', 'cyan', 'teal', 'orchid', 'pink']

//  ======================== Database of words >>
var arrWords = ['blue', 'green', 'cyan', 'teal', 'orchid', 'pink']

// ========================= Scoring Logic (6) >>
btn.addEventListener('click', function () {
  var reset = 1600
  var xwords = setInterval(changeWords, reset) + setInterval(changeColor, reset)
  if (reset > 1600) {
    clearInterval(xwords)
  }
})


btn.addEventListener('click', function () {
  if (document.getElementById('btn').value === body.style.backgroundColor) {
    counter += 1
    score.innerHTML = counter
  }
})

//  ======================== Change BG Color (3: 1 + 2) >>

function changeColor () {
  body.style.backgroundColor = arrColors[churnColors()]
  body.style.backgroundImage = 'none'
  btn.style.backgroundColor = arrColors[churnColors()]
  btn.style.color = arrColors[churnColors()]
  // input.style.textShadow = shadowChanger()
}

//  ======================== Change Text (5: 1 + 4) >>

function changeWords () {
  document.getElementById('btn').value = arrWords[churnWords()]
}

// function shadowChanger () {
//   var ab = '-20px'
//   var bc = '20px'
//   var cd = 0
//   var de = arrColors[churnColors()]
//
//   var line1 = '' + ab + ', ' + ab + ', '+ cd +', '+ de +''
//   var line2 = ''+ bc +', '+ ab +', '+ cd +', '+ de +''
//   var line3 = ''+ ab +', '+ bc +', '+ cd +', '+ de +''
//   var line4 = ''+ bc +', '+ bc +', '+ cd +', '+ de +''
//
//   var fin = '' + line1 + ', ' + line2 + ', ' + line3 + ', ' + line4 + ''
//   return fin
// }

//  ======================== Randomize Function (1) >>
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// ========================= Generate random colors (2) >>

function churnColors () {
  return randomFn(0, arrColors.length - 1)
}

// ========================= Generate random words (4) >>

function churnWords () {
  return randomFn(0, arrWords.length - 1)
}
