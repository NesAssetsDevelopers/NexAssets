// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/governance/Governor.sol";

contract DAO is Ownable, Governor {
    constructor() Governor("NexAssets DAO", "NADAO") {}

    function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description) public {
        super.propose(targets, values, calldatas, description);
    }
}
