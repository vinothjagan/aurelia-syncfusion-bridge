var yargs = require('yargs');

//validBumpTypes = "major|minor|patch|prerelease".split("|"),
bump = yargs.argv.version

// if(validBumpTypes.indexOf(bump) === -1) {
//   throw new Error('Unrecognized bump "' + bump + '".');
// }

module.exports = {
    bump: bump
};