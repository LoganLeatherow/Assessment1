const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool. Please enter a password", function(input){

	

	if(input.length > 10 ){
		console.log("success")
	}else{
		console.log("failure")
	}



	// This line closes the connection to the command line interface.
	reader.close()

});