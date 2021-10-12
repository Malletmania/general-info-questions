///inquirer to promt question (name, location, bio, LinkedIn URL, and GitHub URL)
// require inquirer
// require fs (writing part)
// require writing
const {writeFile} = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},
{
    type: 'input',
    message: 'Where are you currently located?',
    name: 'location'
},
{
    type: 'input',
    message: 'Tell us about yourself.',
    name: 'bio'
},
{
    type: 'input',
    message: 'Please provide a link to your Linkedin',
    name: 'linkedin'
},
{
    type: 'input',
    message: 'Please provide a link to your Github',
    name: 'github'
}]).then(test => console.log(test));


// .then( resp => {
//     const textMessage = `
//     Here are the answers to the questions:
//     Name: ${resp.name}
//     Languages: ${JSON.stringify(resp.languages) }
//     method: ${resp.method}
//     `
//     fs.writeFile("result.txt", textMessage, err => {
//         err ? console.log("trouble") : console.log("cool")
//     })
// });

//TODO psudo code
//needed questions for function
//project title
//discription, installation, usage, contribution guidelines, test instructions
//license list, will be a function with options where they have to choose one, referance mini project for details.
//enter in Github username
//enter email Address
