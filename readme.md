#   Simple Solidity Smart Contract


###  To run a test 
    'npm run test'


###  Explanation
* Solidity Contract available in contracts folder,
* compile.js is usaed to compile the solidity contract and this gives a bytecode and API,
* Test is run on the compile.js script using ther Ganache local network for almost instant ETH transaction and mocha framework to perform the test
* To deploy, you run "deploy.js" using web3 eth and truffle-hdwallet-provider to link to a node on a rinkeby network from infura.io and using my wallet address to connect and make transaction.