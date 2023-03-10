// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let stdData = [
    { name: "Vivek", roll: 1, grammer: 92, accounts: 100, physics: null },
    { name: "Sandy", roll: 2, grammer: 76, accounts: 80, physics: null },
    { name: "Ashish", roll: 4, grammer: 78, accounts: null, physics: 76 },
    { name: "Aditya", roll: 5, grammer: 68, accounts: null, physics: 78 },
  ];
  let r;
  // Using for each loop:
  console.log("\n**Using forEach loop**\n");
  stdData.forEach((stdData) => {
    r =
      stdData.name +
      " - " +
      (stdData.grammer + stdData.accounts + stdData.physics) / 2 +
      " %";
    console.log(r);
  });