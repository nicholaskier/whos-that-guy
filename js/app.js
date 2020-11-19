
/*-------------------------------- Constants --------------------------------*/




 

/*---------------------------- Variables (state) ----------------------------*/
// let timeLeft = 60

// let timer = setInterval(function(){
//     document.getElementById('timer').textContent = timeLeft 
//     timeLeft -= 1
//     if (timeLeft < 0){
//         document.getElementById('timer').textContent = ''
//     }
// },1000)

let round, score, timeLeft


let ranks = {
    neelix : `0 CORRECT. Such a Neelix. I mean, we can make you ship's ambassador or something if it would make you feel better`,
    ensign : `1-3 CORRECT. Congrats, Ensign! People might call you 'pretty useless', but hey, at least they call you pretty.`,
    lieutenant : `4-6 CORRECT. Congrats, Lieutenant! You can sit in the big chair when literally everyone else on the ship dissappears if you accidentally kill God or something.`,
    commander : `7-9 CORRECT. Congrats, Commander! Try to keep it in your pants!`,
    captain : `10 CORRECT. Oh Captain, MY Captain! You're never in the wrong, even if everyone under you thinks you're making a terrible mistake.`
}

let ques1 = {
    question : `Wait, who's he again?`,
    correctAns : `Wallace Shawn (Princess Bride)`,
    incorrectAns1 : `Tony Todd (Candyman)`,
    incorrectAns2 : `Jonathan Banks (Breaking Bad)`,
    incorrectAns3 : `Kurtwood Smith (That 70's Show)`,
    image : `url(https://i.imgur.com/B26FTeF.jpeg)`
}

let ques2 = {
    question : `Hold up, you know this one...`,
    correctAns : `Christopher Lloyd (Back to the Future)`,
    incorrectAns1 : `Scott Thompson (Kids in the Hall)`,
    incorrectAns2 : `Jim O'Heir (Parks and Rec)`,
    incorrectAns3 : `Jason Alexander (Seinfeld)`,
    image : `url(https://i.imgur.com/gSkLXBv.jpg)`
}

let ques3 = {
    question : `Oh! Oh, yeah! THAT guy! ...um...`,
    correctAns : `Iggy Pop (Iggy Pop)`,
    incorrectAns1 : `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns2 : `Wallace Shawn (Princess Bride)`,
    incorrectAns3 : `Tony Todd (Candyman)`,
    image : `url(https://i.imgur.com/ibdfNnj.jpeg)`
}

let ques4 = {
    question : `Well, this is an easy one ...`,
    correctAns : `Jason Alexander (Seinfeld)`,
    incorrectAns1 : `Jim O'Heir (Parks and Rec)`,
    incorrectAns2 : `Kurtwood Smith (Kids in the Hall)`,
    incorrectAns3 : `Iggy Pop (Iggy Pop)`,
    image : `url(https://i.imgur.com/4yTTeBh.jpeg)`
}

let ques5 = {
    question : `How are you supposed to tell under all that loaf?`,
    correctAns : `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns1 : `Kurtwood Smith (That 70's Show)`,
    incorrectAns2 : `Christopher Lloyd (Back to the Future)`,
    incorrectAns3 : `Tony Todd (Candyman)`,
    image : `url(https://i.imgur.com/nFaIXtA.jpeg)`
}

let ques6 = {
    question : `HOLD UP...holdupholdupholdup..`,
    correctAns : `Jonathan Banks (Breaking Bad)`,
    incorrectAns1 : `Scott Thompson (Kids in the Hall)`,
    incorrectAns2 : `Jim O'Heir (Parks and Rec)`,
    incorrectAns3 : `Wallace Shawn (Princess Bride)`,
    image : `url(https://i.imgur.com/ZRsi948.jpg)`
}

let ques7 = {
    question : `...it's on the tip of your tongue`,
    correctAns : `Scott Thompson (Kids in the Hall)`,
    incorrectAns1 : `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns2 : `Christopher Lloyd (Back to the Future)`,
    incorrectAns3 : `Jason Alexander (Seinfeld)`,
    image : `url(https://i.imgur.com/ioO8MuI.jpg)`
}

let ques8 = {
    question = `You've definitely seen THAT dude.`,
    correctAns = `Kurtwood Smith (That 70's Show)`,
    incorrectAns1 = `Wallace Shawn (Princess Bride)`,
    incorrectAns2 = `Iggy Pop (Iggy Pop)`,
    incorrectAns3 = `Mick Fleetwood (Fleetwood Mac)`,
    image : `url(https://i.imgur.com/hKkTAUz.jpg)`
}

let ques9 = {
    question = `GUH! Where is he FROM?!`,
    correctAns = `Jim O'Heir (Parks and Rec)`,
    incorrectAns1 = `Jason Alexander (Seinfeld)`,
    incorrectAns2 = `Scott Thompson (Kids in the Hall)`,
    incorrectAns3 = `Kurtwood Smith (That 70's Show)`,
    image : `url(https://i.imgur.com/7uQuyO4.jpg)`
}

let ques10 = {
    question = `Ok, last one. You've got this!`,
    correctAns = `Tony Todd (Candyman)`,
    incorrectAns1 = `Mick Fleetwood (Fleetwood Mac)`,
    incorrectAns2 = `Wallace Shawn (Princess Bride)`,
    incorrectAns3 = `Jonathan Banks (Breaking Bad)`,
    image : `url(https://i.imgur.com/UPKlgox.jpeg)`
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
const gameBox = document.getElementById('game-screen')




// You might choose to put your game status here
//cache buttons, image, timer(?), score count  

/*----------------------------- Event Listeners -----------------------------*/


// startBtn.addEventListener('click', function(){})
//     startBtn.style.visibility = "hidden"
//     gameBox.style.visibility = "visible"
//     restartBtn.style.visibility = "visible"
//     let timeLeft = 60

//     let timer = setInterval(function(){
//     document.getElementById('timer').textContent = timeLeft 
//     timeLeft -= 1
//     if (timeLeft < 0){
//         document.getElementById('timer').textContent = ''
//     }
//     },1000)
//     round = 1
//     score = 0
//     render()
// answerBtns.addEventListener('click', checkAnswer)
restartBtn.addEventListener('click', init)
darkMode.addEventListener('click', switchPallette)

// This is where you should put the event listener
// for a mouse-click
// Clicks for start box, each answer box, submit button, reset button 
/*-------------------------------- Functions --------------------------------*/


init()




function init(){
    round = 0    
}

// function change(evt){
//     if (startBtn.style.visibility ='visible'){
//     startBtn.style.visibility = 'hidden'
//     getElementById('game-screen').stlye.visibility ='visible'
//     startGame()
//     }
// }


startBtn.addEventListener('click', function(){})
    startBtn.style.visibility = "hidden"
    gameBox.style.visibility = "visible"
    restartBtn.style.visibility = "visible"
    let timeLeft = 60

    let timer = setInterval(function(){
    document.getElementById('timer').textContent = timeLeft 
    timeLeft -= 1
    if (timeLeft < 0){
        document.getElementById('timer').textContent = ''
    }
    },1000)
    round = 1
    score = 0
    render()

// function startGame() {
//     // startBtn.style.visibility = 'hidden'
//     // getElementById('game-screen').stlye.visibility = 'visible'
//     // getElementById('question-box').style.visibility = 'visible'
//     round = 1
//     // timer begins
//     render()
//     // first question and set of answers populate
// }

answerBtns.addEventListener('click', function(){})
if (answerBtns.evt.target.innerContent == `${ques(round).correctAns}`){
    counter += 1
    // celebrate
    round += 1
}else{
    // shake correct answer
    round += 1
}
    

// function checkAnswer(evt) {
//     if (answerBtns.evt.target.innerContent == `${ques(round).correctAns}`){
//         counter += 1
//         // celebrate
//         round += 1
//     }else{
//         // shake correct answer
//         round += 1
//     }
    
    // if answer at event target is the correct answer, add 1 to counter, celebrate, move to next round
    // if answer at event target is the incorrect answer, shake answer button, move to next round
// }

function render() {
    if (round == 11 || time == 0){
        gameBox.style.visibility = "hidden"
        checkRank()
    }else{
        answerBtns.innerContent = `${ques(round).correctAns} ${ques(round).incorrectAns1} ${ques(round).incorrectAns2} ${ques(round).incorrectAns3}`
        question.innerContent = `${ques(round).question}`
        picture.src.innerContent = `${ques(round).image}`
        
    }
}




function checkRank() {
    if (score == 0){
        rank.innerContent = `${ranks.neelix}`
    }
    if (score > 0 && counter <= 3){
        rank.innerContent =  `${ranks.ensign}`
    }
    if (score > 3 && counter <= 6){
        rank.innerContent =  `${ranks.lieutenant}`
    }
    if (score > 6 && counter <= 9){
        rank.innerContent =  `${ranks.commander}`
    }else{
        rank.innerContent =  `${ranks.captain}`
    }
}


// function switchPallette() {

// }



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