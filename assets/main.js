function calculateCompound() {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value) / 100;
  const t = parseFloat(document.getElementById("years").value);
  const n = parseFloat(document.getElementById("times").value);

  if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n)) {
    document.getElementById("result").innerText = "Please fill in all fields correctly.";
    return;
  }

  const amount = p * Math.pow(1 + r / n, n * t);
  document.getElementById("result").innerText = `Future Value: $${amount.toFixed(2)}`;
}

function calculateLoan() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const r = parseFloat(document.getElementById("loanRate").value) / 100 / 12;
  const n = parseFloat(document.getElementById("loanYears").value) * 12;

  if (isNaN(P) || isNaN(r) || isNaN(n)) {
    document.getElementById("loanResult").innerText = "Please fill in all fields correctly.";
    return;
  }

  const payment = (P * r) / (1 - Math.pow(1 + r, -n));
  document.getElementById("loanResult").innerText = `Monthly Payment: $${payment.toFixed(2)}`;
}

function calculateSavings() {
  const deposit = parseFloat(document.getElementById("deposit").value);
  const rate = parseFloat(document.getElementById("saveRate").value) / 100 / 12;
  const years = parseFloat(document.getElementById("saveYears").value) * 12;

  if (isNaN(deposit) || isNaN(rate) || isNaN(years)) {
    document.getElementById("saveResult").innerText = "Please fill in all fields correctly.";
    return;
  }

  const future = deposit * ((Math.pow(1 + rate, years) - 1) / rate);
  document.getElementById("saveResult").innerText = `Future Savings: $${future.toFixed(2)}`;
}
