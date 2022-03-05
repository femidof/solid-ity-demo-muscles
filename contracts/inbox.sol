pragma solidity ^0.4.7;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    // function Inbox(string initialMessage) public {
    //     message = initialMessage;
    // }

    function setMessage(string newMessage) public {
        message = newMessage;   
    }

    // function getMessage() public view returns (string) {
    //     return message;
    // }
}