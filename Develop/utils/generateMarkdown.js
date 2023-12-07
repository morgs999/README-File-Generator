
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)

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

function renderLicenseSection(license) {
  if (license == []) {
    return '';
  } else {
    return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
  }
}


function generateMarkdown(answers) {
  let licenseGen = renderLicenseSection(answers.license);
  return `
  # ${answers.title.toUpperCase()}
  
  ### Table of Contents

  ## Description
  ${answers.description}

  ## Installation
  [!IMPORTANT]\n
  ${answers.installation}

  ## Usage
  [!TIP]\n
  ${answers.usage}

  ## Contribution Guidelines
  ${answers.contribute}

  ## Test Instructions
  [!NOTE]\n
  ${answers.test}

  ## License
  ${licenseGen}
  
  ## Contact for Questions
  You can visit my [Github page](https://www.github.com/${answers.username}).\n
  Or you can [Email](mailto:${answers.email}) me.
`
}

module.exports = generateMarkdown;
