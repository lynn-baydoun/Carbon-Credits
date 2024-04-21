pragma solidity ^0.8.19; 

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "contracts/campaign.sol";
import "./carbonToken.sol";

contract Factory{
    CarbonToken carbonToken;

    constructor() {
        carbonToken = new CarbonToken();
    }

    function createCampaign(address _manager, uint256 _goal, uint256 _deadline, uint256 _totalCarbonCredits) public returns (address) {
        
        //verification


        //creation
        Campaign campaign = new Campaign(_manager, _goal, _deadline, _totalCarbonCredits);
        address campaignAddress = address(campaign); 
        carbonToken.mint(campaignAddress, _totalCarbonCredits);

        //returning address
        return campaignAddress;
    }
}