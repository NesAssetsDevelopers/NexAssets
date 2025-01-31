const { ethers } = require("hardhat");

async function main() {
    const PropertyToken = await ethers.getContractFactory("PropertyToken");
    const propertyToken = await PropertyToken.deploy("NexAssets Property Token", "NAPT");
    await propertyToken.deployed();
    console.log("PropertyToken deployed to:", propertyToken.address);

    const PropertyRegistry = await ethers.getContractFactory("PropertyRegistry");
    const propertyRegistry = await PropertyRegistry.deploy();
    await propertyRegistry.deployed();
    console.log("PropertyRegistry deployed to:", propertyRegistry.address);

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy(propertyToken.address);
    await marketplace.deployed();
    console.log("Marketplace deployed to:", marketplace.address);

    const DEXIntegration = await ethers.getContractFactory("DEXIntegration");
    const dexIntegration = await DEXIntegration.deploy(propertyToken.address);
    await dexIntegration.deployed();
    console.log("DEXIntegration deployed to:", dexIntegration.address);

    const RentalDividends = await ethers.getContractFactory("RentalDividends");
    const rentalDividends = await RentalDividends.deploy(propertyToken.address);
    await rentalDividends.deployed();
    console.log("RentalDividends deployed to:", rentalDividends.address);

    const CapitalGains = await ethers.getContractFactory("CapitalGains");
    const capitalGains = await CapitalGains.deploy(propertyToken.address);
    await capitalGains.deployed();
    console.log("CapitalGains deployed to:", capitalGains.address);

    const TokenBuyback = await ethers.getContractFactory("TokenBuyback");
    const tokenBuyback = await TokenBuyback.deploy(propertyToken.address);
    await tokenBuyback.deployed();
    console.log("TokenBuyback deployed to:", tokenBuyback.address);

    const DAO = await ethers.getContractFactory("DAO");
    const dao = await DAO.deploy();
    await dao.deployed();
    console.log("DAO deployed to:", dao.address);

    const GovernanceIncentives = await ethers.getContractFactory("GovernanceIncentives");
    const governanceIncentives = await GovernanceIncentives.deploy(dao.address);
    await governanceIncentives.deployed();
    console.log("GovernanceIncentives deployed to:", governanceIncentives.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
