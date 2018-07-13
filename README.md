# AutoRecall

## Description:
This static React app is a memory game where the user is required to click on a series of 12 images without clicking any image twice. The gae starts with prompting the user to start clicking on the images. Each time the user clicks on an image that has not been clicked in the current game, the score displayed at the top of the page increases. Note that the color of the score box changes as user contionues to sucessfully proceed in the game. The game automatically resets if an image is clicked twice. and the score and the score box color is reset as well. One aspect of this game that makes it challengi is that the loication of the images displayed as cards shuffles at every click. 

![top Page](public/img/img1.png)

With all the functionallity given above the app does the following: 
1. Imports a `JSON` file to read the source location ids and clicked status of image files displayed in the page. These files are located in `src/public/img` folder.
2. The `App.js` stateful component imports the `JSON` file and assigns it to its state together with a score and a message to be displayed on each click.
2. The `CarBox` stateless component (child of `<App/>`) is passed a `check` function and which modifies the state of its parent based on the status of being clicked. Based on this check the score is incremented and the message (`msg`) is updated to "Well Done" if the image has not been clicked. The score is reset to zero together with the message informing user the image has previously been clicked and the color of the score box (`<Jumbo/>` child of `<App/>`) if the image has already been clicked in this game.
3. The color update of the score box is carried out by passing a score property to `<Jumbo/>` stateless component which calculates and RGB value for the score text and score box background based on the value of the score. 

All the afforementioned updates are carried out realtime making use of reacts core virtual DOM functionality. Hence, The page is dynamic and no reloading of the page takes place. 

![bottom Page](public/img/img2.png)

## Technologies & Dependencies
### JavaScript:
Following NPM packages are used and required for the app to execute propoerly:
* React JS and its dependencies (i.e Babel, JSX, etc...)

### Frontend Framework & Technologies:
* Bootsrap 4.0
* Google Fonts
* Google Material Icons

## How it works
The gif below shows how the app works.

![App view](public/img/gif1.gif)
