/**
 * jen shin
 * 26 Mar 2019
 * js file to ask user 5 questions, validate
 * app.js
 */
'use strict';

//notifies user s/he is about to answer questions
alert('Hi there! Welcome to jen\'s about me page.');

//get user name
var userName = prompt('May I get your name, please?');
alert('Great, ' + userName + '! Let\'s play a little game, shall we? First, I will ask five yes / no questions about jen.');

//array of my questions
var questions = ['Is jen a vegetarian?', 'Does jen know how to drive manual transmission cars?', 'Does jen own any dogs?', 'Do you think jen plays sports?', 'Does jen like javascript?', 'How many cars has jen (personally) owned?', 'What fruit does jen like?'];

var fruit = ['banana', 'bananas', 'apple', 'apples', 'melon', 'melons', 'watermelon', 'grape', 'grapes', 'cantaloupe', 'avocado', 'avocados'];

var results = [];
var correct = 0;

//loop through questions, grab response, call validation
for (let i = 0; i < questions.length; i++) {
  let answerSix = 'incorrect';

  //question 6
  if(i === 5) {
    alert('Let\'s switch things up a bit. You get up to four tries to answer the next question.');
    let chances = 4;
    while(chances > 0) {
      console.log('chances : ' + chances);

      let userNumber = prompt(questions[i]).trim();

      userNumber = parseInt(userNumber); //response is currently string, verified via console

      console.log('type of : ' + typeof(userNumber));
      if(userNumber !== null && !isNaN(userNumber) && userName !== '') {
        console.log('converted to int: ' + typeof(userNumber) + '. userNumber is ' + userNumber); //test
        if(userNumber > 5) {
          alert('Your guess is too high.');
        } else if (userNumber === 5) {
          alert('Great. You got it right.');
          correct++;
          answerSix = 'correct';
          chances = 0;
        } else {
          alert('Your guess is too low.');
        }
      } else { //strings come here
        alert('Your response was not a number.');
      }
      chances--;
    }
    //add result 6 to results array
    results[i] = ((i + 1) + '. ' + questions[i] + ' <span class = \'lined\'>You were ' + answerSix + '</span>.');
  } else if (i === 6) { //question 7
    let count = 0;
    alert('Here is the last question. You get six attempts.');
    var userLastResponse = 'incorrectly';
    var possibleAnswers = '';

    while(count < 6) {
      let response = prompt(questions[i]);
      response.trim();

      if(fruit.includes(response.toLowerCase())) {
        alert('Correct!');
        userLastResponse = 'correctly';
        correct++;
        break;
      } else {
        alert('Nope, that answer is not on the list.');
      }
      count++;
    }
    //add result 7 to results array
    results[i] = ((i + 1) + '. ' + questions[i] + ' <span class = \'lined\'>You answered this question ' + userLastResponse + '</span>.');

    //show the possible answers in fruit list (valid answers)
    for (let i = 0; i < fruit.length; i++) {
      let punctuation;
      if(i === fruit.length - 1) {
        punctuation = '.';
      } else {
        punctuation = ', ';
      }
      possibleAnswers += fruit[i] + punctuation;
    }
    alert('The possible answers are : ' + possibleAnswers);
  } else {
    //questions 1 - 5
    let response = prompt(questions[i]);
    let validatedResponse = validateResponse(response.toLowerCase(), i);
    //add result 7 to results array
    results[i] = ((i + 1) + '. ' + questions[i] + ' You answered : \'' + response + '\'. ' + validatedResponse);
  }
}

//append text to document
let heading = '<header><h1>Quiz Results</h1></header>';
document.getElementById('hidden').innerHTML += heading;
for(let i = 0; i <results.length; i++) {
  document.getElementById('hidden').innerHTML += '<p>' + results[i] + '</p>';
}
document.getElementById('hidden').innerHTML += '<p class = \'result\'>' + userName + ', you answered ' + correct + ' out of 7 questions correctly.</p>';

/*
The below functions were written during Lab 1. These handle questions 1 - 5.
*/

//function to validate response
function validateResponse(input, i) {
  let answers = ['n', 'y', 'n', 'n', 'n'];
  let result = convertToYesOrNo(input);
  console.log('result ' + i + result);

  if ( result === 'na') return '<span class = \'unknown\'>Response was not a form of yes or no I understand.</span>';
  if ( result === answers[i]) {
    correct++;
    return '<span class = \'green\'>That is correct! </span>';
  } else {
    return '<span class = \'red\'>That is incorrect. </span>';
  }
}

//simple function to convert answer to yes or no to validate
function convertToYesOrNo(input) {
  let yesArray = ['yes', 'y', 'yup', 'yep', 'sure', 'yea', 'ya', 'yas', 't', 'true', 'positive', 'yap'];
  let noArray = ['no', 'n', 'nah', 'nope', 'naw', 'f', 'false', 'negative'];

  if(yesArray.includes(input)) {
    return 'y';
  } else if (noArray.includes(input)){
    return 'n';
  } else {
    return 'na';
  }
}
