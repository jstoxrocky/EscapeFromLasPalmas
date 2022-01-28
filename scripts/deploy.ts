import { ethers } from "hardhat";

async function main() {
  const EscapeFromLasPalmas = await ethers.getContractFactory("EscapeFromLasPalmas");
  const escapeFromLasPalmas = await EscapeFromLasPalmas.deploy();
  await escapeFromLasPalmas.deployed();
  console.log("EscapeFromLasPalmas deployed to:", escapeFromLasPalmas.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
