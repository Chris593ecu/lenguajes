let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
    if (
        annualIncome >= minIncomeForCar &&
        creditScore >= minCreditScoreForCar
    ) {
        return 'You qualify for a car loan.';
    } else if (
        annualIncome < minIncomeForCar &&
        creditScore < minCreditScoreForCar
    ) {
        return "You don't qualify for any loans.";
    }
}

let duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
