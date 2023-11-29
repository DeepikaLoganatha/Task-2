function calculateFactorial() {
    // Get the input value
    var num = document.getElementById("inputNumber").value;

    // Validate input
    if (isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }
    

    // Convert input to an integer
    num = parseInt(num);

    // Calculate factorial
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }

    // Display the result
    document.getElementById("result").innerHTML = "Factorial of " + num + " is: " + factorial;
}

