const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace", function () {
    it("Should list and buy a token", async function () {
        const PropertyToken = await ethers.getContractFactory("PropertyToken");
        const propertyToken = await PropertyToken.deploy("NexAssets Property Token", "NAPT");
        await propertyToken.deployed();

        const Marketplace = await ethers.getContractFactory("Marketplace");
        const marketplace = await Marketplace.deploy(propertyToken.address);
        await marketplace.deployed();

        await propertyToken.mint(await ethers.provider.getSigner().getAddress(), 1);
        await marketplace.listToken(1, ethers.utils.parseEther("1"));

        const buyer = (await ethers.getSigners())[1];
        await marketplace.connect(buyer).buyToken(1, { value: ethers.utils.parseEther("1") });

        expect(await propertyToken.ownerOf(1)).to.equal(buyer.address);
    });
});
