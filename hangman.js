"use strict"

// Global Constants
const MAX_LETTERS_IN_WORDS = 10
const WordArray = [
  "able", "apple", "abandon",
  "absolve", "armed", "absence", "ascends", "abysmal", "acronym",
  "agonise", "alloyed", "antique", "bemuses", "beggars", "blinked",
  "bridged", "broadens", "brushed", "buckets", "believer", "blinding",
  "brimming", "bullpen", "callous", "campers", "caramel", "carpool"
]

// Global variables
var numberOfErrors
var randomWord
var numberOfDashesFilled = 0


/**
 * 
 * We write the first initialization code in document.ready because at this 
 * stage the document is fully prepared (data for all the elements is downloaded
 * and prepared). Any element can be accessed at this stage without getting error
 * 
 */
$(document).ready(() => {
  init()
})


function init() {

  const randomElement = Math.round(Math.random() * (WordArray.length - 1))

  randomWord      = WordArray[randomElement]
  numberOfErrors  = 0

  console.log(`randomWord is ${randomWord}`)

  for (var i = 0; i < MAX_LETTERS_IN_WORDS; i++) {
    var $assign = $('#letter' + i)
    $assign.html(i < randomWord.length ? '&nbsp;' : '')

    // if (i < randomWord.length) {
    //   $assign.html('&nbsp;')
    // } else {
    //   $assign.html('')
    // }


    //assign.innerText = '\xa0' // innerHtml

    // if (randomWord.length < MAX_LETTERS_IN_WORDS) {

    //   for (let a = randomWord.length; a <= MAX_LETTERS_IN_WORDS; a++) {
    //     var assignNothing = document.getElementById('letter' + a)
    //     var textAtExtraSpan = null
    //     assignNothing.innerText = textAtExtraSpan
    //   }
    // }

    $('#box').text(null)
    $('#hangman').attr('src', 'hangman0.jpg')
    $('.letterButton').removeAttr('disabled')
    $('.disabled').removeClass('disabled')
    numberOfDashesFilled = 0
    numberOfErrors = 0
  }
}

function onLetterClick(letter) {

  $(`#${letter}`).attr('disabled', 'true')
  // $('box').text($('box').text() + letter)  
  $(`#${letter}`).addClass('disabled')

  // document.getElementById(letter).disabled = true
  document.getElementById('box').innerHTML += letter

  // Don't think super optimized now, focus on simple neat code
  var assigned = false
  for (let i = 0; i < randomWord.length; i++) {

    if (randomWord.charAt(i) === letter) {

      $('#letter' + i).text(letter)
      // var assignLetter = document.getElementById('letter' + i)
      // assignLetter.innerText = letter
      assigned = true
      numberOfDashesFilled++
      console.log(`numberOfDashesFilled: ${numberOfDashesFilled}`)
      $('#soundClaps').get(0).play()
    }
  }

  if (!assigned) {
    numberOfErrors++
    console.log(`numberOfErrors = ${numberOfErrors}`)
    $('#hangman').attr('src', `hangman${numberOfErrors}.jpg`)
    $('#soundBoo').get(0).play()

    // var imageChange = document.getElementById('hangman')
    // imageChange.src = "Hangman" + numberOfErrors + ".jpg"
  }

  if (numberOfErrors === 6) {
    if (confirm(`You lose. The word was ${randomWord}! Play again?`)) {
      init() 
    } else {
      $('.letterButton').attr('disabled', 'true')
      $('.letterButton').addClass('disabled')
    }
    return

    // for (let count = 0; count < 26; count++) {
    //   var alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    //     'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c',
    //     'v', 'b', 'n', 'm']
    //   document.getElementById(alphabet[count]).disabled = true
    // }
  }

  if (numberOfDashesFilled == randomWord.length) {
    if (confirm("You win! Play again")) {
      init()
    } else {
      $('.letterButton').attr('disabled', 'true')
      $('.letterButton').addClass('disabled')
    }
  }

}