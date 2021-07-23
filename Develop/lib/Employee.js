// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your name?',
        },
        {
            type: 'input',
            message: 'what is your id?'
        },
        {
            type: 'input',
            message: 'what is your email?'
        }
    ])
    .then((Response) =>
    Response.confirm === Response.password
    ? console.log('success')
    : console.log('person added')
    )