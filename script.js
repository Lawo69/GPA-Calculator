function addSubject() {
    const subjectsContainer = document.getElementById('subjects');
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('row');

    const subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.classList.add('input-box', 'subject');
    subjectInput.placeholder = 'Subject';

    const creditInput = document.createElement('input');
    creditInput.type = 'number';
    creditInput.classList.add('input-box', 'credit');
    creditInput.placeholder = 'Credit';

    const gradeInput = document.createElement('input');
    gradeInput.type = 'text';
    gradeInput.classList.add('input-box', 'grade');
    gradeInput.placeholder = 'Grade';

    subjectDiv.appendChild(subjectInput);
    subjectDiv.appendChild(creditInput);
    subjectDiv.appendChild(gradeInput);

    subjectsContainer.appendChild(subjectDiv);
}


function calculateGPA() {
    const subjects = document.querySelectorAll('.row');
    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        const grade = subject.querySelector('.grade').value.toUpperCase();
        const credit = parseFloat(subject.querySelector('.credit').value);

        if (isNaN(credit)) {
            alert('Please enter a valid credit value for all subjects.');
            return;
        }

        const gradePoints = getGradePoints(grade);
        if (gradePoints !== undefined) {
            totalGradePoints += gradePoints * credit;
            totalCredits += credit;
        } else {
            alert(`Invalid grade entered for one or more subjects: ${grade}`);
            return;
        }
    });

    const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.0;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your GPA is: <span style="color: #007BFF;">${gpa}</span>&emsp; Total Credit: <span style="color: #007BFF;">${totalCredits}`;
}

function getGradePoints(grade) {
    const gradePoints = {
        'A+': 4.3,
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.3,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.3,
        'D': 1.0,
        'D-': 0.7,
        'F': 0.0
    };

    return gradePoints[grade];
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();