const createCode = require('./mimc_gencontract');

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));

var accounts = web3.eth.personal.newAccount('0', async(res, err) => console.log(res));


const mimc_data = createCode('0x0fbe43c36a80e36d7c7c584d4f8f3759fb51f0d66065d8a227b688d12488c5d4', 220);

web3.eth.sendTransaction({ from: accounts.address, to: "0x0000000000000000000000000000000000000000", data: mimc_data });