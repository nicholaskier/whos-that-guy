# **Who's That Guy!** 
## *Star Trek Edition* 

![URL for Game](https://whos-that-guy.surge.sh)

### The Trivia Game for everytime you've seen an actor and wondered aloud, *"Wait, who's that guy again?"*

Join the fun with this interactive quiz game that endulges that deepest itch of not quite being able to put your finger on where you've seen that guy before. This time, with Star Trek characters! Some of these roles are one off cameos, some are recurring characters, but they all have one thing in common: You've seen that freaking guy before, what's his name again?

## Wire-Frame

![wireframe](https://i.imgur.com/anlsPI5.jpg)

### Goals

1. The user should load the page with the basic framing of the game intact, explaining that there will be 10 questions, but with a large "start" button in place of the Q/A section.
2. Once the "start" button has been clicked, the users score should be set to zero and a timer of 60 seconds should start. The photo section should populate with the first image of the first actor. The Q/A section should populate with the first question, set of four possible answers, as well as a submit button.
3. The user should be able to click any of the answers to select them, as well as be able to change their mind before hitting the submit button.
4. When the submit button is clicked, the site should check if the answer is correct, add to the tally of correct answers, congratulate the user briefly for guessing correctly OR show correct answer briefly if answered incorrectly, and populate the Q/A and image with the next question.
5. When the user clicks submit on the 10th question, the Q/A section should populate a message declaring different Star Trek ranks, depending on wether they answered 0-2, 3-5, 6-8, or 10 questions correctly. There should be accompanying sound effects and visual effects, depending on which rank they acquire. 
6. The user should be able to hit a "restart game" button to try again and re-initialize the page.

## Screenshots

![screenshot](/images/Screenshot1.jpg) ![screenshot](/images/Screenshot2.jpg) ![screenshot](/images/Screenshot3.jpg)


## Journey

As you can see, my game morphed considerably through development. I decided to scrap the hovering title and outer elements entirely, in order for the game to be fully rendered inside the padd. I also removed the timer functionality from the game, as I felt that it gave the game a false sense of urgency that I didn't want the user to be feeling. Removing the "submit" button from the questions, in favor of simply submitting whatever answer the user selects felt more interactive, as well.

## Rough Spots

My main issue, so far, with most of my code is deciding on where and how to start. Pseudo-code helps immmensely, but there is certainly a kind of agoraphobia to seeing a blank JS file waiting for you to build something in it. 

## Take-Aways

The more I learn the lexicon of JS/CSS/HTML syntax and the more I can confidently call on that knowledge, the more fun I am able to have building something I am proud of. Figuring out little details, like sounds and animation, to give the game a bit of flair was super fun and I definitely will return to those ideas in the future.

## Icebox Features

1. Add additional questions, possibly one for every special apprearance in the franchise.
2. Iterator to move through questions and answers without having to code every question out.
3. More detailed styling to look more like a Star Trek padd
4. More questions would mean a more varied ranking system, as well.
5. Work out certain issues regarding the audio on reset.

## Technology Used

The game was created using HTML/CSS/JS with VS Code. 

## Attributions and Special Thanks

Photos by ![memoryalpha](https://memory-alpha.fandom.com) and ![technocrazed](https://www.technocrazed.com)
Sounds by ![trekcore](https://www.trekcore.com) and ![myinstants](https://www.myinstants.com)
Animations by ![animate](https://animate.style). Confetti by ![JSD](https://www.jsdelivr.com)

Massive thanks to the instructors, TA's and everyone in my amazing cohort for all their assistance and inspiration!
