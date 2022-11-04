import { ethers } from "hardhat";

async function main() {
 
  const CrowdFundCoinAddress = "0x49620E238a6eA0e76632073355662f2d0E6986Bc";
  const CrowdFundContract = await ethers.getContractFactory("Crowdfund");
  const crowdFundContract = await CrowdFundContract.deploy(CrowdFundCoinAddress);

  await crowdFundContract.deployed();

  console.log(`crowdFundContract deployed to ${crowdFundContract.address}`);
}

//CrowdFundContractAddress = 0xb129c2Aa7908Cbb431DFDaeB01F2F1F324bE8a42
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});