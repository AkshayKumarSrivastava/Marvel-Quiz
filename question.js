// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    var element = document.getElementById("quiz");
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    if(quiz.score==16){
        gameOverHTML+="<h2 class='comment'>You need a life man.Stop watching the movies and go out and see the real world.</h2>"
    }
    else if (quiz.score<16&&quiz.score>12){
        gameOverHTML+="<h2 class='comment'>You Know your MARVEL man.</h2>"
    }
    else if (quiz.score<12&&quiz.scor>5){
        gameOverHTML+="<h2 class='comment'>Practice makes perfect.Now Watch all the movies again</h2>"
    }
    else if (quiz.score<=5){
        gameOverHTML+="<h2 class='comment'>YOU SUCKKKKKKKK DUDEEEEEEEEEEEEEEEEEEE!!!!!</h2>"
    }
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Who was the doctor that transformed Steve Rogers into Captain America?", ["Dr. Erskine", "Dr. Zolo","Dr. Erkvine", "Dr. Barron"], "Dr. Erskine"),
    new Question("What is Captain America's shield made out of?", ["Adamantium", "Vibranium", "Iron", "Copper"], "Vibranium"),
    new Question("What Level agent in S.H.I.E.L.D. is Phil Coulson?", ["Level 8", "Level 10","Level 15", "Level 13"], "Level 8"),
    new Question("What organization was funding Obadiah in his quest to defeat Tony/Iron Man?", ["Wallenquist Organization", "Al-Qaeda", "The 10 Rings", "Sons of the Serpent"], "The 10 Rings"),
    new Question("What is the name of Thors Hammer?", ["Stormbreaker", "Mjlonir", "Mjolneer", "Mjolnir"], "Mjolnir"),
    new Question("What year did Captain America come out of his icy coma?", ["2010", "2011", "2009", "2012"], "2011"),
    new Question("What is the name of the Evil army the Avengers have to stop coming out of the wormhole?", ["Kree", "Achernonians", "Skrull", "Chitauri"], "Chitauri"),
    new Question("What organization pretends to be the 10 rings, as a distraction?", ["Children of the Vault", "None of these", "A.I.M.", "S.H.I.E.L.D"], "A.I.M."),
    new Question("What is the Collectors Real name?", ["Tanaleer Tivan", "Fuego Aguja", "Martillo Luz", "Corregidora"], "Tanaleer Tivan"),
    new Question("What is the name of Star Lords' Ship?", ["The Milano", "Millennium Falcon", "Serenity", "Tie Fighter"], "The Milano"),
    new Question("What is the name of Falcons friend that was shot down?", ["Rob", "Chris", "Scott", "Riley"], "Riley"),
    new Question("What is the name of S.H.I.E.L.D. 's HQ?", ["The Silmarillion", "The Triskelion", "The Triskaliod", "The Trskeqion"], "The Triskelion"),
    new Question("Who is Daisy Johnson?", ["Quake", "Izel", "Deathlok", "Sif"], "Quake"),
    new Question("Which of these is NOT a member of Thanos's Black Order in the movie?", ["Corvus Glaive", "Proxima Midnight", "Ebony Maw", "Supergiant"], "Supergiant"),
    new Question(" Where does Natasha Romanoff locate Dr. Bruce Banner?", ["India ", "Russia ", "Germany ", "Sokovia "], "India "),
    new Question("Where was Peter Parker and his class going to at the start of Infinity War", ["MET", "MOMA", "Coney Island", "Rockefeller Center"], "MOMA")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();