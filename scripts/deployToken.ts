import { ethers } from "hardhat";

async function main() {
  const Deployeraddress = "0x12896191de42EF8388f2892Ab76b9a728189260A"
  const CrowdFundCoin = await ethers.getContractFactory("CrowdFundCoin");
  const crowdFundCoin = await CrowdFundCoin.deploy();

  await crowdFundCoin.deployed();
  console.log(`crowdFundCoin deployed to ${crowdFundCoin.address}`);

  //Mint some Token 
  const CrowdFundContract = await ethers.getContractAt("CrowdFundCoin", crowdFundCoin.address);
  const amt = ethers.utils.parseUnits("100");
  const mint = await  CrowdFundContract.transferOut(Deployeraddress, amt)
  console.log("minted: ", mint);

}

//crowdFundCoinAddress = 0x49620E238a6eA0e76632073355662f2d0E6986Bc
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});