// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Login {
    
    // slot 0
    bytes32 private username;

    // slot 1 
    bytes32 private password;

    constructor(bytes32 _username, bytes32 _password) {
        username = _username;
        password = _password;
    }
}
