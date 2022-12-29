import { ethers } from "hardhat";

async function main() {
    const contractAddress = '0x8a725d8Fae1DC3080498366836392F5238866AB7';
    const escapeFromLasPalmas = await ethers.getContractAt('EscapeFromLasPalmas', contractAddress)
    const price = ethers.utils.parseEther("0.001");
    await escapeFromLasPalmas.mint({ value: price });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
