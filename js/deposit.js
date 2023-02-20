// Step 1: Add the event listeners in the deposit button.
document.getElementById("depositBtn").addEventListener("click", function (e) {
	e.preventDefault();
	// Step 2: get the deposit value from the deposit input field
	const depositValue = document.getElementById("depositField");
	const newDepositValueString = depositValue.value;
	const newDepositValue = parseFloat(newDepositValueString);
	// step 3: get the current value from the deposit
	const depositTotalElement = document.getElementById("depositTotal");
	const previousDepositAmountString = depositTotalElement.innerText;
	const previousDepositAmount = parseFloat(previousDepositAmountString);
	// step 4: add number to the total deposit
	const currentDepositAmount = newDepositValue + previousDepositAmount;
	depositTotalElement.innerText = currentDepositAmount;
	// step 5: get balance total
	const balanceTotalElement = document.getElementById("totalBalance");
	const previousBalanceTotalString = balanceTotalElement.innerText;
	const previousBalanceTotal = parseFloat(previousBalanceTotalString);
	// step 6: calculate total current balance
	const currentBalance = newDepositValue + previousBalanceTotal;
	balanceTotalElement.innerText = currentBalance;
	//step 7; clear  the deposit field
	depositValue.value = "";
});
