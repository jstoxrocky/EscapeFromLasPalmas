import { expect } from 'chai';
import { ethers } from 'hardhat';
import { ContractFactory, Contract } from 'ethers';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('EscapeFromLasPalmas', () => {
  let contractFactory: ContractFactory, contract: Contract;
  let owner: SignerWithAddress, addr1: SignerWithAddress, others: SignerWithAddress[];
  
  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    contractFactory = await ethers.getContractFactory('EscapeFromLasPalmas');
    contract = await contractFactory.deploy();
  });

  describe('owner', () => {});
  describe('tokenIdCounter', () => {});
  describe('price', () => {});
  describe('maxSupply', () => {});
  describe('balanceOf', () => {});
  describe('ownerOf', () => {});
  describe('approvedForToken', () => {});
  describe('isApprovedForAll', () => {});
  describe('transferFrom', () => {});
  describe('approve', () => {});
  describe('setApprovalForAll', () => {});
  describe('safeTransferFrom', () => {});
  describe('safeTransferFrom', () => {});
  describe('name', () => {});
  describe('symbol', () => {});
  describe('tokenUri', () => {});

  describe('supportsInterface', () => {
    it('Should claim to implement IERC165', async () => {
        const interfaceId = '0x01ffc9a7';
        const interfaceIsSupported = await contract.supportsInterface(interfaceId);
        expect(interfaceIsSupported).to.equal(true);
    });

    it('Should claim to implement IERC721', async () => {
      const interfaceId = '0x80ac58cd';
      const interfaceIsSupported = await contract.supportsInterface(interfaceId);
      expect(interfaceIsSupported).to.equal(true);
    });

    it('Should claim to implement IERC721Metadata', async () => {
      const interfaceId = '0x5b5e139f';
      const interfaceIsSupported = await contract.supportsInterface(interfaceId);
      expect(interfaceIsSupported).to.equal(true);
    });
  });

  describe('mint', () => {
    it('Should increment the token counter and emit a Transfer event ', async () => {
        const from = '0x0000000000000000000000000000000000000000'
        const to = owner.address
        const tokenId = 1 // indexed starting at 1

        await expect(contract.mint())
          .to.emit(contract, "Transfer")
          .withArgs(from, to, tokenId);

        // increment the token counter
    });

    it('Should throw if less than 0.001 ETH is supplied', async () => {});
    it('Should throw if sold out', async () => {});
  });

  describe('totalSupply', () => {});
  describe('withdraw', () => {});
});
