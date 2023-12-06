const students = [
	{ name: "John", score: 80 },
	{ name: "Jane", score: 90 },
	{ name: "Jim", score: 85 },
	{ name: "Joan", score: 95 }
];

const studentsLength = students.length;

function getAverageStudentScore(totalStudents, student) {
    return totalStudents + student.score / studentsLength;
}

const result = students.reduce(getAverageStudentScore, 0);
console.log(result)



