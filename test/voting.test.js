const { assert, expect } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../net-configs")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Voting Tests", function () {
        let voting, deployer
        beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer
            voting = await ethers.getContract("Voting", deployer)
        })

        describe("Unit tests", async function () {
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
                await network.provider.request({ method: "evm_mine", params: [] })
            })
        })
    })