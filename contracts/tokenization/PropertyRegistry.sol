// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PropertyRegistry is Ownable {
    struct Property {
        string name;
        string location;
        uint256 value;
    }

    mapping(uint256 => Property) public properties;
    uint256 public propertyCount;

    function addProperty(string memory name, string memory location, uint256 value) public onlyOwner {
        properties[propertyCount] = Property(name, location, value);
        propertyCount++;
    }

    function getProperty(uint256 id) public view returns (string memory, string memory, uint256) {
        Property storage property = properties[id];
        return (property.name, property.location, property.value);
    }
}
