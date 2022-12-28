		let formExepted = false;
		let expeptLogIN = false;
		getInfo();
		const validateForm = formSelecter =>{
		const formElement = document.querySelecter(formSelecter);
		formElement.addEventListener ('submit', event =>
			{const email = document.getElementById('email');
			const password = document.getElementById('password');
			formExepted = true;
		});
		 	console.log(email +password);
	}
	let exepted;
	let nameExepted
	function getInfo() {
		let name = window.prompt('Please enter your name');
		if (name != '') {
			exepted = true;
		if (exepted===true) {
			while (exepted===true) {
				nameExepted=true;
			}
		}else if (exepted===false)
			while (exepted===false) {
				nameExepted=false;
			}
		}
		else {
			name = window.prompt('Please enter your name');	
		}
	}
	if (nameExepted===true && formExepted===true) {
		expeptLogIN = true;
	}
	if (expeptLogIN===true) {
		document.getElementsByClassName("signin").innerHTML = "welcome user"
	}
	