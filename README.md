# Uniswap Interactions in Solidity

This project contains a Solidity contract for interacting with Uniswap V2 and ERC-20 tokens. It simplifies the process of interacting with Uniswap's liquidity pools and token swap mechanisms, as well as managing ERC-20 token approvals and transfers.

## Project Overview

The main contract, `UniswapInteractions`, acts as an intermediary for interacting with the Uniswap V2 decentralized exchange (DEX) router. It includes key functions that allow users to:

- **Add liquidity** to Uniswap liquidity pools by transferring tokens and approving them for use with the Uniswap router.
- **Query token swap output** by checking how many tokens a user would receive when swapping a given amount of tokens via Uniswap.

The contract abstracts away complexities such as ERC-20 token approvals, making it easier to interact with Uniswap’s liquidity provision and token swap functionalities.

## Features

### Interacting with Uniswap

- **Liquidity Management**: Users can easily add liquidity to Uniswap V2 pools by calling a single function. This process handles token transfers and approvals automatically.
  
- **Token Swap Output Querying**: Users can determine the output of a token swap based on the input amount and the swap path they define, by using the `getAmountsOutWrapper` function, which wraps Uniswap's `getAmountsOut` function.

### ERC-20 Token Handling

The contract uses the standard `IERC20` interface to handle token transfers and approvals. Before interacting with Uniswap’s liquidity pools, tokens are transferred from the user to the contract and approved for use with the Uniswap router.

### Ownership and Router Configuration

- The contract is initialized with the Uniswap V2 router’s address and the deployer becomes the contract owner.
- The Uniswap router address is used for all liquidity and swap interactions.

## Project Structure

```plaintext
├── contracts
│   ├── interfaces
│   │   ├── IUniswapV2Router.sol    # Interface for Uniswap V2 Router
│   │   └── IERC20.sol              # Interface for ERC-20 tokens
│   └── UniswapInteractions.sol     # Main contract for Uniswap interactions
├── scripts                         # Placeholder for deployment scripts
├── test                            # Placeholder for future tests
└── hardhat.config.js               # Hardhat configuration file
```

### Contract Breakdown

1. **`IERC20.sol`**: Interface for standard ERC-20 token interactions. It includes functions like `transfer`, `approve`, and `allowance`.

2. **`IUniswapV2Router.sol`**: Interface for interacting with Uniswap V2's core functions such as adding liquidity and swapping tokens.

3. **`UniswapInteractions.sol`**: The main contract that interacts with both Uniswap and ERC-20 tokens. It allows users to add liquidity and query swap results.

## Prerequisites

Before you get started, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/) (for local development and testing)
- A supported Ethereum wallet (like [MetaMask](https://metamask.io/)) to interact with the deployed contracts.

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/DonGuillotine/UniswapV2_Router_contract.git
cd UniswapV2_Router_contract
```

2. Install dependencies:

```bash
npm install
```

3. Compile the contracts:

```bash
npx hardhat compile
```

## Deployment

Deployment scripts are not included in the project at this stage. To deploy the contract, you can create a script in the `scripts` folder, or deploy manually via the Hardhat console.

## Usage

Once deployed, the contract can be interacted with using a frontend (such as a React app) or directly via a script or console using Hardhat or Ethers.js.

### Adding Liquidity

You can call the `addLiquidityWrapper` function to add liquidity to a Uniswap pool by sending the appropriate tokens to the contract, which will handle approvals and interactions with the Uniswap router.

### Querying Swap Amounts

To estimate how much output tokens you’ll receive for a given input, use the `getAmountsOutWrapper` function:

## Testing

No tests have been written for this project yet. To add tests, create your test files inside the `test` directory. You can use Hardhat's built-in testing framework.

To run tests, use:

```bash
npx hardhat test
```

## Future Improvements

- **Testing**: Add tests to make sure the contract behaves as expected under different scenarios.
- **Deployment**: Automate contract deployment using Hardhat scripts and create migration workflows for various networks (like Rinkeby or Mainnet).
- **Gas Optimization**: Explore potential gas optimizations and review contract performance in production environments.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
