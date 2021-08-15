// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return '';
  } else {
    return `
    [![License](https://img.shields.io/badge/License-${license}-blue.svg)]
  `;
  }

  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license") {
    return '';
  } else if (license === "apache") {
    return `
    https://opensource.org/licenses/${license}
  `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return '';
} else {
  return ` ## License ${license}`
}
}

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

<h1 align="center"> ${data.project}</h1>


<div align="center">
<br />

// [![code with hearth by GITHUB_USERNAME](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-GITHUB_${data.username}-ff1414.svg?style=flat-square)](${data.link})
  ![PRs welcome] ${renderLicenseBadge(data.license)} 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
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

> ${data.Acknowledgements}


`;
}

module.exports = generateMarkdown;

