// 1. Pick : It's used to pick the values with differnt data types that are required

interface User{
    name:string,
    age:number,
    email:string,
    password:string,
    pincode:number
}

const user1:Pick<User,'name' | 'email' | 'pincode'> = {
    name:"rishi",email:"rahane@",pincode:396230
}

type userProfile = Pick<User,'name'| 'email'>
const userGreet = (user:userProfile):void =>{
    console.log("hello "+user.name +" your email is "+user.email);
}
userGreet({name:"rishi",email:"rahane@"})

// 2. Partial: It's used to remove the compulsory submission of a particular entity,whether it is passed or not then also the function will work

interface Student{
    name:string,
    enrolmentNo:number,
    department:string
}

type updatedPartialProps = Partial<Student>
const updateStudentDetails = (updateProps:updatedPartialProps):void => {
    console.log("update Name "+updateProps.name+" updated department "+updateProps.department);
}
updateStudentDetails({name:"rishi",department:"CSE"})

// 3. ReadOnly: It's used to mark the elements as static and can not changed later on

interface Bank {
    readonly accountNumber:number,
    userName:string,
    password:string
}
 
const Bk:Partial<Bank> = {
    accountNumber:656564,
    userName:"rishi",
    password:"1610"
}
console.log(Bk.accountNumber);
// Bk.accountNumber = 54353 it is not valid because of the readonly property

// 4. Record: It provides powerful ways to work the objects in typescript 

type students = Record<string,Student>;

const newStud:students = {
    'abc1':{name:"rishi",enrolmentNo:6,department:"CSE"},
    'abc2':{name:"rish",enrolmentNo:7,department:"CSE"},
}
console.log(newStud['abc1'])

// 5. Map: It is same as Record with an additional properties like get & set 

