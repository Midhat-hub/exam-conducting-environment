// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExamResultContract {
    struct ExamResult {
        string examName;
        uint finalScore;
        uint percentage;
        uint accuracy;
    }

    mapping(address => ExamResult) public results;

    function storeExamResult(string memory _examName, uint _finalScore, uint _percentage, uint _accuracy) public {
        results[msg.sender] = ExamResult(_examName, _finalScore, _percentage, _accuracy);
    }

    function getExamResult() public view returns (string memory, uint, uint, uint) {
        ExamResult memory result = results[msg.sender];
        return (result.examName, result.finalScore, result.percentage, result.accuracy);
    }
}
