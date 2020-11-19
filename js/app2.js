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
    answers : [`Tony Todd (Candyman)`, `Jonathan Banks (Breaking Bad)`, `Kurtwood Smith (That 70's Show)`, `Wallace Shawn (Princess Bride)`],
    image : `url(https://i.imgur.com/B26FTeF.jpeg)`
}

let ques2 = {
    question : `Hold up, you know this one...`,
    correctAns : `Christopher Lloyd (Back to the Future)`,
    answers : [`Scott Thompson (Kids in the Hall)`, `Jim O'Heir (Parks and Rec)`, `Christopher Lloyd (Back to the Future)`, `Jason Alexander (Seinfeld)`],
    image : `url(https://i.imgur.com/gSkLXBv.jpg)`
}

let ques3 = {
    question : `Oh! Oh, yeah! THAT guy! ...um...`,
    correctAns : `Iggy Pop (Iggy Pop)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Iggy Pop (Iggy Pop)`, `Wallace Shawn (Princess Bride)`, `Tony Todd (Candyman)`],
    image : `url(https://i.imgur.com/ibdfNnj.jpeg)`
}

let ques4 = {
    question : `Well, this is an easy one ...`,
    correctAns : `Jason Alexander (Seinfeld)`,
    answers : [`Jim O'Heir (Parks and Rec)`, `Kurtwood Smith (Kids in the Hall)`, `Iggy Pop (Iggy Pop)`, `Jason Alexander (Seinfeld)`],
    image : `url(https://i.imgur.com/4yTTeBh.jpeg)`
}

let ques5 = {
    question : `How are you supposed to tell under all that loaf?`,
    correctAns : `Mick Fleetwood (Fleetwood Mac)`,
    answers : [`Kurtwood Smith (That 70's Show)`, `Christopher Lloyd (Back to the Future)`, `Mick Fleetwood (Fleetwood Mac)`, `Tony Todd (Candyman)`],
    image : `url(https://i.imgur.com/nFaIXtA.jpeg)`
}

let ques6 = {
    question : `HOLD UP...holdupholdupholdup..`,
    correctAns : `Jonathan Banks (Breaking Bad)`,
    answers : [`Scott Thompson (Kids in the Hall)`, `Jonathan Banks (Breaking Bad)`, `Jim O'Heir (Parks and Rec)`, `Wallace Shawn (Princess Bride)`],
    image : `url(https://i.imgur.com/ZRsi948.jpg)`
}

let ques7 = {
    question : `...it's on the tip of your tongue`,
    correctAns : `Scott Thompson (Kids in the Hall)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Christopher Lloyd (Back to the Future)`, `Scott Thompson (Kids in the Hall)`, `Jason Alexander (Seinfeld)`],
    image : `url(https://i.imgur.com/ioO8MuI.jpg)`
}

let ques8 = {
    question : `You've definitely seen THAT dude.`,
    correctAns : `Kurtwood Smith (That 70's Show)`,
    answers : [`Kurtwood Smith (That 70's Show)`, `Wallace Shawn (Princess Bride)`, `Iggy Pop (Iggy Pop)`, `Mick Fleetwood (Fleetwood Mac)`],
    image : `url(https://i.imgur.com/hKkTAUz.jpg)`
}

let ques9 = {
    question : `GUH! Where is he FROM?!`,
    correctAns : `Jim O'Heir (Parks and Rec)`,
    answers : [`Jason Alexander (Seinfeld)`, `Scott Thompson (Kids in the Hall)`, `Kurtwood Smith (That 70's Show)`, `Jim O'Heir (Parks and Rec)`],
    image : `url(https://i.imgur.com/7uQuyO4.jpg)`
}

let ques10 = {
    question : `Ok, last one. You've got this!`,
    correctAns : `Tony Todd (Candyman)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Tony Todd (Candyman)`, `Wallace Shawn (Princess Bride)`, `Jonathan Banks (Breaking Bad)`],
    image : `url(https://i.imgur.com/UPKlgox.jpeg)`
}


const startButton = document.getElementById('start')
const restartButton = document.getElementById('restart')
const playerScore = document.getElementById('score')
const currRound   = document.getElementById('round')
const gameScreen  = document.getElementById('game-screen')
const answerButtons = document.getElementById('answer')
const questionOfRound = document.getElementById('question')
const rank = document.getElementById('ranking')


init()

function init() {
    round = questionOfRound.inner
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
    currRound.innerHTML = 1
    playerScore.innerHTML = 0
    render()
}

answerButtons.addEventListener("click", render)

function render(evt) {
    const button = evt.target
   
}



restartButton.addEventListener("click", init)



