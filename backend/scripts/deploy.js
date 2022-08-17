
const {ethers} = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");


async function main() {
 
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;

  

  const HunterContract = await ethers.getContractFactory("HunterXhunter");
  const deployedHunterContract = await HunterContract.deploy( metadataURL,
    whitelistContract);

  

  console.log("The HunterXhunter smart contract adress is :", deployedHunterContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then (()=>process.exit(0))
.catch ((error) =>{
console.error(error);
process.exit(1);
} );
