// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./PropertyToken.sol";

contract RentalDividends is Ownable {
    PropertyToken public propertyToken;

    constructor(address _propertyToken) {
        propertyToken = PropertyToken(_propertyToken);
    }

    function distributeDividends(uint256 tokenId, uint256 amount) public onlyOwner {
        // Implement dividend distribution logic
    }
}
