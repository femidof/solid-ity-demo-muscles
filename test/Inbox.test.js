const assert = require('assert');
const ganache = require('ganache-core');
const { beforeEach } = require('mocha');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface , bytecode} = require('../compile');



let accounts;
let inbox;

beforeEach(async () => {
    // Get list of all accounts
    accounts = await web3.eth.getAccounts();
       

    // Use one of those accounts to deploy
    // the contract

   inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!'] })
        .send({from: accounts[0], gas:'1000000'})
});

describe('Inbox', ()=>{
    it('deploys a contract', ()=>{
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,"Hi there!");
    });

    it('can update/change message', async () =>{
        await inbox.methods.setMessage('Bye Here!').send({ from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message,"Bye Here!");
    })
});























// class Car {
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }

// }

// let car; 

// beforeEach(()=>{
//      car = new Car();
// });

// describe('Car Class', () =>{
    
//     it('can park | has a park function', ()=>{
      
//         assert.equal(car.park(), 'stopped');
    
//     });

//     it('can drive', ()=> {
        
//         assert.equal(car.drive(), 'vroom');
//     });
// } );
