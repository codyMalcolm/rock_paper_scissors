# Rock Paper Scissors

## Objective

To create a console-based game of Rock Paper Scissors, played against the computer.

#### Specifications

##### Main

1. Project should utilize Git and GitHub.
2. The initial version of the project is played only from the console and requires no HTML or CSS, and should get user input from prompts.
3. There are some basic but specific requirements of how the functionality of the program should be structured:
 * A function should be created to take two inputs (representing the selection of the player and the computer) and should return (not `console.log`) the results in a string.
 * The returned string should specify whether the player wins and what the selections were.
 * The function should be case insensitive. This implies the inputs must be strings and are not pre-validated.
 * The above function should be nested inside another function called `game()` that plays 5 rounds and then declares an overall winner.

##### Optional

1. Functions can be reworked if necessary.
2. Additional helper functions can be used.

##### Ambiguous

1. No mention is given as to handle ties.
2. No mention is given as to handle invalid input.

#### Learning Objectives

To demonstrate understanding of functions/methods, using built in methods/libraries (`Math.random()`), control flow, basic syntax, and a bit of data validation. Get additional practice with Git and GitHub.

## Author's Notes

#### V1 Preliminary Thoughts

I am already proficient with all of the learning objectives of this project in several programming languages, including Javascript. The only new-to-me method I will use is `prompt()`. Rock Paper Scissors is a very common beginner program. It's highly likely this project will take less time to code than to write the README, but that's okay because the process of Git, GitHub, and external documentation (eg. this document) is valuable. I'm going to pay extra attention to adhering to a professional workflow for this project. Also, this application will be more interesting once it is updated with a UI as a later project.

#### V1 Final Thoughts

I couldn't resist a tiny bit of HTML to direct the user to the console. And then that necessitated a less stark contrast and centering. As for the project, it was about what I expected. At first I thought there was no ambiguities in the specification, but I should know by now that there are *always* ambiguities. I decided for both invalid input and ties, that round wouldn't "count", which meant that the overal result would never be a tie. Using prompt was easy. I used a slightly creative method to generate the computer's selection. I used a pretty gross method to parse the results of a round. The function to get input is pretty unnecessary at the moment, but presumably that will be beneficial when restructuring for V2.

## Miscellaneous

Read more about this project at [The Odin Project.](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors)
