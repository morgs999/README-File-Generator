const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your README to be? '
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Please enter a description for your README file: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app? ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your app? ',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to your code? ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can someone test your code? ',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'Createive Commons', 'Mozilla', 'Hippocratic']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username? ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
    }
]

// inquirer.prompt(questions).then(answers => {
//     const gen = generateMarkdown(answers);
//     fs.writeFile('README.md', gen, (err) =>
//         err ? console.log(err) : console.log("Your README has been written!"));
// })

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => {
        err ? console.log(err) : 
        console.log("Your README has been written!");
    })
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions).then(answers => 
        {const ReadMe = generateMarkdown(answers);
        writeToFile("README.md", ReadMe);
    })
}

// Function call to initialize app
init();
