const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Reveal the private variables to a random user", () => {
    it("Should reveal the private variables to the user", async () => {
        const loginFactory = await ethers.getContractFactory("Login");

        const username = ethers.utils.formatBytes32String("admin");
        const password = ethers.utils.formatBytes32String("password");

        const login = await loginFactory.deploy(username, password);
        await login.deployed();

        // Retrieve the 'private' data via slot 0 and slot 1 in storage
        const slot0 = await ethers.provider.getStorageAt(login.address, 0);
        const slot1 = await ethers.provider.getStorageAt(login.address, 1);

        expect(ethers.utils.parseBytes32String(slot0)).to.equal("admin");
        expect(ethers.utils.parseBytes32String(slot1)).to.equal("password");
    })
})