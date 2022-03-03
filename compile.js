const path = require('path');
const fs = require('fs');
var solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

console.log(solc.compile(source, 1));
// solc.compile()

