// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (`${!data.license}`) {
    return ' ';
  } else if ( `${data.license.value}` = 'Apache') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if ( `${data.license.value}` = 'Eclipse') {
    return 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
  } else if ( `${data.license.value}` = 'GNU') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else if ( `${data.license.value}` = 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if ( `${data.license.value}` = 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (`${!data.license}`) {
    return ' ';
  } else if ( `${data.license.value}` = 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if ( `${data.license.value}` = 'Eclipse') {
    return 'https://opensource.org/licenses/EPL-1.0'
  } else if ( `${data.license.value}` = 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if ( `${data.license.value}` = 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if ( `${data.license.value}` = 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${data.license.value}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
