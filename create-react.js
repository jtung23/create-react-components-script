const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([ 
    { // prompts with list asking for class or functional (or cancel)
        type: "list",
        name: "method",
        message: "What type of component?",
        choices: ['class', 'functional', 'cancel']
    },
    { // input name of component
        type: "input",
        name: "name",
        message: "Name of component?"
    }
]).then(res => {
    if (res.name === '' || res.method === 'cancel') { // option to cancel component creation
        console.log('cancelled')
        return
    }

    // class component template
    const classText = `import React, {Component} from 'react'

class ${res.name} extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            
            </div>
        )    
    }
}
export default ${res.name}`

    // functional component template
    const functionalText = `import React from 'react'

const ${res.name} = props => 
    <div>

    </div>

export default ${res.name}`

    if (!fs.existsSync(res.name)) {
        fs.mkdirSync(res.name) // creates folder
        // creates index.js in folder with export default of component file
        fs.writeFileSync(`${res.name}/index.js`, `export {default} from './${res.name}'`) 
        // creates component file in folder where template is chosen based on the method chosen in inquirer prompt
        fs.writeFileSync(`${res.name}/${res.name}.js`, res.method === "class" ? classText: functionalText)

    } 
})


