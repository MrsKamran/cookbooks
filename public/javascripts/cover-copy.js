//this file can be with /cookbooks/index.ejs and prints all cookbooks from database
//using either fetch method or asynch function


alert('inside javascript');

fetch('http://localhost:3000/cookbooks/json')
.then(response => response.json())
.then(cookbooks => console.log(cookbooks))


// var cookbooks;
// async function printCookbooks() {
//   const endpoint = 'http://localhost:3000/cookbooks/json';
//   try {
//     cookbooks = await fetch(endpoint).then(res => res.json());
//     console.log(cookbooks);//prints all the cookbooks
//     console.log(cookbooks[0]);//prints first cookbook
//     // console.log(cookbooks[0]._id);//prints iD of first cookbook
//   } catch(err) {
//     console.log(err);
//   } 
// }

// printCookbooks();

