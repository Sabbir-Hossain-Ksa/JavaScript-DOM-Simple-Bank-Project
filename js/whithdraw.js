// step 1: add event listeners with the withdraw button
// Step 2: get the withdraw

document.getElementById("whihdrawBtn").addEventListener("click", function (e) {
	// step 1
	const withdrawField = document.getElementById("withdrawField");
	const newWithdrawAmountStr = withdrawField.value;
	const newWithdrawAmount = parseFloat(newWithdrawAmountStr);
    withdrawField.value = "";
    if(isNaN(newWithdrawAmount)){
        alert('Please enter a valid amount');
        return;
    }
	const withdrawTotalElement = document.getElementById("withdrawTotal");
	const previousWithdrawTotalStr = withdrawTotalElement.innerText;
	const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);
	
	// if (newWithdrawAmount > previousWithdrawTotal) {
	// 	alert("your father ar account a ato taka nai");
    //     return;
	// }

	const courrentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
	withdrawTotalElement.innerText = courrentWithdrawTotal;

	const previousTotalElement = document.getElementById("totalBalance");
	const previousBalanceTotalStr = previousTotalElement.innerText;
	const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

	const courrentTotalBalance = previousBalanceTotal - courrentWithdrawTotal;
	previousTotalElement.innerText = courrentTotalBalance;
});
