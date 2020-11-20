let score, timeLeft


let ranks = {
    neelix : `0 CORRECT. Such a Neelix. I mean, we can make you ship's ambassador or something if it would make you feel better`,
    ensign : `1-3 CORRECT. Congrats, Ensign! People might call you 'pretty useless', but hey, at least they call you pretty.`,
    lieutenant : `4-6 CORRECT. Congrats, Lieutenant! You can sit in the big chair when literally everyone else on the ship dissappears if you accidentally kill God or something.`,
    commander : `7-9 CORRECT. Congrats, Commander! Try to keep it in your pants!`,
    captain : `10 CORRECT. Oh Captain, MY Captain! You're never in the wrong, even if everyone under you thinks you're making a terrible mistake.`
}

let prompts = {
    1 : {
    question : `Wait, who's he again?`,
    correctAns : `Wallace Shawn (Princess Bride)`,
    answers : [`Tony Todd (Candyman)`, `Jonathan Banks (Breaking Bad)`, `Kurtwood Smith (That 70's Show)`],
    image : `url(https://i.imgur.com/B26FTeF.jpeg)`
    },

    2 : {
    question : `Hold up, you know this one...`,
    correctAns : `Christopher Lloyd (Back to the Future)`,
    answers : [`Scott Thompson (Kids in the Hall)`, `Jim O'Heir (Parks and Rec)`, `Jason Alexander (Seinfeld)`],
    image : `url(https://i.imgur.com/gSkLXBv.jpg)`
    },

    3 :  {
    question : `Oh! Oh, yeah! THAT guy! ...um...`,
    correctAns : `Iggy Pop (Iggy Pop)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Wallace Shawn (Princess Bride)`, `Tony Todd (Candyman)`],
    image : `url(https://i.imgur.com/ibdfNnj.jpeg)`
    },

    4 : {
    question : `Well, this is an easy one ...`,
    correctAns : `Jason Alexander (Seinfeld)`,
    answers : [`Jim O'Heir (Parks and Rec)`, `Kurtwood Smith (Kids in the Hall)`, `Iggy Pop (Iggy Pop)`],
    image : `url(https://i.imgur.com/4yTTeBh.jpeg)`
    },

    5 : {
    question : `How are you supposed to tell under all that loaf?`,
    correctAns : `Mick Fleetwood (Fleetwood Mac)`,
    answers : [`Kurtwood Smith (That 70's Show)`, `Christopher Lloyd (Back to the Future)`, `Tony Todd (Candyman)`],
    image : `url(https://i.imgur.com/nFaIXtA.jpeg)`
    },

    6 : {
    question : `HOLD UP...holdupholdupholdup..`,
    correctAns : `Jonathan Banks (Breaking Bad)`,
    answers : [`Scott Thompson (Kids in the Hall)`, `Jim O'Heir (Parks and Rec)`, `Wallace Shawn (Princess Bride)`],
    image : `url(https://i.imgur.com/ZRsi948.jpg)`
    },

    7 :  {
    question : `...it's on the tip of your tongue`,
    correctAns : `Scott Thompson (Kids in the Hall)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Christopher Lloyd (Back to the Future)`, `Jason Alexander (Seinfeld)`],
    image : `url(https://i.imgur.com/ioO8MuI.jpg)`
    },

    8 : {
    question : `You've definitely seen THAT dude.`,
    correctAns : `Kurtwood Smith (That 70's Show)`,
    answers : [`Wallace Shawn (Princess Bride)`, `Iggy Pop (Iggy Pop)`, `Mick Fleetwood (Fleetwood Mac)`],
    image : `url(https://i.imgur.com/hKkTAUz.jpg)`
    },

    9 : {
    question : `GUH! Where is he FROM?!`,
    correctAns : `Jim O'Heir (Parks and Rec)`,
    answers : [`Jason Alexander (Seinfeld)`, `Scott Thompson (Kids in the Hall)`, `Kurtwood Smith (That 70's Show)`],
    image : `url(https://i.imgur.com/7uQuyO4.jpg)`
    },

    10 :  {
    question : `Ok, last one. You've got this!`,
    correctAns : `Tony Todd (Candyman)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Wallace Shawn (Princess Bride)`, `Jonathan Banks (Breaking Bad)`],
    image : `url(https://i.imgur.com/UPKlgox.jpeg)`
    }
}

const startButton = document.getElementById('start')
const restartButton = document.getElementById('restart')
const playerScore = document.getElementById('score')
const currRound   = document.getElementById('round')
const gameScreen  = document.getElementById('game-screen')
// const answerButtons = document.getElementById('answer')
const answerBtn1 = document.getElementById('answer1')
const answerBtn2 = document.getElementById('answer2')
const answerBtn3 = document.getElementById('answer3')
const answerBtn4 = document.getElementById('answer4')
const questionOfRound = document.getElementById('question')
const rank = document.getElementById('ranking')
const image = document.getElementById('image')




answerBtn1.addEventListener("click", checkAnswer)
answerBtn2.addEventListener("click", checkAnswer)
answerBtn3.addEventListener("click", checkAnswer)
answerBtn4.addEventListener("click", checkAnswer)

init()

function init() {
    gameScreen.style.visibility= "hidden"
    rank.style.visibility = "hidden"
    restartButton.style.visibility = "hidden"
}


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.style.visibility = "hidden"
    gameScreen.style.visibility = "visible"

    let timeLeft = 60
    let timer = setInterval(function(){
        document.getElementById('timer').textContent = timeLeft
        timeLeft -= 1
        if (timeLeft < 0){
            document.getElementById('timer').textContent = ''
        }
    },1000)
    let round = '1'
    currRound.innerHTML = parseInt(round)
    let score = '0'
    playerScore.innerHTML = parseInt(score)
    render()
}


function render() {
    if (timeLeft == 0){
        checkRank()
    }else for (let i = 1; i < 11; i++) {
        answerBtn1.innerHTML = `${prompts[i].correctAns}`
        answerBtn2.innerHTML = `${prompts[i].answers[0]}`
        answerBtn3.innerHTML = `${prompts[i].answers[1]}`
        answerBtn4.innerHTML = `${prompts[i].answers[2]}`
        image.src = `${prompts[i].image}`
        questionOfRound.innerHTML = `${prompts[i].question}`
        checkAnswer()
        round += 1
        }
    checkRank()
}


function checkAnswer() {
    let i = 1
    if (event.target.innerHTML == `${prompts[i].correctAns}`){
        score += 1
        i += 1
    } else {
        i += 1
    }
    // let i = parseInt(round)
    // if(event.target.innerHTML == `${prompts[i].correctAns}`){
    //     score += 1
    // }
}

function checkRank() {
    restartButton.style.visibility = "visible"
    if ( score == 0){
        rank.innerHTML = ranks.neelix
    }
    if ( score > 0 && score <= 3){
        rank.innerHTML = ranks.ensign
    }
    if ( score >= 4 && score <= 6){
        rank.innerHTML = ranks.lieutenant
    }
    if ( score >= 7 && score <= 9){
        rank.innerHTML = ranks.commander
    }
    if ( score == 10){
        rank.innerHTML = ranks.captain
    }

}

restartButton.addEventListener("click", init)



