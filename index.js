// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
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
        choices: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CC', 'CC0-1.0', 'ECL-2.0', 'EPL-1.0', 'EPL-2.0', 'EUPL-1.1', 'GPL-2.0', 'GPL-3.0', 'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3c', 'MS-PL', 'MS-RL', 'MIT', 'MPL-2.0', 'NCSA', 'OFL-1.1', 'OSL-3.0', 'PostgreSQL', 'Unlicense', 'Zlib', '']
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README.md generated successfully!');
    });
}

// TODO: Create a function to initialize app
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
