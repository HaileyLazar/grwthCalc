function getCompoundInterest() { 

    let initialInvst = parseFloat(document.getElementById("initialinvst").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let yrRetire = parseFloat(document.getElementById("yrRetire").value);

    let currentYear = new Date().getFullYear();

    let years = yrRetire - currentYear;

    if (isNaN(initialInvst) || isNaN(annualRate) || isNaN(years) || years<=0){
        alert("Please enter valid values for all inputs.");
        return false;
    }

    let futureValue= initialInvst * Math.pow((1 + annualRate / 100), years);

    futureValue = Math.round(futureValue);

    let resultText = `If you invest $${initialInvst} at an annual interest rate of ${annualRate}% for ${years} years, your investment will grow to $${futureValue} by the year ${yrRetire}.`

    let resultElement = document.createElement("div");
    resultElement.textContent = resultText;

    document.querySelector(".form-container").appendChild(resultElement);

    return false; 


}