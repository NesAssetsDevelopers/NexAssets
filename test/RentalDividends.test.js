const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RentalDividends", function () {
    it("Should distribute dividends", async function () {
        const PropertyToken = await ethers.getContractFactory("PropertyToken");
        const propertyToken = await PropertyToken.deploy("NexAssets Property Token", "NAPT");
        await propertyToken.deployed();

        const RentalDividends = await ethers.getContractFactory("RentalDividends");
        const rentalDividends = await RentalDividends.deploy(propertyToken.address);
        await rentalDividends.deployed();

        await propertyToken.mint(await ethers.provider.getSigner().getAddress(), 1);
        await rentalDividends.distributeDividends(1, ethers.utils.parseEther("1"));

        // Add assertions to check dividend distribution
    });
});
