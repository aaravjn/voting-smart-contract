const { network } = require("hardhat");
const { verify } = require("../utils/verify") 
const { developmentChains } = require("../net-configs")

module.exports = async function ({getNamedAccounts, deployments}) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log("Deploying Contract")

    const voting = await deploy("Voting", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if(!(developmentChains.includes(network.name))){
        console.log("Verifying contract deployment in goerli network")
        await verify(voting.address, [])
    }
    console.log("Contract Deployed")
}