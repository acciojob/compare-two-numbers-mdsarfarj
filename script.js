//your JS code here. If required.
 function compareNumbers() {
        // Prompt the user for the first number
        var number1 = prompt("Enter the first number:");

        // Prompt the user for the second number
        var number2 = prompt("Enter the second number:");

        // Convert the input strings to numbers
        var num1 = parseFloat(number1);
        var num2 = parseFloat(number2);

        // Check if the numbers are equal and display the result in an alert box
       if(num1===num2){
		   alert("true");
	   }
	 else{
		 alert("false");
	 }

    // Call the function when the page is loaded
    compareNumbers();