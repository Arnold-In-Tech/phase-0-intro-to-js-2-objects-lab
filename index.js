// Write your solution in this file!

const employee = {name: "Toyota",
     streetAddress: "Heng Chan",
    };

// 1) returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObject = {...employee};
    newObject[key] = value; // newObject.key = value;  
    return newObject;
};

// 2) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};

// 3) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key];            // newObj.key
    return newObj;
};

// N/B_ TypeError: Cannot read properties of undefined (reading 'item')
// The above error occured because newObject from the previous function
// was re-assigned. The name was changed to newObj 

// 4) deletes `key` from employee and returns employee without the deleted key/value pair
// 5) modifies the original employee

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};



