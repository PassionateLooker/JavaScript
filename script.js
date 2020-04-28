//  var Person=function(name,dob,job){
//     this.name=name;
//     this.dob=dob;
//     this.job=job;
//     this.function=function name(params) {

//     }

//     }

// Person.prototype.calculateAge=function() {
//     return (2020-this.dob);
// }

// var jane=new Person('jane',2001,'rockstar');
// console.log(jane);
// var john=new Person('john',1995,'learner');

// console.log(john.calculateAge());

// var hold={
//     name:'dsd',
//     cal:function() {
//         return this.name;
//     }
// }

// console.log(hold.cal())
// var personProto={
//     calculateAge:function() {
//         console.log(2020-this.yearOfBirth);
//     }
// }
// var john=Object.create(personProto);
// john.name='tukra';
// john.yearOfBirth=1995;
// john.job='teacher';

// var jane=Object.create(personProto,
// {
//     name:{value:'jane'},
//     yearOfBirth:{value:2000},
//     job:{value:'teacher'}

// });


// var years = [1995, 2010, 2000, 1954, 1987];

// function calculateAgeArray(arr, fun) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fun(arr[i]))
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return (2020 - el)
// }

// function fullAge(el) {
//     return el >= 18
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el))
//     } else {
//         return -1
//     }
// }


// var ages = calculateAgeArray(years, calculateAge);
// var fullAges = calculateAgeArray(ages, fullAge)
// var heartRate = calculateAgeArray(ages, maxHeartRate)
// console.log(ages);
// console.log(fullAges);
// console.log(heartRate);

// var obj2=function(){
//     var age,name
//     age=26,
//     name='mano'
//     return age


// }

// var obj1=obj2;
// // obj1.age=22;
// console.log(obj1());
// console.log(obj2);
// function interview(job) {
//     if (job === 'teacher') {
//         return function (name) {
//             console.log('what subject do you teach', name);
//         }

//     } else if (job === 'dancer') {
//         return function (name) {
//             console.log('can u dance for me', name, '?');

//         }
//     } else {
//         return function (name) {
//             console.log('why are you here today');

//         }
//     }
// }


// var candidate = interview('dancer');
// candidate('tama')

// interview('dancer')('mark')


// (function(){
//     var score=Math.round(Math.random()*10);
//     console.log(score>=5)

// })()

// function retirement(retAge){
//     var addi=' years left until retirement'

//     return function(yearOfBirth){
//         var age=2020-yearOfBirth
//         console.log(retAge-age+addi);

//     }
// }

// retirement(60)(1995)

// function interview(job) {
//     return function (name) {
//         if (job === 'teacher') {

//             console.log('what subject do you teach', name);
//         }

//         else if (job === 'dancer') {

//             console.log('can u dance for me', name, '?');

//         }
//         else {

//             console.log('why are you here today',name)

//         }

//     }


// }

// interview('teaher')('timma');
// var john = {
//     name: 'john',
//     job: 'tailor',
//     age: 27,
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Iam ' + this.name + ' hi ' + timeOfDay + 'iam ' + this.name + ' iam ' + this.job + ' iam ' + this.age);
//         }
//         else if (style === 'casual') {
//             console.log(this.name + ' whatsup!! ' + timeOfDay + 'iam ' + this.job + ' iam ' + this.age);
//         }
//     }}

// john.presentation('formal','evening')
// var emily={
//     name:'emily',
//     age:22,
//     job:'hauriasian'
// }
// // john.presentation.call(emily,'formal','afternoon')
// console.log(emily['age']);

// (function(){
//     function Questions(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }
//     Questions.prototype.displayQuestion = function () {
//         console.log(this.question);
//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }
//     Questions.prototype.checkAnswer = function (ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer');
//         }
//         else {
//             console.log('Wrong answer');

//         }
//     }

//     var q1 = new Questions('is js cooolest language ever', ['Yes', 'No'], 0);
//     var q2 = new Questions('fullform of js', ['javastat', 'javascript'], 1);
//     var q3 = new Questions('teacher of this course', ['kelly', 'jonas'], 1);
//     var allQ = [q1, q2, q3]
//     var choice = Math.round(Math.random() * allQ.length)

//     allQ[choice].displayQuestion();
//     ans = parseInt(prompt('Enter your answer'))
//     allQ[choice].checkAnswer(ans);

// })();

(function () {

    function Questions(question, answer, correct) {
        this.answer = answer;
        this.correct = correct;
        this.question = question;
    }

    Questions.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ' : ' + this.answer[i]);
        }
    }

    Questions.prototype.checkAnswer = function (ans, callback) {

        if (ans === this.correct) {
            console.log('correct answer');
            sc=callback(true);
            

        }

        else {
            console.log('wrong answer');
            sc=callback(false)
        }
        this.displayScore(sc);
    }
    Questions.prototype.displayScore=function(score) {
        console.log('Your current score is '+score);
        console.log('-----------------------------------------');
    }

    var q1 = new Questions('your name', ['daya', 'fayori'], 0);
    var q2 = new Questions('your lastname', ['daya', 'sagar'], 1);
    var q3 = new Questions('your sirname', ['daya', 'salian mendon'], 1);

    var question = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();



    function callNextQuestion() {

        var choice = Math.floor(Math.random() * question.length);

        question[choice].displayQuestion();

        var ans = prompt('enter your answer');

        if (ans !== 'exit') {

            question[choice].checkAnswer(parseInt(ans), keepScore);
            
            // displayScore(keepScore(sc));
            callNextQuestion();

        }
    }


    callNextQuestion();


})();



































































































