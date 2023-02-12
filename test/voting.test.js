const { assert, expect } = require("chai")
const { ethers, network } = require("hardhat")
const developmentChains = ["hardhat", "localhost"]



!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Voting Tests", function () {
        let voting, deployer
        beforeEach(async () => {
            deployer  = (await getNamedAccounts()).deployer
            console.log(`Deployer -> ${deployer}`)

            voting = await ethers.getContract("Voting", deployer)
            console.log(`Voting contract ${voting}`)
        })

        describe("Unit tests", function () {
            it("creates poll", async () => {
                const poll_id = "ef7"
                const org_name = "aaravcorp"
                const start_time = 1676102347
                const duration = 1000
                
                await voting.createPoll (
                    poll_id,
                    org_name,
                    start_time,
                    duration
                )
                console.log("Created poll")
                await network.provider.request({ method: "evm_mine", params: [] })
            })
        })
    })