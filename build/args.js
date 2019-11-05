var yargs = require('yargs');
 
bump = yargs.argv.version

//if(validBumpTypes.indexOf(bump) === -1) {
//throw new Error('Unrecognized bump "' + bump + '".');
//}

module.exports = {
bump: bump
};