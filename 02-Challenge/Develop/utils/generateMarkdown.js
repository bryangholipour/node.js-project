// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ""
  if (license==="MIT"){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license==="Apache"){
    licenseBadge="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (licesne==="BSD"){
    licenseBadge="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${renderLicenseBadge(data.license)}

  # Title
  # ${data.projectTitle}

  ## Table Of Contents
 
  # [description](#description)
  # [installation](#installation)
  # [usage](#usage)
  # [license](#license)
  # [contributions](#contributions)
  # [testing](#testing)
  # [contact](#contact)

  ## Description
  ${data.description}

  ## License
  # ${data.license}

  ## Installation
  # ${data.installation}

  ## Usage
  # ${data.usage}

  ## Contributions
  # ${data.contributing}

  ## Testing
  # ${data.tests}

  ## Contact
  # ${data.github}
  # ${data.email}
`;
}

module.exports = generateMarkdown;
