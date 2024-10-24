/*  1. create an object school that contains the name of the school, its location, and an object students
  with the details of three students (name and grade) , then iterate the students detail using loop 
  then print the value.*/

  console.log("Question 1 : Object inside Object");
  console.log("---------------------------------");
  console.log("");

  const School = {
    Name : "AIITE",
    Location : "Medavakkam",
    StudentsDetails : {
      Student1 : {
        Name : "Ajith",
        Grade : "A+"
      },
      Student2 : {
        Name : "Vijay",
        Grade : "B",
      },
      Student3 : {
        Name : "Rajini",
        Grade : "B+"
      }
    }
  };

  for (let i in School.StudentsDetails){
    console.log("Student Name :", School.StudentsDetails[i].Name,",", "\n", 
                "Student Grade :", School.StudentsDetails[i].Grade);
  }


console.log("");
console.log("Question 2 : Object Inside Array");
console.log("--------------------------------");
console.log("");

/* 
 2. create an array called inventory where each element is an object representing an item(like name, 
  quantity, price). then loop through the array and print out the name and quantity of each item.
*/

const Inventory = [
  Store1 ={
    Name : "Sugar",
    Quantity : "5 KG",
    Price :  50
  },
  Store2 = {
    Name : "Dhal",
    Quantity : "10 KG",
    Price :  100
  },
  Store3 = {
    Name : "Salt",
    Quantity : "1 KG",
    Price :  10
  }
];

console.log("Inventory Stocks :");
for(let i in Inventory)
{
  console.log(Inventory[i].Name, "Available Quantity", Inventory[i].Quantity)
}

/* 3. create an array of objects representing three books. Each book object should have properties like
title, author and yearOfPublished. Then use foor loop to print all title and year of the books. 
*/

console.log("");
console.log("Question 3 : Nested Objects with Array");
console.log("--------------------------------------");
console.log("");

const BookDetails = [
  Book1 = {
    Name : "2 States",
    Author : "Chetan Bhagat",
    YearofPublished : 2011,
    RepublishedYears : [2014, 2019, 2024]
  },
  Book2 = {
    Name : "Ner Ner Thema",
    Author : "Gobinath",
    YearofPublished : 2013,
    RepublishedYears : [2018, 2021, 2023]
  },
  Book3 = {
    Name : "Life its Going",
    Author : "Robert Frost",
    YearofPublished : 2015,
    RepublishedYears : [2017, 2019, 2021]
  }
];

for(let i in BookDetails)
{
  console.log("Book Name :",BookDetails[i].Name,"\n Published Year",BookDetails[i].YearofPublished,",");  
  for(let j in BookDetails){    
    console.log("Republihsed Year :",BookDetails[i].RepublishedYears[j]);    
  }
  console.log("\n");
}