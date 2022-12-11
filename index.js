var readlineSync = require('readline-sync');
console.log("Atul Grover");
var inp = readlineSync.question('Your name? ');
console.log('Welcome', inp);
var score = 0;
function play(question, answer) {
  var Nanswer = readlineSync.question(question);
  if (answer == Nanswer) {
    score++;
  } else {
    score--;
  }
}

play('what is number ', 4);
// console.log('score is' , score);


var questions = [{
  q: 'age? ',
  a: 20
}, {
  q: 'name? ',
  a: 'atul'
}]


for (var i = 0; i < questions.length; i++) {
  play(questions[i].q, questions[i].a);
}

console.log('scoree', score);


var starNum = readlineSync.question('what is number ');
for (var i = 1; i <= starNum; i++) {
  var arr = [];
  for (var j = 1; j <= i; j++) {
    arr.push('*');
  }
  console.log(arr.join(' '));
}

var ans = readlineSync.keyInYN('Do you want to install this?');
console.log(ans);


frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
index = readlineSync.keyInSelect(frameworks, 'Which framework?');
console.log(frameworks[index] + ' is enabled.');