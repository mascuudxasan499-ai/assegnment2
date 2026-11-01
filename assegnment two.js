// student info
let studentName = "Mascuud Hassan Abdulqadir"
let subjectMarks1 = 100;
let subjectMarks2 = 78;
let subjectMarks3 = 90;

const calculateTotalMarks = (marks1, marks2, marks3 )=>  marks1 + marks2+ marks3;

// passed or failed 
let passed = subjectMarks1 >= 50 && subjectMarks2 >= 50 && subjectMarks3 >= 50;

// calculate total marks 
let totalMarks = calculateTotalMarks(subjectMarks1,subjectMarks2, subjectMarks3)
// calculate average
let average = totalMarks / 3
// calculate the percentage
let percentage = (totalMarks / (3 * 100)) * 100;

// get the grade of the student 
let grade;
if(average >= 80){
    grade = "A"
} else if(average >= 70){
    grade = "B"
} else if(average >= 60){
    grade = "C"
} else if(average >= 50){
    grade = "D"
}else {
    grade = "F"
}

// calculate total marks 
// function calculateTotalMarks(marks1, marks2, marks3){
//     return marks1 + marks2 + marks3
// }


// display  student info
console.log("======= Student Information ========")
console.log("Student name: ", studentName)
console.log("Total marks: ", totalMarks)
console.log("Average: ", average.toFixed(2))
console.log("Percentage: ", percentage+ "%")
console.log("Grade: ", grade)
console.log(passed ? "Passed" : "Failed")


// display message for the grade
switch(grade){
    case "A":
        console.log("Excellence performance!!")
        break
    case "B":
        console.log("Very good performance.")
        break
    case "C":
        console.log("Good performance1")
        break
    case "D":
        console.log("Needs improvement")
        break
    default:
        console.log("Re-Exam")
}


