// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./interfaces/IUniswapV2Router.sol";
import "./interfaces/IERC20.sol";

contract UniswapInteractions {
    IUniswapV2Router public uniswapRouter;
    address public owner;

    constructor(address _uniswapRouter) {
        uniswapRouter = IUniswapV2Router(_uniswapRouter);
        owner = msg.sender;
    }

    function addLiquidityWrapper(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity) {
        IERC20(tokenA).transferFrom(msg.sender, address(this), amountADesired);
        IERC20(tokenB).transferFrom(msg.sender, address(this), amountBDesired);

        IERC20(tokenA).approve(address(uniswapRouter), amountADesired);
        IERC20(tokenB).approve(address(uniswapRouter), amountBDesired);

        return uniswapRouter.addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline
        );
    }

    function getAmountsOutWrapper(uint amountIn, address[] calldata path) 
        external 
        view 
        returns (uint[] memory amounts) 
    {
        return uniswapRouter.getAmountsOut(amountIn, path);
    }
}