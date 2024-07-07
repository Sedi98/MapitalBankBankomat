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
  domReset();
  moneyValue = 0;
  comission = 0;
  comissionText.innerHTML = ``;
  moneyInputContainer.style.display = "none" ? "block" : "none";
  moneyShowText.innerHTML = `Nağdlaşdırılacaq məbləğ : ${moneyValue} AZN`;
  disabled = true;
  for (let i = 0; i < moneyItems.length - 1; i++) {
    moneyItems[i].setAttribute("disabled", "true");
  }
};

const domReset = () => {
  cashText.innerHTML = `Balans : ${balance} AZN`;
  moneyInputContainer.style.display = "none";
  moneyShowText.innerHTML = `Nağdlaşdırılacaq məbləğ :`;
  numInput.value = "";
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
    console.log(Number(comission));
    balance = balance - ((Number(moneyValue)+ Number(comission)));
    cashText.innerHTML = `Balans : ${balance} AZN`;
    domReset();
    alert(`Nağdlaşdırıldı ${moneyValue} AZN . Qalıq balans : ${balance} AZN`);
  } else {
    alert("Balansınızda kifayet qeder məbləg yoxdur");
  }
});
