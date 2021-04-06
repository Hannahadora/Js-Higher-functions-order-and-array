const companies = [
    {name:"Company One", category:"Finance", start: 1981, end:2003},
    {name:"Company Two", category:"Retail", start: 1992, end:2008},
    {name:"Company Three", category:"Auto", start: 1999, end:2007},
    {name:"Company Four", category:"Retail", start: 1989, end:2010},
    {name:"Company Five", category:"Technology", start: 2009, end:2014},
    {name:"Company six", category:"Finance", start: 1987, end:2010},
    {name:"Company Seven", category:"Auto", start: 1986, end:1996},
    {name:"Company Eight", category:"Technology", start: 2011, end:2016},
    {name:"Company Nine", category:"Retail", start: 1981, end:1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }














// forEach

// companies.forEach(function(company) {
//     console.log(company.name);
// });










// filter

// Get 21 and older

// METHOD 1

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//    if(ages[i] >= 21) {
//        canDrink.push(ages[i]);
//    } 
// }

// METHOD 2

// const canDrink = ages.filter(function(age) {
//    if(age >=21) {
//        return true
//    } 
// })

// METHOD 3

// const canDrink = ages.filter(age => age >= 21);



// filter retail companies

// METHOD 1

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     } 
// });

// METHOD 2

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// METHOD 3

// let retailCompanies = [];
// for(let i = 0; i < companies.length; i++) {
//     if(companies[i].category === 'Retail')
//     // retailCompanies.push(companies[i])
//     retailCompanies.push(`${companies[i].name} is a retail companies founded in ${companies[i].start}`)
// }
//  console.log(retailCompanies);



// FILTER 80S COMPANY

// METHOD 1

// let eightiesCompanies = [];
// for(let i = 0; i < companies.length; i++) {
//     if(companies[i].start >= 1980 && companies[i].start <= 1989);
//     eightiesCompanies.push(companies[i]);
// };

// METHOD 2

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));

// METHOD 3

// const eightiesCompanies = companies.filter(function(company) {
//     if(company.start >= 1980 && company.start <= 1989)
//     return true
// });

//   console.log(eightiesCompanies)


//  COMPANIES THAT LASTED 10 YEARS

// METHOD 1

// let tenYearsOldCompanies = [];
// for(let i = 0; i < companies.length; i++) {
//     if(companies[i].end - companies[i].start >= 10);
//     tenYearsOldCompanies.push(companies[i]);
// };

// METHOD 2

// const tenYearsOldCompanies = companies.filter(company => (company.end - company.start >= 10));

// METHOD 3

// const tenYearsOldCompanies = companies.filter(function(company) {
//     if(company.end - company.start >= 10)
//     return true
// });


// console.log(tenYearsOldCompanies)
   







// map

// Create Array Of Company Names

// METHOD 1

// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// console.log(companyNames);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}] specializing in ${company.category}`;
// });

// console.log(testMap);


// METHOD 2
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}] specializing in ${company.category}`);

// console.log(testMap);


const ageSquare = ages.map(age => Math.sqrt(age));
const ageTimesTwo = ages.map(age => age * 2);

// console.log(ageSquare);
// console.log(ageTimesTwo);


const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

// console.log(ageMap);





// sort

// sort companies by start year

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });


const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);


// sort ages

const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);





// reduce

//  let ageSum = 0;
//  for(let i = 0; i < ages.length; i++) {
//      ageSum += ages[i];
//  }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

//  console.log(ageSum);



//  Total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);





// Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a, b) => a + b, 0);

console.log(combined);
