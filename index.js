// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let generateMarkdown= require('./02-Challenge/Develop/utils/generateMarkdown')
// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = 'style.css';


// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Give your readme a project title name:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a description to your README:',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Add a table of contents to your README:',
      //MUST BE IN LINKS <a> AND NAVIGATE TO THE CORRESPONDING SECTION OF THE README
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Add any installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Add any usage info/ screenshots:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Declare license type:',
      choices: ['MIT','Apache','BSD']
      //HOW TO ADD A BADGE?
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add any contributors/ contributions:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Add any test info/ screenshots:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Add your github web address to insert as a link:'
    //USE AS AN ANCHOR <a> TAG
    },
    {
      type: 'input',
      name: 'email',
      message: 'Add your email address to insert as another link:'
      //USE AS AN ANCHOR <a> TAG
    }
  ])
  .then((answers)=>{
    var stringData = generateMarkdown(answers)
    saveReadMe (stringData)
    console.log(stringData);
  })


  function saveReadMe(data){
    fs.appendFileSync("./output/README.md", data, (err)=>{
      if (err) console.log(err);
      console.log("readme generated successfully!")
    })
  }


// .then((answers)=>{
//     let fileName = `${answers.description}.json` 
//     fs.appendFile(`${answers.description}.html`,`<h1>${answers.description}</h1>`,(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("worked")
    
// })


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





//Elements of a README file 

//Project Title - <h1>
//Description - <ul> and <li>
//Table of contents - <a>
//installation - <p>
//usage - <p> and <img>
//license - <li>
//contributing - <li>
//tests - <li>
//questions - <a>