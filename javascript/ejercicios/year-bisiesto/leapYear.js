let year = 2000;
function isLeapYear(year) {
    let four = year % 4;
    let oneHundred = year % 100;
    let fourHundred = year % 400;

    if ((four === 0 && oneHundred !== 0) || fourHundred === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

let result;
result = isLeapYear(year);

console.log(result);
