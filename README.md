<h1>Escape from Las Palmas</h1>

<ol>
<li>yarn compile-solidity</li>
<li>npx hardhat run scripts/deploy.ts --network goerli</li>
<li>add contract address to mint.ts</li>
<li>npx hardhat run scripts/mint.ts --network goerli</li>
<li>yarn bundle</li>
<li>yarn uglify</li>
<li>copy + paste ugly.js into eflp0x01.html</li>
<li>upload to s3</li>
</ol>

Most recent deploy: 0x8a725d8Fae1DC3080498366836392F5238866AB7
Example tokenURI: https://billybones.s3.amazonaws.com/public/eflp0x01.html
https://testnets.opensea.io/assets/goerli/0x8a725d8Fae1DC3080498366836392F5238866AB7/1
https://goerli.looksrare.org/collections/0x8a725d8Fae1DC3080498366836392F5238866AB7/1
