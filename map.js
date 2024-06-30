  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

/*************************************************************** */
// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results=[];
for (let num of nums) {
  results.push(num * 2)
};

console.log(results);

/*************************************************************** */
// Using map()
const multByTwo = function(num) {
  return num * 2;
};

const mapResults = nums.map(multByTwo);
console.log(mapResults);

/*************************************************************** */
// Simplified w/ map()
const simplified = nums.map(function (num) {return num*2});

console.log(simplified);


/*************************************************************** */
// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);

console.log(arrow);


/*************************************************************** */
// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id,]);
console.log(studentsWithIds);


/*I’ve just mapped over the entire  student array and passed an arrow function to  
the map method which, for each student, returns an array containing student.name and student.id.
As you can see the map method makes life a lot easier. If I log studentsWithIds to the console,  
you’ll see it’s an array of arrays, where each one contains the student’s name and id from the  
original object.*/