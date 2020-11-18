
/*-------------------------------- Constants --------------------------------*/




 

/*---------------------------- Variables (state) ----------------------------*/
let round, time, count


var ranks = {
    neelix : `0 CORRECT. Such a Neelix. I mean, we can make you ship's ambassador or something if it would make you feel better`,
    ensign : `1-3 CORRECT. Congrats, Ensign! People might call you 'pretty useless', but hey, at least they call you pretty.`,
    lieutenant : `4-6 CORRECT. Congrats, Lieutenant! You can sit in the big chair when literally everyone else on the ship dissappears if you accidentally kill God or something.`,
    commander : `7-9 CORRECT. Congrats, Commander! Try to keep it in your pants!`,
    captain : `10 CORRECT. Oh Captain, MY Captain! You're never in the wrong, even if everyone under you thinks you're making a terrible mistake.`
}

var ques1 = {
    question : `Wait, who's he again?`,
    correctAns : `Wallace Shawn (Princess Bride)`,
    incorrectAns1 : `Tony Todd (Candyman)`,
    incorrectAns2 : `Jonathan Banks (Breaking Bad)`,
    incorrectAns3 : `Kurtwood Smith (That 70's Show)`
}

var ques2 = {
    question : `Hold up, you know this one...`,
    correctAns : `Christopher Lloyd (Back to the Future)`,
    incorrectAns1 : `Scott Thompson (Kids in the Hall)`,
    incorrectAns2 : `Jim O'Heir (Parks and Rec)`,
    incorrectAns3 : `Jason Alexander (Seinfeld)`
}

var ques3 = {
    question : `Oh! Oh, yeah! THAT guy! ...um...`,
    correctAns : `Iggy Pop (Iggy Pop)`,
    incorrectAns1 : `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns2 : `Wallace Shawn (Princess Bride)`,
    incorrectAns3 : `Tony Todd (Candyman)`,
}

var ques4 = {
    question : `Well, this is an easy one ...`,
    correctAns : `Jason Alexander (Seinfeld)`,
    incorrectAns1 : `Jim O'Heir (Parks and Rec)`,
    incorrectAns2 : `Kurtwood Smith (Kids in the Hall)`,
    incorrectAns3 : `Iggy Pop (Iggy Pop)`
}

var ques5 = {
    question : `How are you supposed to tell under all that loaf?`,
    correctAns : `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns1 : `Kurtwood Smith (That 70's Show)`,
    incorrectAns2 : `Christopher Lloyd (Back to the Future)`,
    incorrectAns3 : `Tony Todd (Candyman)`
}

var ques6 = {
    question : `HOLD UP...holdupholdupholdup..`,
    correctAns : `Jonathan Banks (Breaking Bad)`,
    incorrectAns1 : `Scott Thompson (Kids in the Hall)`,
    incorrectAns2 : `Jim O'Heir (Parks and Rec)`,
    incorrectAns3 : `Wallace Shawn (Princess Bride)`
}

var ques7 = {
    question : `...it's on the tip of your tongue`,
    correctAns : `Scott Thompson (Kids in the Hall)`,
    incorrectAns1 : `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns2 : `Christopher Lloyd (Back to the Future)`,
    incorrectAns3 : `Jason Alexander (Seinfeld)`
}

var ques8 = {
    question = `You've definitely seen THAT dude.`,
    correctAns = `Kurtwood Smith (That 70's Show)`,
    incorrectAns1 = `Wallace Shawn (Princess Bride)`,
    incorrectAns2 = `Iggy Pop (Iggy Pop)`,
    incorrectAns3 = `Mick Fleetwood (Fleetwood Mac)`
}

var ques9 = {
    question = `GUH! Where is he FROM?!`,
    correctAns = `Jim O'Heir (Parks and Rec)`,
    incorrectAns1 = `Jason Alexander (Seinfeld)`,
    incorrectAns2 = `Scott Thompson (Kids in the Hall)`,
    incorrectAns3 = `Kurtwood Smith (That 70's Show)`
}

var ques10 = {
    question = `Ok, last one. You've got this!`,
    correctAns = `Tony Todd (Candyman)`,
    incorrectAns1 = `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns2 = `Wallace Shawn (Princess Bride)`,
    incorrectAns3 = `Jonathan Banks (Breaking Bad)`
}



// variables for 4-5 different outcomes depending on total score at end of game
// array of questions, array of answers, array of images(?)
/*------------------------ Cached Element References ------------------------*/


const startBtn = document.getElementById('start')
const question = document.getElementById('question')
const rank = document.getElementById('ranking')
const answerBtns = document.getElementsByClassName('answer')
const restartBtn = document.getElementById('restart')
const picture = document.getElementById('image')
const count = document.getElementById('counter')
const darkMode = document.getElementById('dark-mode')




// You might choose to put your game status here
//cache buttons, image, timer(?), score count  

/*----------------------------- Event Listeners -----------------------------*/


startBtn.addEventListener('click', startGame)
answerBtns.addEventListener('click', checkAnswer)
restartBtn.addEventListener('click', init)
darkMode.addEventListener('click', switchPallette)

// This is where you should put the event listener
// for a mouse-click
// Clicks for start box, each answer box, submit button, reset button 
/*-------------------------------- Functions --------------------------------*/


init()




function init(){
    round = 0
    time = 60
    count = 0
    timer()

}



function startGame() {
    round = 1
    // timer begins
    render()
    // first question and set of answers populate
}


function checkAnswer(EventTarget) {
    // if answer at event target is the correct answer, add 1 to counter, celebrate, move to next round
    // if answer at event target is the incorrect answer, shake answer button, move to next round
}

function render() {
    if (round == 11 || time == 0){
        checkRank()
    }
}




function checkRank() {
    if (counter == 0){
        return rank.neelix
    }
    if (counter > 0 && counter <= 3){
        return rank.ensign
    }
    if (counter > 3 && counter <= 6){
        return rank.lieutenant
    }
    if (counter > 6 && counter <= 9){
        return rank.commander
    }else{
        return rank.captain
    }
}


function switchPallette() {

}

// function gameWin() {
//     game.timer.stop()
// }

// function gameOver() {
//     game.timer.stop()
// }

// function gameStart(){
//     game.timer.start()
// }

// total answers correct
    // if answer checked = correct, add to tally (up to 10)
    // once game is over, return rank that correlates to number of correct answers
// timer
    // on click of start button, begin timer of 60 seconds
    //  end game after 60 seconds, no matter what question they are on

// check Answer
    // on submit click, check selected answer vs. the possible answers and signify which answer was the correct one, despite user input
// restart
    // re-initialize game state to try again