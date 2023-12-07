// Available Licenses, with Badges and Links
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)


// Matches License and Renders Badge
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license == 'Creative Commons') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]';
  } else if (license == 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if (license == 'Hippocratic') {
    return '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]';
  } else {
    return '';
  }
}

// Matches License and Renders Link to said License
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license == 'Creative Commons') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license == 'Mozilla') {
    return '(https://opensource.org/licenses/MPL-2.0)';
  } else if (license == 'Hippocratic') {
    return '(https://firstdonoharm.dev)';
  } else {
    return '';
  }
}

// Combines License Badge and Link into Template Literal
function renderLicenseSection(license) {
  if (license == []) {
    return '';
  } else {
    return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
  }
}

// Generates all text and links for README.md
function generateMarkdown(answers) {
  let licenseGen = renderLicenseSection(answers.license);
  return `
  # ${answers.title.toUpperCase()}
  
  ### Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing-guidelines)
  * [Testing](#test-instructions)
  * [License](#license)
  * [Contact](#contact)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution Guidelines
  ${answers.contribute}

  ## Test Instructions
  ${answers.test}

  ## License
  ${licenseGen}
  
  ## Contact for Questions
  You can visit my [Github page](https://www.github.com/${answers.username}).\n
  Or you can [Email](mailto:${answers.email}) me.
`
}

// Export for index.js
module.exports = generateMarkdown;
