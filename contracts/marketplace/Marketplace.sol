// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./PropertyToken.sol";

contract Marketplace is Ownable {
    PropertyToken public propertyToken;

    constructor(address _propertyToken) {
        propertyToken = PropertyToken(_propertyToken);
    }

    function listToken(uint256 tokenId, uint256 price) public {
        // Implement listing logic
    }

    function buyToken(uint256 tokenId) public payable {
        // Implement buying logic
    }
}
