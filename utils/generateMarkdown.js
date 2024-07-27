// Description: This file contains the generateMarkdown function that generates the markdown for the README file. The function takes in the data object from the user's responses to the inquirer prompts and returns a markdown template literal with the user's input interpolated into the template. The function also includes helper functions to generate the license badge, link, and section based on the user's selected license.

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // switch (license) {
  //   case "MIT":
  //     return "![License: MIT](https://img.shields.io/badge/License-MIT-blue)";
  //   case "AFL-3.0":
  //     return "![License: AFL 3.0](https://img.shields.io/badge/License-AFL--3.0-blue)";
  //   case "Apache-2.0":
  //     return "![License: Apache](https://img.shields.io/badge/License-Apache--2.0-blue)";
  //   case "Artistic-2.0":
  //     return "![License: Artistic](https://img.shields.io/badge/License-Artistic--2.0-blue)";
  //   case "BSL-1.0":
  //     return "![License: BSL 1.0](https://img.shields.io/badge/License-BSL--1.0-blue)";
  //   case "BSD-2-Clause":
  //     return "![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue)";
  //   case "BSD-3-Clause":
  //     return "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD--3--Clause-blue)";
  //   case "CC":
  //     return "![License: Creative Commons](https://img.shields.io/badge/License-CC-blue)";
  //   case "CC0-1.0":
  //     return "![License: CC0 1.0](https://img.shields.io/badge/License-CC0--1.0-blue)";
  //   case "ECL-2.0":
  //     return "![License: ECL 2.0](https://img.shields.io/badge/License-ECL--2.0-blue)";
  //   case "EPL-1.0":
  //     return "![License: EPL 1.0](https://img.shields.io/badge/License-EPL--1.0-blue)";
  //   case "EPL-2.0":
  //     return "![License: EPL 2.0](https://img.shields.io/badge/License-EPL--2.0-blue)";
  //   case "EUPL-1.1":
  //     return "![License: EUPL 1.1](https://img.shields.io/badge/License-EUPL--1.1-blue)";
  //   case "GPL-2.0":
  //     return "![License: GPL 2.0](https://img.shields.io/badge/License-GPL--2.0-blue)";
  //   case "GPL-3.0":
  //     return "![License: GPL 3.0](https://img.shields.io/badge/License-GPL--3.0-blue)";
  //   case "LGPL-2.1":
  //     return "![License: LGPL 2.1](https://img.shields.io/badge/License-LGPL--2.1-blue)";
  //   case "LGPL-3.0":
  //     return "![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL--3.0-blue)";
  //   case "ISC":
  //     return "![License: ISC](https://img.shields.io/badge/License-ISC-blue)";
  //   case "LPPL-1.3c":
  //     return "![License: LPPL 1.3c](https://img.shields.io/badge/License-LPPL--1.3c-blue)";
  //   case "MS-PL":
  //     return "![License: MS-PL](https://img.shields.io/badge/License-MS--PL-blue)";
  //   case "MS-RL":
  //     return "![License: MS-RL](https://img.shields.io/badge/License-MS--RL-blue)";
  //   case "MPL-2.0":
  //     return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL--2.0-blue)";
  //   case "NCSA":
  //     return "![License: NCSA](https://img.shields.io/badge/License-NCSA-blue)";
  //   case "OFL-1.1":
  //     return "![License: OFL 1.1](https://img.shields.io/badge/License-OFL--1.1-blue)";
  //   case "OSL-3.0":
  //     return "![License: OSL 3.0](https://img.shields.io/badge/License-OSL--3.0-blue)";
  //   case "PostgreSQL":
  //     return "![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue)";
  //   case "Unlicense":
  //     return "![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue)";
  //   case "Zlib":
  //     return "![License: Zlib](https://img.shields.io/badge/License-Zlib-blue)";
  //   default:
  //     return "";
  // }
  if (license) {
    let licenseLink = license.split(' ').join('%20');
    licenseLink = licenseLink.split('-').join('--');
    return `![License](https://img.shields.io/badge/License-${licenseLink}-blue)`;
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "AFL-3.0":
      return "https://opensource.org/licenses/AFL-3.0";
    case "Apache-2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "Artistic-2.0":
      return "https://opensource.org/licenses/Artistic-2.0";
    case "BSL-1.0":
      return "https://opensource.org/licenses/BSL-1.0";
    case "BSD-2-Clause":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "BSD-3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "CC":
      return "https://creativecommons.org/licenses/";
    case "CC0-1.0":
      return "https://creativecommons.org/publicdomain/zero/1.0/";
    case "ECL-2.0":
      return "https://opensource.org/licenses/ECL-2.0";
    case "EPL-1.0":
      return "https://opensource.org/licenses/EPL-1.0";
    case "EPL-2.0":
      return "https://opensource.org/licenses/EPL-2.0";
    case "EUPL-1.1":
      return "https://spdx.org/licenses/EUPL-1.1.html";
    case "GPL-2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html";
    case "GPL-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    case "LGPL-2.1":
      return "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html";
    case "LGPL-3.0":
      return "https://www.gnu.org/licenses/lgpl-3.0.html";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "LPPL-1.3c":
      return "https://www.latex-project.org/lppl/lppl-1-3c/";
    case "MS-PL":
      return "https://opensource.org/licenses/MS-PL";
    case "MS-RL":
      return "https://opensource.org/licenses/MS-RL";
    case "MPL-2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "NCSA":
      return "https://spdx.org/licenses/NCSA.html";
    case "OFL-1.1":
      return "https://opensource.org/licenses/OFL-1.1";
    case "OSL-3.0":
      return "https://opensource.org/licenses/OSL-3.0";
    case "PostgreSQL":
      return "https://opensource.org/licenses/PostgreSQL";
    case "Unlicense":
      return "https://unlicense.org/";
    case "Zlib":
      return "https://opensource.org/licenses/Zlib";
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the **[${license}](${renderLicenseLink(license)})** license. <br>Click the license above to learn more about this license. <br>
`;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

Made by **${data.username}** <br>
GitHub: https://github.com/${data.username}

If you have any questions, please contact me at ${data.email} <br>

## License

${renderLicenseSection(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## How to Contribute

${data.contribution}

## Tests

${data.test}
`
}

// Export the generateMarkdown function
export default generateMarkdown;