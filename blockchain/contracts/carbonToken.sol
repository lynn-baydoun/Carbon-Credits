pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract CarbonToken is ERC20 , Ownable2Step {
    
    constructor() ERC20("CarbonToken", "CT") Ownable(msg.sender) {} 

    function mint(address account, uint256 value) public onlyOwner{
        _mint(account, value);
    }

}