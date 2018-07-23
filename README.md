# Create React Components Script
A node script to easily create both Functional and Class React components.

## About
While building up my React projects I found myself creating the same directory structure for all the new components I would create.
Each component consisted of a folder named the same as the component with two files, the index.js and the actual component with the name of the component as the name of the file. So this node script when run, will 

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
2. Run the script with node followed by *class* or *component* and the name of the component
`node create-react.js class Landing
// or
 node create-react.js component Button
`
3. With Ubuntu 16.04 to set up executable (this works for my computer)
    * Move `create-react` (not the .js file) to /usr/bin/
        * (example) `sudo mv create-react /usr/bin/
    * Restart terminal and test with command in #2 except remove "node" and ".js"

4. To set up executable for other systems
    * `npm install -g pkg`
        * This package allows you to create the exectuable file for linux, macos, and windows

## Files
```javascript
// index.js
export {default} from './${name}'
```

```javascript
// name.js if functional component
import React from 'react'

const ${name} = props => 
    <div>

    </div>

export default ${name}
```

```javascript
// name.js if class component
import React, {Component} from 'react'

class ${name} extends Component {
    render() {
        return (
        )    
    }
}
export default ${name}
```
