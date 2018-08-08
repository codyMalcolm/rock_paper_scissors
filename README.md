# Rock Paper Scissors

## Objective

V1: To create a console-based game of Rock Paper Scissors, played against the computer.

V2: To update the original version with a UI.

#### Specifications

##### Main

1. Project should utilize Git and GitHub.
2.
 * The initial version of the project is played only from the console and requires no HTML or CSS, and should get user input from prompts.
 * The revised version should have a "simple UI" using buttons.
3. There are some basic but specific requirements of how the functionality of the program should be structured:
 * A function should be created to take two inputs (representing the selection of the player and the computer) and should return (not `console.log`) the results in a string.
 * The returned string should specify whether the player wins and what the selections were.
 * The function should be case insensitive. This implies the inputs must be strings and are not pre-validated.
 * V1: The above function should be nested inside another function called `game()` that plays 5 rounds and then declares an overall winner.
 * V2: The revised version removes the logic that plays 5 rounds and instead announces a winner once a player has 5 points.
 * Event listeners should be used (as opposed to `selector.onclick`)
4. V2: All output should be displayed to the document.

##### Optional

1. Functions can be reworked if necessary.
2. Additional helper functions can be used.

##### Ambiguous

1. No mention is given as to handle ties.
2. No mention is given as to handle invalid input.

#### Learning Objectives

V1: To demonstrate understanding of functions/methods, using built in methods/libraries (`Math.random()`), control flow, basic syntax, and a bit of data validation. Get additional practice with Git and GitHub.

V2: To demonstrate understanding of the Document-Object Model. To get experience refactoring code.

## Author's Notes

#### V1 Preliminary Thoughts

I am already proficient with all of the learning objectives of this project in several programming languages, including Javascript. The only new-to-me method I will use is `prompt()`. Rock Paper Scissors is a very common beginner program. It's highly likely this project will take less time to code than to write the README, but that's okay because the process of Git, GitHub, and external documentation (eg. this document) is valuable. I'm going to pay extra attention to adhering to a professional workflow for this project. Also, this application will be more interesting once it is updated with a UI as a later project.

#### V1 Final Thoughts

I couldn't resist a tiny bit of HTML to direct the user to the console. And then that necessitated a less stark contrast and centering. As for the project, it was about what I expected. At first I thought there was no ambiguities in the specification, but I should know by now that there are *always* ambiguities. I decided for both invalid input and ties, that round wouldn't "count", which meant that the overal result would never be a tie. Using prompt was easy. I used a slightly creative method to generate the computer's selection. I used a pretty gross method to parse the results of a round. The function to get input is pretty unnecessary at the moment, but presumably that will be beneficial when restructuring for V2.

#### V2 Premilinary Thoughts

I have a fair bit of experience with DOM manipulation so this should be straightforward. I forsee no issues.

#### V2 Final Thoughts

To be completed upon project completion.

## Miscellaneous

Read more about this project at [The Odin Project.](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors)
