function car_loan() { 
    event.preventDefault();

    // Get values from input fields
    let p = parseFloat(document.getElementById('Car_Ammount').value);
    let annual_r = parseFloat(document.getElementById('Rate_Perannum').value);
    let annual_n = parseFloat(document.getElementById('Loan_Years').value);

    // Convert annual interest rate to monthly interest rate
    let monthly_r = (annual_r / 100) / 12;
    let monthly_n = annual_n * 12;

    // EMI formula using Math.pow()
    let emi = (p * monthly_r * Math.pow(1 + monthly_r, monthly_n)) / (Math.pow(1 + monthly_r, monthly_n) - 1);

    // Calculate total payment and total interest
    let total_payment = emi * monthly_n;
    let total_interest = total_payment - p;

    // Display results with two decimal places
    document.getElementById('monthly_emi').innerHTML = emi.toFixed(2);
    document.getElementById('total_interest').innerHTML = total_interest.toFixed(2);
    document.getElementById('total_payment').innerHTML = total_payment.toFixed(2);
}
