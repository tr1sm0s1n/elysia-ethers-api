import { ethers } from "hardhat";
import { writeFile } from "node:fs";

async function main() {
  const cert = await ethers.deployContract("Cert");
  await cert.waitForDeployment();

  const details = {
    deployer: cert.deploymentTransaction()?.from,
    contract: await cert.getAddress(),
  };

  console.log(`${details.deployer} deployed ${details.contract}`);

  writeFile("../src/details.json", JSON.stringify(details, null, 2), (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log("Details are saved!!");
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
