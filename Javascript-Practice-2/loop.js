for(let i = 0; i < 10; i++){
    console.log(i);
}
// for of loop 
const users = ['Max','Anna','Joel'];
console.log(users)
for (const user of users){
    console.log(user);
}
const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
}
for (const propertyName in loggedInUser)
{
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);// logged in as loggedInUser.propertyName
}

let isFinished = false;
//while loop
while (!isFinished){
    isFinished = confirm("Do you want to quit?") // return boolean value
}
console.log("Done!")