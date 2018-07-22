const fs = require('fs')
const method = process.argv[2]
const name = process.argv[3]
if (method !== "class" && method !== "component") {
    console.log(method)
    console.log('Format: createReact class || component name')
    return
}

const classText = `import React, {Component} from 'react'

class ${name} extends Component {
    render() {
        return (
        )    
    }
}
export default ${name}`

const componentText = `import React from 'react'

const ${name} = props => 
    <div>

    </div>

export default ${name}`

if (!fs.existsSync(name)) {
    fs.mkdirSync(name)
    fs.writeFileSync(`${name}/index.js`, `export {default} from './${name}'`)
    fs.writeFileSync(`${name}/${name}.js`, method === "class" ? classText: componentText)

}