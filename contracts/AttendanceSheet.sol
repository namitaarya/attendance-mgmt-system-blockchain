pragma solidity ^0.5.0;

import "./Owned.sol";
contract AttendanceSheet is Owned {
    
    struct Student {
        uint age;
        string fName;
        string lName;
        uint attendanceValue;
    }
    
    mapping (uint => Student) studentList;
    uint[] public studIdList;
    
    // Event to log student creation
    event studentCreationEvent(
       string fName,
       string lName,
       uint age
    );
    
    // Function to add a new student
    function createStudent(uint _studId, uint _age, string memory _fName, string memory _lName) onlyOwner public {
    Student storage student = studentList[_studId];

    student.age = _age;
    student.fName = _fName;
    student.lName = _lName;
    student.attendanceValue = 0;
    studIdList.push(_studId) - 1;
    emit studentCreationEvent(_fName, _lName, _age);
}
    
    // Function to increment attendance for a student
    function incrementAttendance(uint _studId) onlyOwner public {
        studentList[_studId].attendanceValue = studentList[_studId].attendanceValue+1;
    }
    
    // Function to get list of all student IDs
    function getStudents() view public returns(uint[] memory) {
        return studIdList;
    }
    
    // Function to get details of a particular student
    function getParticularStudent(uint _studId) public view returns (string memory, string memory, uint, uint) {
        return (studentList[_studId].fName, studentList[_studId].lName, studentList[_studId].age, studentList[_studId].attendanceValue);
    }

    // Function to get total number of students
    function countStudents() view public returns (uint) {
        return studIdList.length;
    }
    
}