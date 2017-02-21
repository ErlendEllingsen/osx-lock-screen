var spawn = require('child_process').spawn;
var lock = spawn('/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession', ['-suspend']);

console.log('locking screen');
