# 24 Game

![multi-device-mockups](docs/screenshots/multi-device-mockups.png)

## Site Overview

This project is a Math puzzle game known as the '24 game'. I played this game throughout school, and I thought it would be a fun challenge to recreate using JavaScript, HTML, and CSS.

The site is designed to be user-friendly and accessible, it contains a simple layout and is responsive across all devices. Users can improve their mental arithmetic while enjoying the fun, competitive environment the 24 game provides.

[View Live Site.](https://alexthoma5.github.io/Milestone_project_2/) Hosted on GitHub Pages.

## Table Of Contents:

1. [Design & Planning](#design--planning)
   - [User Stories](#user-stories)
   - [Wireframes](#wireframes)
   - [Typography](#typography)
   - [Colour Scheme](#colour-scheme)
2. [Features](#features)
   - [Site Wide Features](#Site-wide-features)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
5. [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credits](#credits)

## Design & Planning:

### User Stories

1. As a beginner, I want to be able to see the game rules to understand the game.
2. As a player, I want the game to prevent invalid moves (like dividing by zero or using negative/decimal results), so I play within the game’s rules.
3. As a player, I want to be able to deselect a number or operator, so that I can change my mind before committing to a move.
4. As a player, I want the interface to highlight which numbers and operators I’ve selected so I don’t get confused during my turn.
5. As a player, I want to see my score increase when I win so that I can track my progress.
6. As a player, I want to undo a move, so that I can try a different calculation if I make a mistake.
7. As an experienced player, I want the game to be timed to make the game more competitive and rewarding.
8. As a player, I want to be presented with my score at the end of the game so that I can attempt to beat it next time.
9. As a player, I want the option to quit the game and start again, so that I can reset my progress and begin a new game at any time.

### Wireframes

The wireframes for this website were created using Balsamiq to establish a clear and intuitive structure. I followed the mobile-first approach ensuring my site is optimised and responsive across all devices.

1. #### Mobile:

    <details><summary>Click to view wireframes</em></summary>

    ![Desktop Wireframe](docs/wireframes/mobile-wireframe.png)

    </details>

2. #### Tablet:

    <details><summary>Click to view wireframes</em></summary>

    ![Mobile/Tablet Wireframes](docs/wireframes/tablet-wireframe.png)

    </details>

3. #### Desktop:

    <details><summary>Click to view wireframes</em></summary>

    ![Mobile/Tablet Wireframes](docs/wireframes/desktop-wireframe.png)

    </details>
    
### Typography

When selecting the fonts for my website, I considered readability, aesthetics and accessibility. Therefore I chose the following fonts:

#### Primary Font - Roboto

  - Used for all text and numbers, besides the main heading.
  - Clean, modern, and highly legible, especially good for mobile views.


#### Secondary Font - Fredoka

  - Used for the main heading on site.
  - Fun, playful and sets the tone of the site from the offset.

### Colour Scheme

When deciding on a colour scheme, I wanted it to match the overall playful, fun theme of the site while maintaining a professional, aesthetically pleasing look. In doing so I decided upon these colours.

![Colour Pallette](docs/screenshots/colors.png)

I wanted to keep the colour scheme clean and non-distracting, allowing the user to focus entirely on the game itself. I found that in this case, less is more — and that subtle uses of color, such as highlighting selected operators, can enhance the experience significantly without overwhelming the interface.

## Features:

### Home Page:

#### Header

![Header](docs/screenshots/header.png)
- Colourful header that is visually appealing and sets the tone for the website.

#### Rules Button - Rules Modal

![Rules Button](docs/screenshots/rules-btn.png)
![Rules Modal](docs/screenshots/rules-modal.png)
- The rules button with custom styling provides access to the modal containing the game instructions.
- The rules modal provides the user with the necessary information to understand the game.

#### Score Counter

![Score Counter](docs/screenshots/score-counter.png)
- Score counter that updates every time the user scores a point.
- Improves user experience and user satisfaction as the user gets visual feedback every time they achieve a point.

#### Timer

![Game Timer](docs/screenshots/timer.png)
- Game timer that begins when the game starts.
- Improves competitive aspect and replayability of the game.
- Counts down in the MM: SS format to make it more user-friendly.

#### Number Grid

![Number Grid](docs/screenshots/number-grid.png)
- Simple two by two grid, keeps the layout clean and concise for the user.
- Keeps the numbers within the grid close together, which makes it faster for the user to perform operations therefore leading to a more enjoyable experience.

#### Operator Buttons

![Operator Buttons](docs/screenshots/operators.png)
- Allows the user to select the operator for the current calculation they are trying to make.
- They appear side by side underneath the buttons, providing the user with an intuitive design allowing for a more efficient and smoother experience while playing the game.

#### Start Game Button

![Start Game Button](docs/screenshots/start-game.png)
- Start game button that gets the game up and running and starts the game timer.

#### Quit Game Button

![Quit Game Button](docs/screenshots/quit.png)
- Quit game button that allows the user to quit the game at the click of a button.
- Appears in place of the start game button once the game has begun.
- Executes a simple refresh to bring the user back to the home page.

#### Undo Button

![Undo Game Button](docs/screenshots/undo.png)
- The undo button is crucial to a good user experience, it allows the user to undo/rewind their last move.
- Can be pressed multiple times until the numbers are back to how they first appeared.
- The undo button allows the user to backtrack whenever appropriate within the game, this allows the user to experiment with numbers and try multiple solutions without getting stuck.

#### Error Modal

![Error Modal](docs/screenshots/error-modal.png)
- Error modal that appears when the user makes an invalid calculation (negative or decimal number)
- Provides the user with feedback on the mistake they made and the result of their calculation.
- The instant feedback gives the user a better understanding of why they received an error and how to prevent future errors.

#### Game Ending Modal

![Error Modal](docs/screenshots/game-ending-modal.png)
- The game ending modal appears when the game timer reaches 00:00s and the game ends.
- Enhances user experience by providing a custom message depending on the user's score.
- Contains a "New game" button which sends the user straight into another game.

### Future enhancements

1. In a future release and when my skills develop further, I'd like to learn how to build and implement a solution functionality. By allowing the user to view the solution to the challenge that caused them to lose, it provides them with greater user satisfaction as they have the opportunity to learn from it.

2. In a future release, I'd like to implement a scoreboard where the game stores previous scores by the user. This would enhance the competitive nature of the game as the user will be able to compete against their previous scores.

3. In a future release, I'd like to implement sound effects into the game. For example, when the user creates an invalid number, achieves a point or even when the timer is running out.

## Technologies Used

* HTML
    * The structure of the Website was developed using HTML as the main language.
* CSS
    * The Website was styled using custom CSS in an external file.
* Visual Studio Code
    * The website was developed using Visual Studio Code IDE.
* GitHub
    * Source code is hosted on GitHub and delpoyed using Git Pages.
* Git 
    * Used to commit and push code during the development phase of the Website.
* Font Awesome
    * Icons obtained from https://fontawesome.com/ were used as the Social media links in the footer section. 
* Favicon.io
    * favicon files were created at https://favicon.io/favicon-converter/ 
* balsamiq
    * wireframes were created using balsamiq from https://balsamiq.com/wireframes/desktop/#
*   Grammarly
    * Grammarly was used to spell check and catch mistakes in the website and README.md.
*   ChatGPT 
    * ChatGPT has been an invaluable tool throughout this project, prompting it to act as my mentor and help me understand my mistakes has accelerated my learning massivley.

## Testing

### Google's Lighthouse Performance

1. Home Page - Desktop

    ![Home Page - Desktop](docs/testing/lighthouse-desktop.png)

2. Home Page - Mobile

    ![Home Page - Mobile](docs/testing/lighthouse-mobile.png)

3. 404 Page - Desktop

    ![404 Page - Desktop](docs/testing/404-lighthouse-desktop.png)

4. 404 Page - Mobile

    ![404 Page - Mobile](docs/testing/404-lighthouse-mobile.png)

### Wave Test Results

1. Home Page 

    ![Home Page Wave Test](docs/testing/wave-testing.png)

2. 404 Page

    ![404 Page Wave Test](docs/testing/wave-testing-404.png)

### Code Validation

#### W3C Markup Validation Service

1. Home Page validation:
    
    - ![Home Page Validation](docs/testing/home-page-validation.png)

2. 404 Page validation:
    
    - ![404 Page Validation](docs/testing/home-page-validation.png)

#### W3C CSS Validation Service

![CSS Validation Screenshot](docs/testing/css-validation.png)

#### JSHint validation

![JSHint screenshot](docs/testing/jshint.png)

### Browser Testing 

 - I conducted browser tests using four different browsers to check for visual discrepancies and responsive design. All tests were conducted on a macbook.

 |    Browser     |        Version         |      Visual Discrepancies     |                   Responsive Design                     |       Screenshot       |
 |----------------|------------------------|-------------------------------|---------------------------------------------------------|---------------|
 |   Google       |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |       ![Google Screenshot](docs/testing/google-screenshot.png)        |
 |   Edge         |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |        ![Edge Screenshot](docs/testing/edge-screenshot.png)       |
 |   Firefox        |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |      ![Firefox Screenshot](docs/testing/firefox-screenshot.png)         |
 |   Safari       |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |      ![Safari Screenshot](docs/testing/safari-screenshot.png)         |
---

### Responsiveness

Examples of responsiveness are created by using Google's Dev Tools to simulate devices of various sizes.

1. **Home Page**

<details><summary>Click to reveal images</summary>

- Iphone 14 Pro Max

     ![Home Page Mobile](docs/testing/home-page-iphone.png)

- Ipad

     ![Home Page Tablet](docs/testing/home-page-ipad.png)

- Desktop 

    ![Home Page Desktop](docs/testing/google-screenshot.png)

</details>

2. **404 Page**

<details><summary>Click to reveal images</summary>

- Iphone 14 Pro Max

     ![404 Page Mobile](docs/testing/404-page-mobile.png)

- Ipad

     ![404 Page Tablet](docs/testing/404-page-ipad.png)

- Desktop

    ![404 Page Desktop](docs/testing/404-page-desktop.png)

</details>

### Manual Testing

| **Feature being tested** | **Steps**                                                  | **Expected outcome**                                                          | **Pass/Fail** | **Screenshot**                                                    |
|--------------------------|------------------------------------------------------------|-------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------|
| Rules button - modal     | Click on rules button                                      | When clicked the rules modal should appear and display all game rules to user | Pass          |  ![Rules modal screenshot](docs/testing/rules-modal-test.png)     |
| Start Game button        | Click on start game button                                 | Game should start running, numbers should appear and timer should begin.      | Pass          |  ![Start game screenshot](docs/testing/start-game-test.png)       |
| Select number button     | Click on number button when game is running                | Number should be highlighted upon click                                       | Pass          |  ![Number highlight screenshot](docs/testing/number-test.png)     |
| Deselect number button   | Click on number that was already selected                  | Number should lose highlight and return to normal                             | Pass          |  ![Number Deselect screenshot](docs/testing/number2-test.png)     |
| Select operator button   | Click on operator after first number is chosen             | Operator should be highlighted                                                | Pass          |  ![operator highlight screenshot](docs/testing/operator-test.png) |
| Perform calculation      | Click a number, then an operator and final number          | Two numbers should calculate                                                  | Pass          |  ![Calculation screenshot](docs/testing/calculation-test.png)     |
| Invalid Calculation      | Create an invalid expression by creating a negative number | Error modal should pop up with your result                                    | Pass          |  ![Invalid calculation screenshot](docs/testing/invalid-test.png) |
| Score a point            | Create 24 in the game                                      | Score counter should increment by 1                                           | Pass          | See video                                                         |
| Undo button              | Click undo button                                          | Numbers should revert back to previous version                                | Pass          | See video                                                         |
| Quit game button         | Click on quit game button while game is running            | Page should refresh                                                           | Pass          | See video                                                         |
| End game modal           | Play the game until timer reaches 0s.                      | Modal should appear when game timer ends                                      | Pass          |  ![End game modal screenshot](docs/testing/game-end-test.png)     |

#### Manual Testing Video

Here is a short video, showing the game in action.

[![Watch the video](docs/testing/thumbnail.png)](docs/testing/screen-recording.mov)

## Bugs

### Fixed bugs

1. When opening and closing my bootstrap modals, I was receiving an error on my console. This was due to the bootstrap modal coming with an aria-hidden class. To fix the issue after discussing it with my mentor, he advised me to just remove the aria-hidden class altogether.

2. When validating my CSS I received multiple warnings about a 'Trailing slash', these appeared due to formatting my code using 'Prettier'. To combat this I manually removed all the trailing slashes.

3. I had an issue where when testing my website on certain mobile devices, the lower buttons became inaccessible to the user. To combat this I used a media query targeting the height of 736px and made the necessary design changes to accomodate these shorter mobile devices.

### Remaining bugs

 - No known remaining bugs at this point in time.

## Deployment

### Version Control

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘S-and-S-care-mp1’.

The following git commands were used throughout development to push code to the remote repo:

```git add .``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully. 

The live link can be found here - https://alexthoma5.github.io/S-and-S-care-mp1/index.html

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now of been cloned on your local machine for use.

## Credits

### Acknowledgment
