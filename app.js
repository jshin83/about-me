/**
 * jen shin
 * 26 Mar 2019
 * js file to ask user 5 questions, validate
 * app.js
 */
'use strict';

//hello message 
alert('Welcome to jen\'s about me page. Let\'s play a little game, shall we? I will ask five questions about me. Answer with yes or no.');


//array of my questions
var questions = ['Is jen a vegetarian?', 'Does jen like dogs?', 'Does jen own any dogs?', 'Do you think jen plays sports?', 'Does jen like javascript?'];
var results = [];


//loop through questions, grab response, call validation
for (let i = 0; i < questions.length; i++) {
  var response = prompt(questions[i]);
  //response = response.toLowerCase();
  console.log ('response is ' + response);
  let validatedResponse = validateResponse(response.toLowerCase(), i);
  results[i] = ((i + 1) + '. ' + questions[i] + " You answered : '" + response + "'. " + validatedResponse);
}

//append text to document
for(let i = 0; i <results.length; i++) {
  document.getElementById('hidden').innerHTML += '<p>' + results[i] + '</p>';
}

//function to validate response
function validateResponse(input, i) {
  let answers = ['n', 'y', 'n', 'n', 'n'];
  let result = convertToYesOrNo(input);
  console.log('result ' + i + result);

  if ( result === 'na') return '<span class = \'unknown\'>Response was not a form of yes or no I understand.<\span>'
  if ( result === answers[i]) {
    console.log(result + ' you are in validate response')
    return "<span class = \'green\'>That is correct! <\span>";
  } else {
    console.log(result + ' you are in validate response')
    return "<span class = \'red\'>That is incorrect. <\span>";
  }
}

//simple function to convert answer to yes or no to validate
function convertToYesOrNo(input) {
  let yesArray = ['yes', 'y', 'yup', 'yep', 'sure', 'yea', 'ya', 'yas'];
  let noArray = ['no', 'n', 'nah', 'nope', 'naw'];

  if(yesArray.includes(input)) {
    return 'y';
  } else if (noArray.includes(input)){
    return 'n';
  } else {
    return 'na';
  }
}

