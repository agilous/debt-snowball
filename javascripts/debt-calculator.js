var document;

function calcResult() {
    var currentBalance = Number(document.getElementById('current-balance').value);
    var interestRate   = Number(document.getElementById('interest-rate').value);
    var loanTerm       = Number(document.getElementById('loan-term').value);
    var monthlyPayment = Number(document.getElementById('monthly-payment').value);
    var calculatedInterest;
    var newBalance = "";
    var i = 1;
    var a = new Date();

    while (currentBalance > 0) {
        calculatedInterest = Number((currentBalance * (interestRate / 100.0) / 12.0).toFixed(2));
        currentBalance = Number(currentBalance - monthlyPayment + calculatedInterest).toFixed(2);
        //newBalance = newBalance + i + " (" + a.toDateString() + "): " + (currentBalance > 0 ? currentBalance : 0) + "<br />";
        i += 1;
        a.setDate(a.getDate() + 30);
    }
    var calculatedResult = document.getElementById('calc-result');
    calculatedResult.innerHTML = "Pay-off is <b>" + a.toDateString() + "</b>";
}

function clearForm() {
    var focalPoint = document.getElementById('current-balance');
    document.getElementById('interest-rate').value = "";
    document.getElementById('loan-term').value = "";
    document.getElementById('monthly-payment').value = "";
    document.getElementById('calc-result').innerHTML = "And your pay-off date is....";
    focalPoint.value = "";
    focalPoint.focus();
}