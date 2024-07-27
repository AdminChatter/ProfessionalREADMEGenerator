// Packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README.md generated successfully!');
    });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response);
            writeToFile(`./output/README.md`, markdown);
        })
        .catch((err) => {
            console.error(err);
        });
}

// Function call to initialize app
init();
