obj={
    name: "Monju",
    age: 25,
    city: "Bangalore"
}
let array=["name", "age", "city","country","east", "south"];
for (const key in obj) {
    console.log(obj[key]);
}
console.log("\n");
for (const iterator of array) {
    console.log(iterator);
}