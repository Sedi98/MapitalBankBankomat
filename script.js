cashText.innerHTML = `Balans : ${balance} AZN`;

const setMoney = (value) => {
  if (!disabled) {
    moneyValue = value;
    comissionText.innerHTML = `Komissiya : ${comissionCalc()} AZN (${
      comissionPercent * 100
    }%)`;
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
    comissionPercent = 0.01;
    comission = moneyValue * comissionPercent;
  } else if (moneyValue >= 50 && moneyValue < 100) {
    comissionPercent = 0.02;
    comission = moneyValue * comissionPercent;
  } else if (moneyValue >= 100) {
    comissionPercent = 0.03;
    comission = moneyValue * comissionPercent;
  }
  return comission.toFixed(2);
};

const showFooterYear = () => {
  year = new Date().getFullYear();
  footerYear.innerHTML = year == 2024 ? "" : `${year}`;
};


showFooterYear();

numInput.addEventListener("keyup", (e) => {
  moneyValue = Number(e.target.value);
  comissionText.innerHTML = `Komissiya : ${comissionCalc()} AZN  (${
    comissionPercent * 100
  }%)`;
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
