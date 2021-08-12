// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}
// >* 
// >* 

// >* 
// >* <a href="https://materializecss.com/">MATERIALIZE</a>
// >* <a href="https://en.wikipedia.org/wiki/Wikipedia:API">WIKIPIDIA API</a>
// >* <a href= "https://pokeapi.co/">POKE API</a>

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// "JavaScript", "HTML", "CSS", "ES6", "JQuery", "BootStrap", "node"
function renderLanguages(array){
  let result = "";
  array.forEach(element => {
    switch(element){
      case "JavaScript" :
      result += `\n >* <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API">JAVA SCRIPT</a>`
      break
      case "HTML" :
      result += `\n >* <a href="https://www.w3schools.com/html/default.asp">HTML</a>`
      break
      case "CSS" :
      result += `>*<a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS">CSS</a>`
      break
      case "JQuery" :
      result += `>* <a href="https://api.jquery.com/">JQUERY</a>`
      break
      case "BootStrap" :
      result += `>* <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">BootStrap</a>`
      break
      case "Node JS" :
      result += `>* <a href="https://nodejs.dev/learn">Node JS</a>`
      break
      case "ES6" :
      result += `>* <a href="https://www.w3schools.com/js/js_es6.asp">ES6</a>`
      break
  }
    
  });
  return result
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


<div align="center">
<br />

  ![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)
  [![code with hearth by GITHUB_USERNAME](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-GITHUB_${data.link}-ff1414.svg?style=flat-square)](${data.link})

</div>

<br>

  <details open="open">
<summary>Table of Contents</summary>

- [About](#about)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Authors & contributors](#authors--contributors)


</details>


---
<br>

## About
<br>
${data.description}

<br>
<br>
<details>
<summary>Usage Screenshots and Demo</summary>
<br>


Home Page 
${data.usage}

</details>
<br>
<br>

## Built With
<br>

${renderLanguages(data.languages)}
<br>
<br>

##  Installation
<br>

${data.installation}

<br>
<br>


##  Authors & contributors
<br>

First off, thanks for taking the time to check out this app! Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.
<br>

> 1- ${data.contributors}

<br>
<br>

##   Acknowledgements
<br>

> A big thanks to those API who helped us make this app possible and to software libraries that make all our coding less time consuming.<br><br> 
> Last but not least important , an enormous thanks and respect to all those who helped us on this projects [ T.A ].
<br>

`;
}

module.exports = generateMarkdown;
