require("dotenv").config();
const { ethers } = require("ethers");
const Abis = require("./datas/4002.json");
const Addresses = require("./datas/4002.json");
const { providers } = require("./providers");
const { Contract, Provider, setMulticallAddress } = require('ethers-multicall');

const supportChainId = process.env.CHAINID;
const multicallAddress = process.env.MULTIADDRESS;
const provider = providers[supportChainId];
setMulticallAddress(supportChainId, multicallAddress);

const marketplaceContract = new ethers.Contract(Addresses.marketplaceContract, Abis.marketplaceContract, provider);
const marketplaceContract_m = new Contract(Addresses.marketplaceContract, Abis.marketplaceContract);
const multicallProvider = new Provider(provider);

const getNFTContract = (address) => {
    return new ethers.Contract(address, Abis.NFTContract, provider);
}

const getNFTContract_m = (address) => {
    return new Contract(address, Abis.NFTContract, provider);
}

module.exports = {
    provider,
    multicallProvider,
    marketplaceContract,
    marketplaceContract_m,
    getNFTContract,
    getNFTContract_m
};
