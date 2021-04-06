const Students = [
    {name:"Student One", department:"Finance", start: 1981, end:2003},
    {name:"Student Two", department:"Retail", start: 1992, end:2008},
    {name:"Student Three", department:"Auto", start: 1999, end:2007},
    {name:"Student Four", department:"Retail", start: 1989, end:2010},
    {name:"Student Five", department:"Technology", start: 2009, end:2014},
    {name:"Student six", department:"Finance", start: 1987, end:2010},
    {name:"Student Seven", department:"Auto", start: 1986, end:1996},
    {name:"Student Eight", department:"Technology", start: 2011, end:2016},
    {name:"Student Nine", department:"Retail", start: 1981, end:1989}
];


// students in retail department
const retailStudents = Students.filter(function(student) {
    if (student.department === 'Retail') {
        return true
    }
});

// const retailStudents = Students.filter(student => student.department === 'Retail')

// console.log(retailStudents)













const form = document.querySelector('form');
const button = document.querySelector('input[type=button]');
const subject = document.querySelectorAll('input[type=radio]');
// const subject = document.getElementsByName('subject')



function myFunction() {
  
    // e.preventDefault()

    for (let i = 0; i < subject.length; i++) {
        if (subject[i].checked == true) {
           alert('You have selected ' + subject[i].value + '')
           location.href = "https://www.topuniversities.com/courses/mathematics/guide#:~:text=Other%20mathematics%20topics%20you%20can,knot%20theory%2C%20linear%20algebra%2C%20linear";
        } else {
            alert('Please select a subject');
            return false
        }
    }

    // const subjects = subjects.filter(function(subject){
    //     if (subject.checked == true) {
    //         alert('You have selected ' + subject.value + '')
    //         location.href = "www.yoursite.com";
    //         return true
    //      } else {
    //          alert('Please select a subject');
    //          return false
    //      }
    // });
    
}


