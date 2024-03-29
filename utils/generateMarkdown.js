

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return '';
  }
  else if (license === "GNU GPLv3" ) {
    return `[![License:](https://img.shields.io/badge/License-${license.replace("GNU ","")}-blue.svg)](${renderLicenseLink(license)})`;
  }
  else if (license === "MIT"){
    return `[![License:](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`;
  }
  else if (license === "Apache 2.0"){
    return `[![License:](https://img.shields.io/badge/License-${license.replace(" ", "%20")}-blue.svg)](${renderLicenseLink(license)})`;
  }
  else if(license === "Mozilla 2.0"){
    return `[![License:](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](${renderLicenseLink(license)})`;
  }

  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license") {
    return '';
  } else if (license === "Apache 2.0") {
    return `
    https://opensource.org/licenses/${license.replace(" " , "-") }
  `;
  }
  else if (license === "GNU GPLv3"){
    return `https://opensource.org/licenses/${license.replace("GNU ","")}`
  }
  else if (license === "MIT"){
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "Mozilla 2.0") {
    return `https://opensource.org/licenses/MPL-2.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return '';
} else {
  return `   

  ${renderLicenseBadge(license)}

  <br/>

  `
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
      result += `\n >*<a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS">CSS</a>`
      break
      case "JQuery" :
      result += `\n >* <a href="https://api.jquery.com/">JQUERY</a>`
      break
      case "BootStrap" :
      result += `\n >* <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">BootStrap</a>`
      break
      case "Node JS" :
      result += `\n >* <a href="https://nodejs.dev/learn">Node JS</a>`
      break
      case "ES6" :
      result += `\n >* <a href="https://www.w3schools.com/js/js_es6.asp">ES6</a>`
      break
  }
    
  });
  return result
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
  
  <br/>
  <br/>
  
  <div align="center">
  
  <h1 align="center">${data.project}</h1>
  <br/>
  <a href="#about"><strong>Explore the screenshots »</strong></a>
  <br/>
  <br/>
  
  </div>
  
  
  
  <div align="center">
  <br/>
  
  [![code with hearth by GITHUB_USERNAME](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-GITHUB_${data.username}-ff1414.svg?style=flat-square)](${data.link})${renderLicenseBadge(data.license)}
    
  </div>
  
  <br/>
  
  <details open="open">
  <summary>Table of Contents</summary>
  
  - [About](#about)
  - [Built With](#built-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Authors & contributors](#authors--contributors)
  - [Acknowledgements](#Acknowledgements)
  - [License](#License) 
  
  </details>  
  
  <br/>
  
  ## About
  ---

  <br/>
  ${data.description}
  
  <br/>
  <br/>
  <details>
  <summary>Usage Screenshots and Demo</summary>
  <br/> 
  
  ----------------------------------------------------------------Home Page 
  ${data.usage}
  
  </details>
  
  <br/>
  <br/>
  
  
  ## Built With
  ---

  <br/>
  
  ${renderLanguages(data.languages)}
  
  
  <br/>
  <br/>
  
  ##  Installation
  ---

  <br/>
  
  ${data.installation}

  <br/>
  <br/>
  
  
  ##  Authors & contributors
  ---

  <br/>
   
  ${data.contributors}
  
  <br/>
  <br/>
  
  ##   Acknowledgements
  ---

  <br/>
  
  ${data.Acknowledgements}
  ---

  <br/>
  <br/>
  
  ##  License
  ---

  ${renderLicenseSection(data.license)}
  
  <a href="https://github.com/${data.username}/${data.project}/issues/2">For any Question please click here...</a>
  `;
}
  
  module.exports = generateMarkdown;

