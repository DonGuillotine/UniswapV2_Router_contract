const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const UniswapInteractions = await hre.ethers.getContractFactory("UniswapInteractions");
    const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    const uniswapInteractions = await UniswapInteractions.deploy(uniswapRouterAddress);
    await uniswapInteractions.waitForDeployment();

    console.log("UniswapInteractions deployed to:", await uniswapInteractions.getAddress());

    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const amountIn = hre.ethers.parseEther("1"); 
    const path = [WETH, DAI];

    const amounts = await uniswapInteractions.getAmountsOutWrapper(amountIn, path);
    console.log("Amounts out:", amounts.map(a => hre.formatEther(a)));

    const amountADesired = hre.ethers.parseEther("1"); 
    const amountBDesired = hre.ethers.parseEther("1000"); 
    const amountAMin = hre.ethers.parseEther("0.5");
    const amountBMin = hre.ethers.parseEther("500");
    const to = deployer.address;
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

    try {
        const tx = await uniswapInteractions.addLiquidityWrapper(
            WETH,
            DAI,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline
        );
        const receipt = await tx.wait();
        console.log("Liquidity added. Transaction hash:", receipt.transactionHash);
    } catch (error) {
        console.error("Error adding liquidity:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });