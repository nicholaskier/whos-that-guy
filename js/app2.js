let timeLeft
let round
let score


let ranks = {
    neelix : `0 CORRECT. Such a Neelix. I mean, we can make you ship's ambassador or something if it would make you feel better`,
    neeliximg : ``,
    ensign : `1-3 CORRECT. Congrats, Ensign! People might call you 'pretty useless', but hey, at least they call you pretty.`,
    ensignImg : ``,
    lieutenant : `4-6 CORRECT. Congrats, Lieutenant! You can sit in the big chair when literally everyone else on the ship dissappears if you accidentally kill God or something.`,
    lieutenantImG : ``,
    commander : `7-9 CORRECT. Congrats, Commander! Try to keep it in your pants!`,
    commanderImg : ``,
    captain : `10 CORRECT. Oh Captain, MY Captain! You're never in the wrong, even if everyone under you thinks you're making a terrible mistake.`,
    captainImg : ``
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


init()

function init() {
    round = 0
    score = 0
    image.src = "https://i2.wp.com/media4.giphy.com/media/26BRqPg05olzXG1bi/giphy.gif"
    startButton.style.visibility = "visible"
    restartButton.style.visibility = "hidden"
    questionOfRound.innerText = `10 Rounds, 10 Guys! 
    You've seen them before, but where?!`
    questionOfRound.style.margin = "120px -20px"
    currRound.style.visibility = "hidden"
    playerScore.style.visibility= "hidden"
    answerBtn1.style.visibility = "hidden"
    answerBtn2.style.visibility = "hidden"
    answerBtn3.style.visibility = "hidden"
    answerBtn4.style.visibility = "hidden"
}


startButton.addEventListener('click', startGame)

function startGame() {
    currRound.style.visibility = "visible"
    playerScore.style.visibility= "visible"
    quesBox.style.visibility = "visible"
    startButton.style.visibility= "hidden"
    gameScreen.style.visibility = "visible"
    answerBtn1.style.visibility = "visible"
    answerBtn2.style.visibility = "visible"
    answerBtn3.style.visibility = "visible"
    answerBtn4.style.visibility = "visible"

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
    playerScore.innerHTML = parseInt(score)
    render()
}



answerBtn1.addEventListener("click", checkAnswer)
answerBtn2.addEventListener("click", checkAnswer)
answerBtn3.addEventListener("click", checkAnswer)
answerBtn4.addEventListener("click", checkAnswer)


function render() {
    if (round == 0){
        console.log(score)
        answerBtn2.textContent = `${prompts[0].correctAns}`
        answerBtn1.textContent = `${prompts[0].answers[0]}`
        answerBtn3.textContent = `${prompts[0].answers[1]}`
        answerBtn4.textContent = `${prompts[0].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[0].image}`
        questionOfRound.innerHTML = `${prompts[0].question}`
        checkAnswer()
    }else if (round == 1) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn3.textContent = `${prompts[1].correctAns}`
        answerBtn2.textContent = `${prompts[1].answers[0]}`
        answerBtn1.textContent = `${prompts[1].answers[1]}`
        answerBtn4.textContent = `${prompts[1].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[1].image}`
        questionOfRound.innerHTML = `${prompts[1].question}`
        checkAnswer()
    }else if (round == 2) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn1.textContent = `${prompts[2].correctAns}`
        answerBtn2.textContent = `${prompts[2].answers[0]}`
        answerBtn3.textContent = `${prompts[2].answers[1]}`
        answerBtn4.textContent = `${prompts[2].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[2].image}`
        questionOfRound.innerHTML = `${prompts[2].question}`
        checkAnswer()
    }else if (round == 3) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn4.textContent = `${prompts[3].correctAns}`
        answerBtn2.textContent = `${prompts[3].answers[0]}`
        answerBtn3.textContent = `${prompts[3].answers[1]}`
        answerBtn1.textContent = `${prompts[3].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[3].image}`
        questionOfRound.innerHTML = `${prompts[3].question}`
        checkAnswer()
    }else if (round == 4) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn2.textContent = `${prompts[4].correctAns}`
        answerBtn1.textContent = `${prompts[4].answers[0]}`
        answerBtn3.textContent = `${prompts[4].answers[1]}`
        answerBtn4.textContent = `${prompts[4].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[4].image}`
        questionOfRound.innerHTML = `${prompts[4].question}`
        checkAnswer()
    }else if (round == 5) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn3.textContent = `${prompts[5].correctAns}`
        answerBtn2.textContent = `${prompts[5].answers[0]}`
        answerBtn1.textContent = `${prompts[5].answers[1]}`
        answerBtn4.textContent = `${prompts[5].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[5].image}`
        questionOfRound.innerHTML = `${prompts[5].question}`
        checkAnswer()
    }else if (round == 6) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn2.textContent = `${prompts[6].correctAns}`
        answerBtn1.textContent = `${prompts[6].answers[0]}`
        answerBtn3.textContent = `${prompts[6].answers[1]}`
        answerBtn4.textContent = `${prompts[6].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[6].image}`
        questionOfRound.innerHTML = `${prompts[6].question}`
        checkAnswer()
    }else if (round == 7) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn1.textContent = `${prompts[7].correctAns}`
        answerBtn2.textContent = `${prompts[7].answers[0]}`
        answerBtn3.textContent = `${prompts[7].answers[1]}`
        answerBtn4.textContent = `${prompts[7].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[7].image}`
        questionOfRound.innerHTML = `${prompts[7].question}`
        checkAnswer()
    }else if (round == 8) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn3.textContent = `${prompts[8].correctAns}`
        answerBtn2.textContent = `${prompts[8].answers[0]}`
        answerBtn1.textContent = `${prompts[8].answers[1]}`
        answerBtn4.textContent = `${prompts[8].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[8].image}`
        questionOfRound.innerHTML = `${prompts[8].question}`
        checkAnswer()
    }else if (round == 9) {
        playerScore.innerHTML = parseInt(score)
        console.log(score)
        answerBtn4.textContent = `${prompts[9].correctAns}`
        answerBtn2.textContent = `${prompts[9].answers[0]}`
        answerBtn3.textContent = `${prompts[9].answers[1]}`
        answerBtn1.textContent = `${prompts[9].answers[2]}`
        console.log(image.src)
        image.src = `${prompts[9].image}`
        questionOfRound.innerHTML = `${prompts[9].question}`
        checkAnswer()
    }
    if (round == 10 || timeLeft < 0){
        checkRank()
    }
}


function checkAnswer(event) {
    console.log(score)
    currRound.innerHTML = parseInt(round) + 1
    if (event.target.textContent != `${prompts[round].correctAns}`){
        
    } else {
        score += 1
        
    }
    
    round += 1
    render()
}

function checkRank() {
    console.log(score)
    questionOfRound.style.margin = "60px -20px"
    currRound.style.visibility = "hidden"
    answerBtn1.style.visibility = "hidden"
    answerBtn2.style.visibility = "hidden"
    answerBtn3.style.visibility = "hidden"
    answerBtn4.style.visibility = "hidden"
    playerScore.innerHTML = parseInt(score)
    restartButton.style.visibility = "visible"
    if ( score == 0){
        questionOfRound.innerHTML = `${ranks.neelix}`
        image.src = `${ranks.neelixImg}`
    }
    if ( score > 0 && score <= 3){
        questionOfRound.innerHTML = `${ranks.ensign}`
        image.src = `${ranks.ensignImg}`
    }
    if ( score >= 4 && score <= 6){
        questionOfRound.innerHTML = `${ranks.lieutenant}`
        image.src = `${ranks.lieutenantImG}`
    }
    if ( score >= 7 && score <= 9){
        questionOfRound.innerHTML = `${ranks.commander}`
        image.src = `${ranks.commanderImg}`
    }
    if ( score == 10){
        questionOfRound.innerHTML = `${ranks.captain}`
        image.src = `${ranks.captainImg}`
    }

}

restartButton.addEventListener("click", restart)

function restart() {

    init()

}



