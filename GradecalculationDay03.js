function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = "A";
            break;

        case (score >= 80):
            grade = "B";
            break;

        case (score >= 65):
            grade = "C";
            break;

        default:
            grade = "F";
    }

    return grade;
}

let studentscore = 99;

console.log("Score: ", studentscore, "->Grade", getGrade(studentscore))

