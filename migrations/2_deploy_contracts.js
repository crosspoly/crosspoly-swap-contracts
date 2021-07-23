const CPToken = artifacts.require("CP");
const CPStaking = artifacts.require("CPStaking");

const cp_token_eth_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";
const cp_token_eth_ropsten = "0x6cDb7B2cB95075f7264f63Ef9c8B5B76a9F7C7AF";

const cp_token_bsc_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";
const cp_token_bsc_testnet = "0x59923DBa13e99f2ac6E2376eC322Fe49EC003C1C";

const cp_token_heco_mainnet = "0xEe9801669C6138E84bD50dEB500827b776777d28";
const cp_token_heco_testnet = "0x6D2c5B89EB052c07940BA91dF6E2de8C1508E659";

module.exports = function (deployer, network, accounts) {
    switch (network) {
        /* Mainnet Deployer */
        case "eth_mainnet_cptoken":
        case "heco_mainnet_cptoken":
        case "bsc_mainnet_cptoken":
            deployCPTokenMainnet(deployer, network); break;
        case "eth_mainnet_cpstaking":
            deployCPStakingMainnet(deployer, network); break;

        /* Testnet Deployer */
        case "eth_ropsten_cptoken":
        case "heco_testnet_cptoken":
        case "bsc_testnet_cptoken":
            deployCPTokenTestnet(deployer, network); break;
        case "eth_ropsten_cpstaking":
            deployCPStakingRopsten(deployer, network); break;
    }
};

/* ------------------------------
        Mainnet Deployer
------------------------------ */

function deployCPTokenMainnet(deployer, network) {
    ensureMainnet(network);
    deployer.deploy(CPToken);
}

function deployCPStakingMainnet(deployer, network) {
    ensureMainnet(network);

    // TODO: set parameters before deploy.
    deployer.deploy(CPStaking);
}

/* ------------------------------
        Testnet Deployer
------------------------------ */

function deployCPTokenTestnet(deployer, network) {
    ensureNotMainnet(network);
    deployer.deploy(CPToken);
}

function deployCPStakingRopsten(deployer, network) {
    ensureNotMainnet(network);

    // TODO: set parameters before deploy.
    deployer.deploy(CPStaking);
}

/* ------------------------------
            Utilities
------------------------------ */

function ensureMainnet(network) {
    if (!network.includes("mainnet")) {
        console.log(`ERROR!!! You're deploying contracts into non-mainnet network. Current network = ${network}`);
        process.exit(1);
    }
}

function ensureNotMainnet(network) {
    if (network.includes("mainnet")) {
        console.log(`ERROR!!! You're deploying contracts into mainnet. Current network = ${network}`);
        process.exit(1);
    }
}
