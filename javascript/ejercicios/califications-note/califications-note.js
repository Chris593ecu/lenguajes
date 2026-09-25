const calificaciones = [70, 80, 50, 60, 80, 90, 40, 100, 50];

function getAverage(arr) {
    const large = arr.length;
    large;
    const total = arr.reduce((a, i) => a + i, 0);
    return total / large;
}

getAverage(calificaciones);

function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassingGrade(grade) {
    const validNotes = ['A', 'B', 'C', 'D', 'E', 'F'];
    validNotes;

    if (!validNotes.includes(grade)) {
        return;
    }

    if (grade === 'A') {
        return true;
    } else if (!grade == 'F') {
        return true;
    } else if (grade === 'F') {
        return false;
    }
}
console.log(hasPassingGrade('B'));
