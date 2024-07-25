// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-blue)";
    case ("Academic Free License v3.0" || "AFL-3.0" || "AFL"):
      return "![License: AFL 3.0](https://img.shields.io/badge/License-AFL--3.0-blue)";
    case ("Apache" || "Apache 2.0" || "Apache License 2.0" || "Apache-2.0"):
      return "![License: Apache](https://img.shields.io/badge/License-Apache--2.0-blue)";
    case ("Artistic License 2.0" || "Artistic-2.0" || "Artistic"):
      return "![License: Artistic](https://img.shields.io/badge/License-Artistic--2.0-blue)";
    case ("Boost Software License 1.0" || "BSL-1.0" || "BSL"):
      return "![License: BSL 1.0](https://img.shields.io/badge/License-BSL--1.0-blue)";
    case ("BSD 2-Clause License" || "BSD-2-Clause" || `BSD 2-clause "Simplified" license` || "BSD-2"):
      return "![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue)";
    case ("BSD 3-Clause License" || "BSD-3-Clause" || `BSD 3-clause "New" or "Revised" license` || "BSD-3"):
      return "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD--3--Clause-blue)";
    case (`BSD 3-clause Clear license` || `BSD-3-Clause-Clear` || "BSD-3-Clear" || "BSD 3 Clear"):
      return "![License: BSD 3-Clause Clear](https://img.shields.io/badge/License-BSD--3--Clause--Clear-blue)";
    case (`BSD 4-clause "Original" or "Old" license` || "BSD-4-Clause" || "BSD 4 Original" || "BSD-4" || "BSD-4-Original" || "BSD-4-Clause-Original"):
      return "![License: BSD 4-Clause](https://img.shields.io/badge/License-BSD--4--Clause-blue)";
    case (`BSD Zero-Clause license` || "BSD-0-Clause" || "BSD 0-Clause" || "BSD-0" || "BSD-0-Clause" || `0BSD`):
      return "![License: BSD Zero-Clause](https://img.shields.io/badge/License-0BSD-blue)";
    case (`Creative Commons license family` || `CC` || `cc`):
      return "![License: Creative Commons](https://img.shields.io/badge/License-CC-blue)";
    case (`Creative Commons Zero v1.0 Universal	` || `CC0-1.0`):
      return "![License: CC0 1.0](https://img.shields.io/badge/License-CC0--1.0-blue)";
    case (`Creative Commons Attribution 4.0	` || `CC-BY-4.0`):
      return "![License: CC BY 4.0](https://img.shields.io/badge/License-CC--BY--4.0-blue)";
    case (`Creative Commons Attribution ShareAlike 4.0` || `CC-BY-SA-4.0`):
      return "![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC--BY--SA--4.0-blue)";
    case (`Do What The F*ck You Want To Public License` || `WTFPL`):
      return "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-blue)";
    case (`Educational Community License v2.0	` || `ECL-2.0`):
      return "![License: ECL 2.0](https://img.shields.io/badge/License-ECL--2.0-blue)";
    case (`Eclipse Public License 1.0` || `EPL-1.0`):
      return "![License: EPL 1.0](https://img.shields.io/badge/License-EPL--1.0-blue)";
    case (`Eclipse Public License 2.0` || `EPL-2.0`):
      return "![License: EPL 2.0](https://img.shields.io/badge/License-EPL--2.0-blue)";
    case (`European Union Public License 1.1` || `EUPL-1.1`):
      return "![License: EUPL 1.1](https://img.shields.io/badge/License-EUPL--1.1-blue)";
    case (`GNU Affero General Public License v3.0` || `AGPL-3.0`):
      return "![License: AGPL 3.0](https://img.shields.io/badge/License-AGPL--3.0-blue)";
    case (`GNU General Public License family` || `GPL`):
      return "![License: GPL](https://img.shields.io/badge/License-GPL-blue)";
    case (`GNU General Public License v2.0` || `GPL-2.0`):
      return "![License: GPL 2.0](https://img.shields.io/badge/License-GPL--2.0-blue)";
    case (`GNU General Public License v3.0` || `GPL-3.0`):
      return "![License: GPL 3.0](https://img.shields.io/badge/License-GPL--3.0-blue)";
    case (`GNU Lesser General Public License family` || `LGPL`):
      return "![License: LGPL](https://img.shields.io/badge/License-LGPL-blue)";
    case (`GNU Lesser General Public License v2.1` || `LGPL-2.1`):
      return "![License: LGPL 2.1](https://img.shields.io/badge/License-LGPL--2.1-blue)";
    case (`GNU Lesser General Public License v3.0` || `LGPL-3.0`):
      return "![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL--3.0-blue)";
    case (`ISC`):
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue)";
    case (`LaTeX Project Public License v1.3c` || `LPPL-1.3c`):
      return "![License: LPPL 1.3c](https://img.shields.io/badge/License-LPPL--1.3c-blue)";
    case (`Microsoft Public License` || `MS-PL`):
      return "![License: MS-PL](https://img.shields.io/badge/License-MS--PL-blue)";
    case (`Mozilla Public License 2.0` || `MPL-2.0`):
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL--2.0-blue)";
    case (`Open Software License 3.0` || `OSL-3.0`):
      return "![License: OSL 3.0](https://img.shields.io/badge/License-OSL--3.0-blue)";
    case (`PostgreSQL License` || `PostgreSQL`):
      return "![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue)";
    case (`SIL Open Font License 1.1` || `OFL-1.1`):
      return "![License: OFL 1.1](https://img.shields.io/badge/License-OFL--1.1-blue)";
    case (`University of Illinois/NCSA Open Source License` || `NCSA`):
      return "![License: NCSA](https://img.shields.io/badge/License-NCSA-blue)";
    case (`The Unlicense` || `Unlicense`):
      return "![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue)";
    case (`zLib License` || `zlib` || `Zlib`):
      return "![License: zlib](https://img.shields.io/badge/License-Zlib-blue)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case ("Academic Free License v3.0" || "AFL-3.0" || "AFL"):
      return "https://opensource.org/licenses/AFL-3.0";
    case ("Apache" || "Apache 2.0" || "Apache License 2.0" || "Apache-2.0"):
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case ("Artistic License 2.0" || "Artistic-2.0" || "Artistic"):
      return "https://opensource.org/licenses/Artistic-2.0";
    case ("Boost Software License 1.0" || "BSL-1.0" || "BSL"):
      return "https://opensource.org/licenses/BSL-1.0";
    case ("BSD 2-Clause License" || "BSD-2-Clause" || `BSD 2-clause "Simplified" license` || "BSD-2"):
      return "https://opensource.org/licenses/BSD-2-Clause";
    case ("BSD 3-Clause License" || "BSD-3-Clause" || `BSD 3-clause "New" or "Revised" license` || "BSD-3"):
      return "https://opensource.org/licenses/BSD-3-Clause";
    case (`BSD 3-clause Clear license` || `BSD-3-Clause-Clear` || "BSD-3-Clear" || "BSD 3 Clear"):
      return "https://spdx.org/licenses/BSD-3-Clause-Clear.html";
    case (`BSD 4-clause "Original" or "Old" license` || "BSD-4-Clause" || "BSD 4 Original" || "BSD-4" || "BSD-4-Original" || "BSD-4-Clause-Original"):
      return "https://spdx.org/licenses/BSD-4-Clause.html";
    case (`BSD Zero-Clause license` || "BSD-0-Clause" || "BSD 0-Clause" || "BSD-0" || "BSD-0-Clause" || `0BSD`):
      return "https://opensource.org/licenses/0BSD";
    case (`Creative Commons license family` || `CC` || `cc`):
      return "https://creativecommons.org/licenses/";
    case (`Creative Commons Zero v1.0 Universal	` || `CC0-1.0`):
      return "https://creativecommons.org/publicdomain/zero/1.0/";
    case (`Creative Commons Attribution 4.0	` || `CC-BY-4.0`):
      return "https://creativecommons.org/licenses/by/4.0/";
    case (`Creative Commons Attribution ShareAlike 4.0` || `CC-BY-SA-4.0`):
      return "https://creativecommons.org/licenses/by-sa/4.0/";
    case (`Do What The F*ck You Want To Public License` || `WTFPL`):
      return "http://www.wtfpl.net/";
    case (`Educational Community License v2.0	` || `ECL-2.0`):
      return "https://opensource.org/licenses/ECL-2.0";
    case (`Eclipse Public License 1.0` || `EPL-1.0`):
      return "https://opensource.org/licenses/EPL-1.0";
    case (`Eclipse Public License 2.0` || `EPL-2.0`):
      return "https://opensource.org/licenses/EPL-2.0";
    case (`European Union Public License 1.1` || `EUPL-1.1`):
      return "https://spdx.org/licenses/EUPL-1.1.html";
    case (`GNU Affero General Public License v3.0` || `AGPL-3.0`):
      return "https://choosealicense.com/licenses/agpl-3.0/";
    case (`GNU General Public License family` || `GPL`):
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    case (`GNU General Public License v2.0` || `GPL-2.0`):
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html";
    case (`GNU General Public License v3.0` || `GPL-3.0`):
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    case (`GNU Lesser General Public License family` || `LGPL`):
      return "https://www.gnu.org/licenses/lgpl-3.0.html";
    case (`GNU Lesser General Public License v2.1` || `LGPL-2.1`):
      return "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html";
    case (`GNU Lesser General Public License v3.0` || `LGPL-3.0`):
      return "https://www.gnu.org/licenses/lgpl-3.0.html";
    case (`ISC`):
      return "https://opensource.org/licenses/ISC";
    case (`LaTeX Project Public License v1.3c` || `LPPL-1.3c`):
      return "https://www.latex-project.org/lppl/lppl-1-3c/";
    case (`Microsoft Public License` || `MS-PL`):
      return "https://opensource.org/licenses/MS-PL";
    case (`Mozilla Public License 2.0` || `MPL-2.0`):
      return "https://opensource.org/licenses/MPL-2.0";
    case (`Open Software License 3.0` || `OSL-3.0`):
      return "https://opensource.org/licenses/OSL-3.0";
    case (`PostgreSQL License` || `PostgreSQL`):
      return "https://opensource.org/licenses/PostgreSQL";
    case (`SIL Open Font License 1.1` || `OFL-1.1`):
      return "https://opensource.org/licenses/OFL-1.1";
    case (`University of Illinois/NCSA Open Source License` || `NCSA`):
      return "https://spdx.org/licenses/NCSA.html";
    case (`The Unlicense` || `Unlicense`):
      return "https://unlicense.org/";
    case (`zLib License` || `zlib` || `Zlib`):
      return "https://opensource.org/licenses/Zlib";
    default:
      return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;