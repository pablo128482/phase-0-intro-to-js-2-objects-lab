let emplyoyee = "Sam"

var employee = {
  name : "Sam",
 streetAddress : "11 Broadway",
 };

 function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyValue(employee, key, value) {

  employee[key] = value;
}

function deleteFromEmployeeByKey(employee, key) {
  let { [key]: deleted, ...newEmployee } = employee;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
    employee[key] = value;
    return employee;
  }
  
