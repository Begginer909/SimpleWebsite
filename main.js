function validation(){
	var name = document.querySelector("#name").value;
	var subject = document.querySelector("#subject").value;
	var phone = document.querySelector("#phone").value;
	var email = document.querySelector("#email").value;
	var message = document.querySelector("#message").value;
	var submit = document.querySelector("#submit");
	var error_message = document.querySelector("#error_message");

	error_message.style.padding = "10px";

	if(name.length < 5){
		text = "Please Enter Valid Name";
		error_message.innerHTML = text;
		return false;
	}

	if(subject.length < 10){
		text = "Please Enter Correct Subject";
		error_message.innerHTML = text;
		return false;
	}

	if(phone.length !=11 ){
		text = "Please Enter Valid Phone Number";
		error_message.innerHTML = text;
		return false;
	}

	if(email.indexOf("@gmail.com","@yahoo.com") == -1 ){
		text = "Please Enter Valid Email";
		error_message.innerHTML = text;
		return false;
	}

	if(message.length <= 50){
		text = "Please Enter More Than 50 Characters";
		error_message.innerHTML = text;
		return false;
	}
	else{
		alert("The form has benn submitted successfully");
		submit();
		return true;
	
	}
}

