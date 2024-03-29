// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path"); // help us manipulate file path
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input


const questions = [
        {          
          type: 'input',
          name: 'project',
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
            message: "Instruction on how to installed",
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
                    console.log('its important to add a way to show how your app works to help other users');
                    return false;
                }
            }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ["JavaScript", "HTML", "CSS", "ES6", "JQuery", "BootStrap", "Node,js" ]
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
          type: "input",
          name: "username",
          message: "please enter your GitHub username. (required)",
          validate : nameInput => {
            if (nameInput){
              return true;
            } else{
              console.log("please add your user name ")
              return false;
            }
          }
        },
        // {
        //   type: "input",
        //   name: "clone",
        //   message: "please enter HTTPS CLONE link here. (required)",
        //   validate : nameInput => {
        //     if (nameInput){
        //       return true;
        //     } else{
        //       console.log("please add your clone link")
        //       return false;
        //     }
        //   } 
        // },        
        {
            type: "list",
            name: "license",
            message: "what type of license would you like?",
            choices: ["Mozilla 2.0", "Apache 2.0", "MIT", "GNU GPLv3", "No license"],
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
          name: "confirmAcknowledgements",
          message: "would you like add any Acknowledgements?",
          default: true
        },
        {
            type: "input",
            name: "Acknowledgements",
            message: "if you would like to add a Special thanks to someone in specific",
            when: ({confirmAcknowledgements}) => {
                if (confirmAcknowledgements){
                    return true;
                } else {
                    return false;
                }
            }
        }
     
    ];

// TODO: Create a function to write README file
function writeToFile(fileName ,data) {
return fs.writeFileSync(path.join(__dirname, "/dist/README.md"), (fileName , data)  )
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeToFile("README.md", generateMarkdown(answers) )
        console.log('readme created');
    } )
    .catch( err => {
      console.log(err);
    })
         
}

// // Function call to initialize app
init();
