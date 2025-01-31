const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PropertyToken", function () {
    it("Should mint a new token", async function () {
        const PropertyToken = await ethers.getContractFactory("PropertyToken");
        const propertyToken = await PropertyToken.deploy("NexAssets Property Token", "NAPT");
        await propertyToken.deployed();

        await propertyToken.mint(await ethers.provider.getSigner().getAddress(), 1);
        expect(await propertyToken.ownerOf(1)).to.equal(await ethers.provider.getSigner().getAddress());
    });
});
