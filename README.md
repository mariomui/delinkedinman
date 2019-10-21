# delinkedinman
Sample reach project utilizing a guessing game.
https://www.figma.com/file/HjvX2PLt5FSch39jNReD1f/LinkedMan
UI pre-work

## Section: Running the Repo
stack: mongo, express, mongoose, React
### step 0
* download [GitHub - mariomui/mongo-db-variations: different variations of a mongo build](https://github.com/mariomui/mongo-db-variations)
  * clone the repo and run `npm start <instance name> <dbport>`
    * this will start a docker instance of mongodb with the names you specify. (mine instance is called 'dlm')
    * `npm start dlm 27018`
    * `docker exec -it dlm bash`
      * (you'll see your collections in there when your run mongo);

### step 1 Setup your database envs.
in the root of app, set up a .env file that contains
  * DB_PORT ....
  * DB_NAME ....
  * [ ] <strike>DB_CONNECTION_STRING</strike>
### step 2 Setup Your server envs
`npm run dev`
* development server listens on 9002. 
  * `.env => DEV_PORT=<custom port>`
* Your code will liveReload there but not HMR.
* Productions server listens on 4000
  * `.env => EXPRESS_PORT=<custom port no>`

### step 3 Functional Testing
* npm run jest on the root app to test functional tests
* [ ] <strike> npm run jest to run enzyme smoke tests</strike>

## Step 4 Production Testing (from root of app)
* `npm run productiontest`
  * You will recieve a live url to test the site on.
  * remember to run `npm run build:only` for the latest version of the app.

**development should be done with npm run begin and on port 9000.

Do not copy over above
---
## Design Docs
---
### DelinkedMan: A Word guessing game
### features:

* 1 v cpu
* 1 letter at a time
* the guesser has six guesses.
* secret: jaaacob
  * visual `******`
  * guess: `'a' -> *aaa***`
  * state: `jaaa*ob`
    * guess: `'c' -> 'jaaacob' => win` 
  * state2: '******b`
    * guess#6: `x -> 'jaaac*b' => lose` 
  
#### Preliminary Behavior/Features
- Form the secret
  - At the **start** of the game the **computer**/secret-keeper will choose a **dictionary** word
- Set the lose conditions
  - The guesser loses the game if they guess 6 letters that are not in the secret word
- Set the win conditions
  - The guesser wins the game if they guess all letters in the secret word correctly and have not already lost the game per the conditions above

## Tools to use.
| Need | Solution | Tech
| - | -| -|
|Form secret |api | Express | 
| Store the secret | database? | mongodb | 
| Session | extra| quickFbase or rollout | 
| | | | 
| | | | 
| | | | 
| | | | 
| | | | 
| | | | 
| | | | 
Gotchas
  * guesses can't be whole words or _
## Conditions: Basic App
* GENERATE WORD
  * API REQUEST TO DICT.COM 
  * ie "formula"
* GET STAGES // the lenght of the word
  * stage: `secret length + 1`
  * stateOfGame `bool` // has the game started?
  * secretword *eh secure*
  * initial state
    * ```js
      state = {
        currentStage: 7,
        hasGameStarted: true
        secretWord: "formula"
        currentWordView: "formula" []
      }
      ```
* guessing wrong
  * **decreases state**
    * ```
      state = {
        currentStage: 6
      }
      ```
  * **checkLose condtions**
* guessing right
  * **updates currentWordView**
  * **updates the view **
    * ```
      state = {
        currentStage: 7
        secretWord: formula, 
        currentWordView: formul_
      }
      ```
* Set the lose conditions
    * ```
      state = {
      currentStage: 0
      }
      ```
    * The user hsas 6 guesses
      * at current stage 0, lose condition.
* Set the win conditions
    * ```
      state = {
      currentStage: 0
      secretWord: "formula"
      currentWordView: [______]
      lettersRemaining: 0;
      }
      ```
    * if lettersRemaining = 0, win. 
* ## Actions
  * User submits a guess `submitGuess(guess) => null` 
    * <strike>validateGuess(guess) => bool </strike>
      * c:false doNothing.
    * [ ] Get Secret From State
    * Compare guess to secret `compareGuess(guess) => bool`
      * c:true
        * remove all guesses from secret `removeGuessFromSecret(secret) => string`
    * Check win conditions *
      * c: true
        * display win page.
      * d: false
        * check lose conditions
    * Check lose conditions
      
* ##Todos
  * currentWordView {char[]} 

## Conditions: Data
* GET method
  * ``[](http://app.linkedin-reach.io/words?difficulty=9)``
    * this gets you 16000 entries
  * difficulty (int) S{1...10}
  * minLength  s{0...N}
    * each word has a min length
  * maxLength
    * each word has a max of whatever
  * count -> how many items.
  * start (every api call calls from the 0th)
    * we'll need a different start each time depending on the count.
* C1: difficulty high, maxlength too small.
* C2: offset
  * game generates a word that isn't part of
  * returns a [], should reload, and get another word.
    * in this case, this is probably not worth 
* C3: user keeps generating the same words.
* ## Actions
  * [ ] Math random number generator 
    * [ ] difficulty 2,10
      * [ ] easy is 2
      * [ ] medium is 4
      * [ ] hard is 8
    * [ ] minLength (5,8) 
    * [ ] maxLength (10...14)
    * [ ] start (1 - 16000)
    * [ ] count of about 30;
  * [ ] getWordgenerator(diff, count, start, maxRetries, default);
    * [ ] get lenght of words in dictionary for that difficulty level, count of 1000, and start level
      * check local storage if this diff/count/start has been cached.
      * check database if this difficulty/count/start has been cached.
      * otherwise grab this from API call
      * if the response is empty for maxRetries,
        * default word is 'asparagus';
    * [ ] start  1... totallength - 30; (any negavite number is 0);
## Conditions: UI
  * Responsiveness -> Material UI
  * Icons
  * occurrences of the guessed letter are shown
  * unknown letters are hidden.
  * Number of guesses remaining is displayed
  * List of incorrect guesses are displayed
  * leaderboard
  * gametype
  * ## Actions 
  * [ ] Material UI
  * [ ] theNounProject
  * [ ] wireframe
    * [ ] figma
  * [ ] settings
  * [ ] 


# problems
Deciding to do webpack and material ui from scratch was not great for the timeline. Both seem to have some minor changes to their documentation. My postman hits my endpoints just fine but it I cant ssem to do a simple axios call on a button.