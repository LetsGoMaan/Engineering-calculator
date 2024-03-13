# Engineering calculator

Task: (https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

Deploy: (https://letsgomaan.github.io/Engineering-calculator/)

How to run the app:

1. Clone this repo:

```
$git clone https://github.com/LetsGoMaan/Engineering-calculator.git
```

2. Open the directory in code editor
3. Run `$ npm install` to install all the dependencies
4. Run app with `$ npm start` to run the app in your browser

## Additional scripts
- `$ npm run test` runs the tests
- `$ npm run build` builds the app for production to the `dist` folder

## Folders structure
src                              # Contains all logic of the project

    styles                       # Holds .css files with app styles
    
        main.css
        
    Calculator.js                # Class calculator
    
    CommandSelector.js           # Holds all mathematical operations
    
    CommandSelector.test.js      # Tests
    
    contains.js                  # Holds all the constants using in the app
    
    errorHandler.js              # Error handler to prevent app errors
    
    index.js                     # Contains all event listeners
    
    index.html                # Main HTML file with document markup

