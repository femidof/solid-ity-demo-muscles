
const HDWProvider = require('truffle-hdwallet-provider');
const Web3 =  require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWProvider(
    'theme effort excite dinner hire dance license current muffin joke utility system',
'https://rinkeby.infura.io/v3/ae056b4104b1480dab03e9d99935fb7d'
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x'+ bytecode, arguments: ['Hello World'] })
        .send({gas:'1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};
deploy();