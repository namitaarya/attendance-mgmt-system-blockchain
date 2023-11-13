// var TodoList = artifacts.require("D:/blockchain-app/contracts/ToDoList.sol");

// module.exports = function(deployer) {
//   deployer.deploy(TodoList);
// };

// var Owned = artifacts.require("D:/blockchain-app/contracts/Owned.sol")
// var TestContract = artifacts.require("D:/blockchain-app/contracts/AttendanceSheet.sol");

 
// module.exports = function(deployer) 
// {
//   deployer.deploy(Owned);  
//   deployer.deploy(TestContract);
// };

const Owned = artifacts.require("D:/blockchain-app/contracts/Owned.sol");
const TestContract = artifacts.require("D:/blockchain-app/contracts/AttendanceSheet.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Owned, { from: accounts[0] });
  deployer.deploy(TestContract, { from: accounts[0] });
};