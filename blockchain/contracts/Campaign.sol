// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Campaign {
    
    address manager; 
    uint256 goal; 
    uint256 deadline; 
    uint256 totalCarbonCredits;
    address carbonTokens;

    constructor(address _manager, uint256 _goal, uint256 _deadline, uint256 _totalCarbonCredits) {
        manager = _manager;
        goal = _goal;  
        deadline = _deadline;
        totalCarbonCredits = _totalCarbonCredits;
    }



    function withdraw() public {
        require(msg.sender == manager, "only the manager can withdraw");
        (bool success, ) = manager.call{value: address(this).balance}("");
        require(success, "Failed to send to manager");
    }
}