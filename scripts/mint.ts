import { ethers } from "hardhat";

async function main() {
    const contractAddress = '';
    const escapeFromLasPalmas = await ethers.getContractAt('EscapeFromLasPalmas', contractAddress)
    const price = ethers.utils.parseEther("0.001");
    await escapeFromLasPalmas.mint({ value: price });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
