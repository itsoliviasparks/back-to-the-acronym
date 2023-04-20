# Back To The Acronym 🚀
<a href="https://itsoliviasparks-back-to-the-acronym.netlify.app">Live Site</a>

## About
"Doc, You Don't Just Walk Into A Store And Buy Plutonium!"

Sometimes you just can't think up a good acronym! And that's where Back To The Acronym comes in. This app, designed after the iconic 1985 film "Back To The Future", helps the user generate a custom backronym.

Backronym: n. acronym deliberately formed from a phrase whose initial letters spell out a particular word.

## Project Purpose & Goal
For this project, I collaborated with 3 other developers to complete an assigned project brief. The backronym generator takes the user's input word, makes an API call, and returns a randomly generated backronym. The user can then shuffle the words until they find one they like. Any liked words can be locked in, and when the user is satisfied with their backronym, they can save it to their saved backronym database.

In order to inject a little fun into our project, we themed the project around the iconic 1985 film "Back To The Future" -- take a look at the loading animation!!

## Tech Stack
React, Firebase (inc. Google Authentication), 1.21 gigawatts, the <a href="https://www.datamuse.com/api/">Datamuse API</a>, & Sass

## Use
- To use the app, the user first enters in their desired acronym of 2-6 characters
    - They also have the choice to add additional context words to narrow the scope of their results
- From there, the user input is saved into state & triggers an API call
    - The user's input word is separated into an array of each letter
    - An API call is triggered for each letter in the array & returns a list of words that start with the letter
    - If the user input a context word, it is added as a parameter in the API call & narrows the scope of the API results to only words similar to the context word
- Upon completion of the API call:
    - A random word from the results array is selected for each letter
    - The resulting acronym is displayed on the page
    - If the user does not like their result, they can hit the refresh button to cycle thru all word options
    - If there is a particular word in the result acronym the user likes, they can lock-in that word, and continue to cycle through additional options for all other letters, until they land on an bacronym that they like
    - Once the user is happy with all the words in their backronym they can "like" it
        - Liked acronyms are saved into the user's acronym database
        - The user can authenticate via Google to save their acronyms to access each time they use the site
        - Alternatively, if they choose to stay anonymous, the site auto-generates a one-time anonymous key for their session
        - Additionally, the user may edit, update, & delete their previously saved acronyms both as an anonymous user & as an authenticated user


## Problems Solved & Lessons Learned
###  Group Programming
This is a group programming project between myself, <a href="https://github.com/samnjab">Sam Jaberi</a>, <a href="https://github.com/christianyuen">Christian Yuen</a>, & <a href="https://github.com/Matt01270">Matt Spencer</a>.

Working with a group of 3 other developers was a valuable experience. As collaborators, we spent a lot of our time programming synchronously as a group, explaining our thought processes, and bouncing ideas off of each other when problem solving.

Working collaboratively allowed us to write some fairly complex logic, specifically the `src/Components/Results.js` & `src/Components/SavedBackronym.js` files. By working together we were able to build an app that was more complex than what we could have built individually within the same time frame. Google Authentication & the ability to edit/delete saved backronyms were not requirements of our assigned project brief, but are elements that we were excited to collaborate on & implement after quickly working through the project requirements.

### Multiple API Calls
During the development of this project, the team encountered a few problems that were successfully resolved. One of the biggest challenges we faced was working with the Datamuse API, which required us to make multiple API calls to generate each backronym. We were able to solve this problem by using the Promise.all method to wait for all of the API calls to complete before displaying the results.

### Data Organization
![Screenshot 2023-04-16 at 12 13 35](https://user-images.githubusercontent.com/97206055/232333204-83a7e249-36d1-4668-a25e-15766c953f5d.jpg)
Our data organization was another group effort and a big success. Ensuring that both anonymous & authenticated user's data was organized the same way was key in getting the app to work. Above is a screenshot of our Firebase Realtime Database. Data is spit into two categories: anonymous & authenticated. From there, each user has a uniquely generated key and each of their saved backronyms is an object that contains an object for each backronym word. The word objects contain the full word & and a boolean for the lock state.

## Areas of Improvement
Despite the success of this project, there are several areas where we could have improved. One major issue is accessibility. Some buttons and controls were left without labels or tooltips, making them impossible to use with the keyboard alone. Additionally, the form element is nested within the header element, which is semantically incorrect and could cause issues for screen readers.

Another area where we could improve is code organization. Components are currently nested, which results `prop drilling`. And there is logic in `App.js` that should be moved into separate components. I am working on improving this by refactoring our code to separate concerns and improve overall component structure.


