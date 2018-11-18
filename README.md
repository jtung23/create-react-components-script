# Create React Components Script
A node script to easily create both Functional and Class React components.

## About
While building up my React projects I found myself creating the same directory structure for all the new components I would create.
Each component consisted of a folder named the same as the component with two files, the index.js and the actual component with the name of the component as the name of the file. So this node script when run, will use inquirer to prompt and create said files for you.

```
project
│   README.md
│   ...  
│
└───src
│   │   App.js
│   │   ...
│   │
│   └───components
│       │____Button
|       |   |__ Button.js
|       |   |__ index.js
│       │____NavBar
|       |   |____NavBar.js
|       |   |____index.js
│       │   
│   └───pages
│       │   Landing.js
|       |   |____Landing.js
|       |   |____index.js
│       │   Search.js
|       |   |____Search.js
|       |   |____index.js
│       │   ...

```
## Instructions

1. Clone this project and cd into it

`git clone git@github.com:jtung23/create-react-components-script.git

cd create-react-components-script
`
2. Run
    `node create-react.js`
3. With Ubuntu 16.04+ to set up executable (this works for my computer)
    * Move `react-component` (not the .js file) to /usr/bin/
        * (example) `sudo mv react-component /usr/bin/`
    * Restart terminal and test with command, `react-component`
    * Will prompt for class/function component and name

4. To set up executable for other systems
    * `npm install -g pkg`
        * This package allows you to create the exectuable file for linux, macos, and windows