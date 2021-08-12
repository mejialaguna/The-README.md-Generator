// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path"); // help us manipulate file path
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input


const questions = [
        {          
          type: 'input',
          name: 'title',
          message: 'What is the name of your project?',
          validate: nameInput => {
            if(nameInput){
              return true;
            } else {
              console.log("you need a name for you project!!!");
              return false;
            }
          }
            },
        {
          type: 'input',
          name: 'description',
          message: 'Provide description of your project (Required)',
          validate: nameInput => {
            if(nameInput){
              return true;
            } else {
              console.log("you need to provide a discription of your project is very important");
              return false;
            }
          }
        },
        {
            type: "input",
            name: "installation",
            message: "Please fallow instruction on how to installed",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else {
                    console.log("please provide direction on how to properly install this app.");
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "usage",
            message: "please add a way to use this app by using pictures or short Gift",
            validate :  nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('its important to add a way to show how your app works to helo other users');
                    return false;
                }
            }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ["JavaScript", "HTML", "CSS", "ES6", "JQuery", "BootStrap", "node" ]
        },
        {
            type: "input",
            name: "contributors",
            message: "please add the name of all the Authors & contributors to this project",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("is important to mention all Authors & contributors names");
                    return false
                }
            }
        },
        {
          type: "input",
          name: "link",
          message: "Enter the GitHub link to your project. (required)",
          validate: nameInput => {
            if(nameInput){
              return true;
            } else {
              console.log("you need to provide your github link");
              return false;
            }
          }
        },        
        {
            type: "checkbox",
            name: "license type",
            message: "what type of license would you like?",
            choices: ["Mozilla Public license", "Apache License", "MIT License", "GNU LGPLv3"],
            validate: choices => {
                if(choices){
                    return true;
                } else {
                    console.log("please pick one of the licences!!!");
                    return false;
                }
            }            
        },        
        {
          type: "confirm",
          name: "ConfirmAddProject",
          message: "would you like to enter another project?",
          default: false 
        }
     
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
return fs.writeFileSync(path.join(__dirname, "/yourReadme/README.md"), data )
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( answers => {
        writeToFile(`${}`)
    } )
}

// Function call to initialize app
init();
