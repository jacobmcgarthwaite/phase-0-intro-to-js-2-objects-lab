// Write your solution in this file!
//const employee = {
//    name: "Sam",
//    streetAddress: "11 Broadway"
//}

const newEmployee = {...employee};

function updateEmployeeWithKeyAndValue(employee, key, value ){
    employee[key] = value;

    const newEmployee = {...employee};

    return newEmployee;
};

