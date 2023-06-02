//import * as JSP from './js-pract';

// import Main from './sort-algo';

// const main = new Main();
// main.executeCode();

// import execute from './recursion';
// execute();


const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  console.log('counts[num]   ',counts, num )
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);