import { ethers } from "hardhat";

async function main() {

  const crowdfundAddress= "0xb129c2Aa7908Cbb431DFDaeB01F2F1F324bE8a42";
  const crowdFundCoinAddress="0x49620E238a6eA0e76632073355662f2d0E6986Bc"
  
  const supporter = "0x12896191de42EF8388f2892Ab76b9a728189260A"

  const crowdfundINteract = await ethers.getContractAt("Crowdfund", crowdfundAddress);
  const crowdFundCoinInteract = await ethers.getContractAt("CrowdFundCoin", crowdFundCoinAddress)

  /***********Calling functions in the samrt contract****** */
  const createProject = await crowdfundINteract.addProject("Buy Tesla", "Need a ride and Tesla is the car that i desire", 2000000);
  console.log("create project", createProject)

   const amt = ethers.utils.parseUnits("10");
  const approve = await crowdFundCoinInteract.approve(crowdfundAddress, amt)
  console.log("approve contract", approve)


  const amtToSupport = ethers.utils.parseUnits("9");
  const supportProject =  await crowdfundINteract.supportProject(0, amtToSupport);
  console.log("supportProject", supportProject);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
