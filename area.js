// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Function to display the area on the page
  function displayArea() {
    // Get the value from the input field
    const radius = document.getElementById("radius").value;
  
    // Ensure the user entered a valid radius
    if (radius > 0) {
      // Calculate the area
      const area = calculateArea(radius);
      
      // Display the result
      document.getElementById("result").innerHTML = `The area of the circle is: ${area.toFixed(2)} square units.`;
    } else {
      // Display an error message
      document.getElementById("result").innerHTML = "Please enter a valid radius!";
    }
  }
  