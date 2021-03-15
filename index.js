const Web3Utils = require("web3-utils");
const Contract = require("./evmasm");
const mimc_gencontract = require("./mimc_gencontract.js");

console.log(mimc_gencontract.createCode("0", 20));
