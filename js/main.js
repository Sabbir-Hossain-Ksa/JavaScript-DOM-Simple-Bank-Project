const submitBtn = document.getElementById("btn-submit");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const emailField = document.getElementById("user-email");
	const emailFieldValue = emailField.value;

	const passwordField = document.getElementById("user-password");
	const passwordFieldValue = passwordField.value;

	if (emailFieldValue == "sabbirhossain@gmail.com" && passwordFieldValue == "12345678") {
		alert("Login Successful");
	} else {
		alert("Login Failed");
	}
});
