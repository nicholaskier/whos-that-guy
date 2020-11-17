
/*-------------------------------- Constants --------------------------------*/

const ranks = {
    ['0 CORRECT. Such a Neelix. I mean, we can make you 'ship's ambassador or something if it would make you feel better',
    '1-3 CORRECT. Congrats, Ensign! People might call you 'pretty useless', but hey, at least they call you pretty.',
    '4-6 CORRECT. Congrats, Lieutenant! You can sit in the big chair when literally everyone else on the ship dissappears if you accidentally kill God or something.',
    '7-9 CORRECT. Congrats, Commander! Try to keep it in your pants!',
    '10 CORRECT. Oh Captain, MY Captain! You're never in the wrong, even if everyone under you thinks you're making a terrible mistake.']
}

const questions = {
    ['Wait, who's he again?',
    'Hold up, I know this one..',
    'OH! Oh, yeah! THAT guy! ...um...',
    'Well this is an easy one...',
    'How am I supposed to tell under all that loaf?',
    'HOLD UP ... holdupholdupholdup',
    '...it's on the tip of my tongue',
    'I've definitely seen THAT dude',
    'GUH! Where is he FROM?!',
    'Ok, last one. I've got this...']
}

// array of questions, array of answers, array of images(?)
 

/*---------------------------- Variables (state) ----------------------------*/
let round, time, count

init()




function init(){
    round = 0
    time = 60
    count = 0
    render()
    timer()

}
// variables for 4-5 different outcomes depending on total score at end of game
// array of questions, array of answers, array of images(?)
/*------------------------ Cached Element References ------------------------*/



const question = document.getElementById('question')
const rank = document.getElementById('ranking')
const choices = document.getElementsByClassName('answer')



// You might choose to put your game status here
//cache buttons, image, timer(?), score count  

/*----------------------------- Event Listeners -----------------------------*/



// This is where you should put the event listener
// for a mouse-click
// Clicks for start box, each answer box, submit button, reset button 
/*-------------------------------- Functions --------------------------------*/


// total answers correct
    // if answer checked = correct, add to tally (up to 10)
    // once game is over, return rank that correlates to number of correct answers
// timer
    // on click of start button, begin timer of 60 seconds
    //  end game after 60 seconds, no matter what question they are on
// submit
    // on click, submit answer that has been selected
// check Answer
    // on submit click, check selected answer vs. the possible answers and signify which answer was the correct one, despite user input
// restart
    // re-initialize game state to try again