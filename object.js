// 1--------------------
// var nameUser={
//     name:"Ankit",
//     email:"ankit123123@gmail.com",
//     role:"Backend Devloper"
// }
// console.log(nameUser);

// 2--------------------------
// var product={
//     name:"ParleG",
//     price:"Rs_5",
//     category:"Biscuit",
// }
// console.log(product.name);
// console.log(product.price);

// 3----------------------------------
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };
// console.log(user [ "name"]);

// 4---------------------------------
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };
// const key="name"
// console.log(user [key]);

// 5------------------------------
// const students={
//  name: "Rahul",
//  role: "student"
// };
// students["role"]="developer";
// console.log(students);

// 6-----------------------------------
// const stuInfo={
//  name: "Rahul",
//  email: "rahul@example.com"
// };
// stuInfo["isloggedIn"]="true";
// console.log(stuInfo);

// 7-------------------------
// const users = {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// };
// console.log(Object.keys(users));

// 8-------------------------------------
// const users = {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// };
// console.log(Object.values(users));

// 9------------------------------
// const settings = {
//  theme: "dark",
//  language: "English",
//  notifications: true
// };
// console.log(Object.entries(settings));

// 10-------------------------
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };
// Object.entries(user).forEach(([key,value]) => {
//     console.log(key + ":" + value);
// });

// 11--------------------------------
// const user={
//     name:"Rahul",
//     email: "rahul@gmail.com",
//     role:"developer"
// };
// const{ name,email}=user
// console.log(name);
// console.log(email);

// 12------------------------------------
// const product = {
//  name: "Laptop",
//  price: 50000
// };
// const{name}=product;
// console.log(`productName =`,name);

// 13-------------------------------------------
// const name = "Rahul";
// const email = "rahul@example.com";
// const role = "developer";

// const users={name,
//     email,role}
// console.log(users);

// 14------------------------------------------------
// function displayUser({name,email}){
//     console.log(name);
//     console.log(email);

// }
// displayUser({
//  name: "Rahul",
//  email: "rahul@example.com"
// });

// 15--------------------------
// const user = {
//  name: "Rahul",
//  role: "developer"
// };
// const newuser={...user}
// console.log(newuser);

// 16---------------------
// const user = {
//  name: "Rahul",
//  role: "student"
// };
// const newuser={
//     ...user,
//     role:"devloper"
// }
// console.log(newuser);

// 17------------------------
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];

// const webDev=[
//     ...frontend,
//     ...backend
// ]
// console.log(webDev);

// 18------------------------------
function showSkills(Name,...Skill){
  console.log(`Name :`,Name);
  console.log(`Skill :`,Skill);
};
showSkills("Rahul", "HTML", "CSS", "JavaScript");

