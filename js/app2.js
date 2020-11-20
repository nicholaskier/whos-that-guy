let timeLeft
let round = 0


let ranks = {
    neelix : `0 CORRECT. Such a Neelix. I mean, we can make you ship's ambassador or something if it would make you feel better`,
    ensign : `1-3 CORRECT. Congrats, Ensign! People might call you 'pretty useless', but hey, at least they call you pretty.`,
    lieutenant : `4-6 CORRECT. Congrats, Lieutenant! You can sit in the big chair when literally everyone else on the ship dissappears if you accidentally kill God or something.`,
    commander : `7-9 CORRECT. Congrats, Commander! Try to keep it in your pants!`,
    captain : `10 CORRECT. Oh Captain, MY Captain! You're never in the wrong, even if everyone under you thinks you're making a terrible mistake.`
}

let prompts = [
    one = {
    question : `Wait, who's he again?`,
    correctAns : `Wallace Shawn (Princess Bride)`,
    answers : [`Tony Todd (Candyman)`, `Jonathan Banks (Breaking Bad)`, `Kurtwood Smith (That 70's Show)`],
    image : `https://i.imgur.com/B26FTeF.jpeg`
    },

    two = {
    question : `Hold up, you know this one...`,
    correctAns : `Christopher Lloyd (Back to the Future)`,
    answers : [`Scott Thompson (Kids in the Hall)`, `Jim O'Heir (Parks and Rec)`, `Jason Alexander (Seinfeld)`],
    image : `https://i.imgur.com/gSkLXBv.jpg`
    },

    three =  {
    question : `Oh! Oh, yeah! THAT guy! ...um...`,
    correctAns : `Iggy Pop (Iggy Pop)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Wallace Shawn (Princess Bride)`, `Tony Todd (Candyman)`],
    image : `https://i.imgur.com/ibdfNnj.jpeg`
    },

    four = {
    question : `Well, this is an easy one ...`,
    correctAns : `Jason Alexander (Seinfeld)`,
    answers : [`Jim O'Heir (Parks and Rec)`, `Kurtwood Smith (Kids in the Hall)`, `Iggy Pop (Iggy Pop)`],
    image : `https://i.imgur.com/4yTTeBh.jpeg`
    },

    five = {
    question : `How are you supposed to tell under all that loaf?`,
    correctAns : `Mick Fleetwood (Fleetwood Mac)`,
    answers : [`Kurtwood Smith (That 70's Show)`, `Christopher Lloyd (Back to the Future)`, `Tony Todd (Candyman)`],
    image : `https://i.imgur.com/nFaIXtA.jpeg`
    },

    six = {
    question : `HOLD UP...holdupholdupholdup..`,
    correctAns : `Jonathan Banks (Breaking Bad)`,
    answers : [`Scott Thompson (Kids in the Hall)`, `Jim O'Heir (Parks and Rec)`, `Wallace Shawn (Princess Bride)`],
    image : `https://i.imgur.com/ZRsi948.jpg`
    },

    seven =  {
    question : `...it's on the tip of your tongue`,
    correctAns : `Scott Thompson (Kids in the Hall)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Christopher Lloyd (Back to the Future)`, `Jason Alexander (Seinfeld)`],
    image : `https://i.imgur.com/ioO8MuI.jpg`
    },

    eight = {
    question : `You've definitely seen THAT dude.`,
    correctAns : `Kurtwood Smith (That 70's Show)`,
    answers : [`Wallace Shawn (Princess Bride)`, `Iggy Pop (Iggy Pop)`, `Mick Fleetwood (Fleetwood Mac)`],
    image : `https://i.imgur.com/hKkTAUz.jpg`
    },

    nine = {
    question : `GUH! Where is he FROM?!`,
    correctAns : `Jim O'Heir (Parks and Rec)`,
    answers : [`Jason Alexander (Seinfeld)`, `Scott Thompson (Kids in the Hall)`, `Kurtwood Smith (That 70's Show)`],
    image : `https://i.imgur.com/7uQuyO4.jpg`
    },

    ten =  {
    question : `Ok, last one. You've got this!`,
    correctAns : `Tony Todd (Candyman)`,
    answers : [`Mick Fleetwood (Fleetwood Mac)`, `Wallace Shawn (Princess Bride)`, `Jonathan Banks (Breaking Bad)`],
    image : `https://i.imgur.com/UPKlgox.jpeg`
    }
]


console.log(prompts[0].correctAns)


const startButton = document.getElementById('start')
const restartButton = document.getElementById('restart')
const quesBox = document.getElementById('question-box')
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
const startScreen = document.getElementById('start-screen')


init()

function init() {
    rank.style.visibility = "hidden"
    gameScreen.style.visibility= "hidden"
    restartButton.style.visibility = "hidden"
}


startButton.addEventListener('click', startGame)

function startGame() {
    rank.style.visibility = "hidden"
    quesBox.style.visibility = "visible"
    startButton.style.visibility= "hidden"
    startScreen.style.visibility = "hidden"
    gameScreen.style.visibility = "visible"

    let timeLeft = 60
    let timer = setInterval(function(){
        document.getElementById('timer').textContent = timeLeft
        timeLeft -= 1
        if (timeLeft < 0){
            document.getElementById('timer').textContent = ''
        }
    },1000)
    currRound.innerHTML = parseInt(round) + 1
    console.log(parseInt(round))
    let score = '0'
    playerScore.innerHTML = parseInt(score)
    render()
}



answerBtn1.addEventListener("click", checkAnswer)
answerBtn2.addEventListener("click", checkAnswer)
answerBtn3.addEventListener("click", checkAnswer)
answerBtn4.addEventListener("click", checkAnswer)


function render() {
    if (round == 0){
        answerBtn1.textContent = `${prompts[0].correctAns}`
        answerBtn2.textContent = `${prompts[0].answers[0]}`
        answerBtn3.textContent = `${prompts[0].answers[1]}`
        answerBtn4.textContent = `${prompts[0].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[0].image}`
        questionOfRound.innerHTML = `${prompts[0].question}`
        checkAnswer()
        round += 1
    }else if (round == 1) {
        answerBtn1.textContent = `${prompts[1].correctAns}`
        answerBtn2.textContent = `${prompts[1].answers[0]}`
        answerBtn3.textContent = `${prompts[1].answers[1]}`
        answerBtn4.textContent = `${prompts[1].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[1].image}`
        questionOfRound.innerHTML = `${prompts[1].question}`
        checkAnswer()
        round += 1
    }else if (round == 2) {
        answerBtn1.textContent = `${prompts[2].correctAns}`
        answerBtn2.textContent = `${prompts[2].answers[0]}`
        answerBtn3.textContent = `${prompts[2].answers[1]}`
        answerBtn4.textContent = `${prompts[2].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[2].image}`
        questionOfRound.innerHTML = `${prompts[2].question}`
        checkAnswer()
    }else if (round == 3) {
        round += 1
        answerBtn1.textContent = `${prompts[3].correctAns}`
        answerBtn2.textContent = `${prompts[3].answers[0]}`
        answerBtn3.textContent = `${prompts[3].answers[1]}`
        answerBtn4.textContent = `${prompts[3].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[3].image}`
        questionOfRound.innerHTML = `${prompts[3].question}`
        checkAnswer()
        round += 1
    }else if (round == 4) {
        answerBtn1.textContent = `${prompts[4].correctAns}`
        answerBtn2.textContent = `${prompts[4].answers[0]}`
        answerBtn3.textContent = `${prompts[4].answers[1]}`
        answerBtn4.textContent = `${prompts[4].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[4].image}`
        questionOfRound.innerHTML = `${prompts[4].question}`
        checkAnswer()
        round += 1
    }else if (round == 5) {
        answerBtn1.textContent = `${prompts[5].correctAns}`
        answerBtn2.textContent = `${prompts[5].answers[0]}`
        answerBtn3.textContent = `${prompts[5].answers[1]}`
        answerBtn4.textContent = `${prompts[5].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[5].image}`
        questionOfRound.innerHTML = `${prompts[5].question}`
        checkAnswer()
        round += 1
    }else if (round == 6) {
        answerBtn1.textContent = `${prompts[6].correctAns}`
        answerBtn2.textContent = `${prompts[6].answers[0]}`
        answerBtn3.textContent = `${prompts[6].answers[1]}`
        answerBtn4.textContent = `${prompts[6].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[6].image}`
        questionOfRound.innerHTML = `${prompts[6].question}`
        checkAnswer()
        round += 1
    }else if (round == 7) {
        answerBtn1.textContent = `${prompts[7].correctAns}`
        answerBtn2.textContent = `${prompts[7].answers[0]}`
        answerBtn3.textContent = `${prompts[7].answers[1]}`
        answerBtn4.textContent = `${prompts[7].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[7].image}`
        questionOfRound.innerHTML = `${prompts[7].question}`
        checkAnswer()
        round += 1
    }else if (round == 8) {
        answerBtn1.textContent = `${prompts[8].correctAns}`
        answerBtn2.textContent = `${prompts[8].answers[0]}`
        answerBtn3.textContent = `${prompts[8].answers[1]}`
        answerBtn4.textContent = `${prompts[8].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[8].image}`
        questionOfRound.innerHTML = `${prompts[8].question}`
        checkAnswer()
        round += 1
    }else if (round == 9) {
        answerBtn1.textContent = `${prompts[9].correctAns}`
        answerBtn2.textContent = `${prompts[9].answers[0]}`
        answerBtn3.textContent = `${prompts[9].answers[1]}`
        answerBtn4.textContent = `${prompts[9].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[9].image}`
        questionOfRound.innerHTML = `${prompts[9].question}`
        checkAnswer()
    }
    if (round > 9 || timeLeft < 0){
        checkRank()
    }
}


function checkAnswer(EventTarget) {
    if (EventTarget.innerHTML == `${prompts[round].correctAns}`){
        score += 1
    } else {
        return
    }
}

function checkRank() {
    // quesBox.style.visibility = "hidden"
    rank.style.visibility = "visible"
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



