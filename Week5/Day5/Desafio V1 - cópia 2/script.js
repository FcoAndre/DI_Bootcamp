var questions = [
    {
        question: '1. What is the capital city of Brazil?',
        choices: ['São Paulo', 'Rio De Janeiro', 'Brasília', 'Buenos Aires'],
        correctAnswer: 2
    },
    {
        question: 'Which two South American countries do not share a border with Brazil?',
        choices: ['Venezuela and Colombia', 'Chile and Ecuador', 'Ecuador and Peru', 'Argentina and Paraguai'],
        correctAnswer: 1
    },
    {
        question: '3. What is feijoada?',
        choices: ['A stew made of black beans and meat', 'A martial art', 'A tradicional dance', 'A fish from Amazon'],
        correctAnswer: 0
    },
    {
        question: '4. True or false? Rio was the only South American city to host the Olympic Games.',
        choices: ['True', 'False'],
        correctAnswer: 0
    },
    {
        question: '5. What is the word carioca used to describe in Rio?',
        choices: ['Local people', 'Tourists' , 'A local festival', 'Criminals'],
        correctAnswer: 0
    },
    {
        question: '6. Which of the following is not a Brazilian dance?',
        choices: ['Forró','Xaxado','Zamba','Quadrilha'],
        correctAnswer: 2
    },
    {
        question: '7. How many times has Brazil won the Football World Cup?',
        choices: ['Three','Four','Five', 'Six'],
        correctAnswer: 2
    },
    {
        question: '8. Which of the following is not true in Brazil?',
        choices: ['People can vote from the age of 18','Voting is mandatory','Same sex marriage is legal','The legal drinking age is 18 years old'],
        correctAnswer: 0
    },
    {
        question: '9. What is Bumba-meu-boi?',
        choices: ['A Brazilian cake made with sugar and nuts','A well-known Brazilian folk song', 'A street festival popular in the north of Brazil', 'A Brazilian soft drink'],
        correctAnswer: 1
    },
    {
        question: '10. Which other country has more people of original descent living in Brazil than anywhere else in the world?',
        choices: ['USA', 'Israel','Italy','Japan'],
        correctAnswer: 3
    }
];



console.log()

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var pergunta = document.getElementsByClassName('question')[0];
var opcoes = document.getElementsByTagName('ul')[0];
var divgeral = document.getElementsByClassName('quizContainer')[0]


window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){

        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                // console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } 
                else {
                    displayScore();
                    final();
                    document.querySelector('.nextButton').innerText = 'Play Again?';
                    quizOver = true;
                    var x = correctAnswers
                    if (x<6) {
                        resultadoa();
                      } else if (x<8) {
                            resultadob();
                      } else {
                        resultadoc();  
                    }
                
                            
                 }
                }   
        } 
        
        
        else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
            retorno2();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = `  ${questions[currentQuestion].choices[i]}`;
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}



function final(){
    pergunta.style.display= 'none'
    opcoes.style.display = 'none'
}



function retorno2(){
location.reload()
}


function resultadoa() {
    var para = document.createElement("div");
    para.innerHTML = "Hmmmm.... It seems that you don't know a lot about Brazil. But this is not a problem! Just wait for corona to be over and book your flight tickets =)";
    document.getElementsByClassName("quizContainer")[0].appendChild(para);
    para.setAttribute("class","finalanswer");
}

function resultadob() {
    var para = document.createElement("div");
    para.innerHTML = "I think you know quite a lot about Brazil! Or maybe you are just good with guessing! Either way, you did a really good!";
    document.getElementsByClassName("quizContainer")[0].appendChild(para);
    para.setAttribute("class","finalanswer");
}

function resultadoc() {
    var para = document.createElement("div");
    para.innerHTML = "Oh wow! Who is this Brazilian here? Great job!";
    document.getElementsByClassName("quizContainer")[0].appendChild(para);
    para.setAttribute("class","finalanswer");
}