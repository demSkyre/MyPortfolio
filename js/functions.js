$(function(){
	console.log("Functions loaded succesfully");

	$("#btnAboutMe").click(function(){
		console.log("About Me");
		document.getElementById("titleText").innerHTML = "About Me:";
		document.getElementById("contentChangeable").innerHTML = 
		'I started programming at the age of 14. '+
		'My first programming language was Java. After '+
		'I discovered my interest in programming, I started '+
		'to learn other languages like C++ (which was '+
		'tought to me on high school), C# (on the university, 4th quarter), '+
		'PHP (on the university, 6th quarter), and so on. Many of which I have '+
		'to get into again to perfect them, now that some time has passed and '+
		'I havent practiced many of these. <br><br>'+
		'My goal is to learn more about Java and JavaScript to a point '+
		'where I can handle any type of challenges based on the knowledge '+
		'I have gathered thoughout the years.<br><br>'+
		'<img src="files/Me.png" alt="Dante Meyer">';
	});

	$("#btnContact").click(function(){
		console.log("Contact");
		document.getElementById("titleText").innerHTML = "Contact:";
		document.getElementById("contentChangeable").innerHTML = '<label for="email_subscribe" class="footer-heading">Write your email and I will reply:</label><br> <div class="form-group"><input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email" id="txtEmail"><br><input type="button" class="btn btn-sm btn-success" width="100%" value="Send" id="btnSend"></div>';
	});

	$("#btnSend").click(function(){
		console.log("Contact Sent");
		document.getElementById("txtEmail").value = "";
	});

})