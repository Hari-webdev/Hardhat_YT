// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public a = 10;

    function setter(uint _a) public {
        a = _a;
    }

    function getter() public view returns (uint) {
        return a;
    }
}
