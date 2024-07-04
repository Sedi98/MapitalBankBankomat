cashText.innerHTML = `Balans : ${balance} AZN`;

const setMoney = (value) => {
  if (!disabled) {
    moneyValue = value;
    comissionText.innerHTML = `Komissiya : ${comissionCalc()} AZN`;
    moneyValue = moneyValue - comissionCalc();
    console.log(moneyValue);
    moneyShowText.innerHTML = `Nağdlaşdırılacaq məbləğ : ${moneyValue} AZN`;

    numInput.focus();
  } else {
    return false;
  }
};

const customValue = () => {
  moneyValue = 0;
  comission = 0;
  comissionText.innerHTML = ``;
  moneyInputContainer.style.display = "none" ? "block" : "none";
  moneyShowText.innerHTML = `Nağdlaşdırılacaq məbləğ : ${moneyValue} AZN`;
  disabled = true;
};

const domReset = () => {
  cashText.innerHTML = `Balans : ${balance} AZN`;
  moneyInputContainer.style.display = "none";
  moneyShowText.innerHTML = `Nağdlaşdırılacaq məbləğ :`;
  disabled = false;
};

const comissionCalc = () => {
  if (moneyValue < 10) {
    comission = 0;
  } else if (moneyValue >= 10 && moneyValue < 50) {
    comission = moneyValue * 0.01;
  } else if (moneyValue >= 50 && moneyValue < 100) {
    comission = moneyValue * 0.02;
  } else if (moneyValue >= 100) {
    comission = moneyValue * 0.03;
  }
  return comission.toFixed(2);
};

numInput.addEventListener("keyup", (e) => {
  moneyValue = Number(e.target.value);
  comissionText.innerHTML = `Komissiya : ${comissionCalc()} AZN`;
  moneyValue = moneyValue - comissionCalc();
  moneyShowText.innerHTML = `Nağdlaşdırılacaq məbləğ : ${moneyValue} AZN`;
});

btnCalculate.addEventListener("click", () => {
  if (balance >= moneyValue) {
    balance = balance - moneyValue;
    cashText.innerHTML = `Balans : ${balance} AZN`;
    domReset();
    alert(`Nağdlaşdırıldı ${moneyValue} AZN . Qalıq balans : ${balance} AZN`);
  } else {
    alert("Balansınızda kifayet qeder məbləg yoxdur");
  }
});
