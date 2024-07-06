"use strict";
// 1. Pick : It's used to pick the values with differnt data types that are required
const user1 = {
    name: "rishi", email: "rahane@", pincode: 396230
};
const userGreet = (user) => {
    console.log("hello " + user.name + " your email is " + user.email);
};
userGreet({ name: "rishi", email: "rahane@" });
const updateStudentDetails = (updateProps) => {
    console.log("update Name " + updateProps.name + " updated department " + updateProps.department);
};
updateStudentDetails({ name: "rishi", department: "CSE" });
const Bk = {
    accountNumber: 656564,
    userName: "rishi",
    password: "1610"
};
console.log(Bk.accountNumber);
const newStud = {
    'abc1': { name: "rishi", enrolmentNo: 6, department: "CSE" },
    'abc2': { name: "rish", enrolmentNo: 7, department: "CSE" },
};
console.log(newStud['abc1']);
// 5. Map: It is same as Record with an additional properties like get & set 
