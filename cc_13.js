// Task 2: Adding Employee Cards Dynamically to the Dashboard
const employeeContainer = document.getElementById("employeeContainer");

// Function to create and append an employee card to the dashboard.
function addEmployeeCard(name, position) {
    // Create the main card div and assign it a class for styling.
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");

    // Create an element for the employee's name and set its text content.
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    nameHeading.setAttribute("class", "employee-name");

    // Create a paragraph element for the employee's position and set its text content.
    const positionParagraph = document.createElement("p");
    positionParagraph.textContent = position;
    positionParagraph.setAttribute("class", "employee-position");

    // Create a button to remove the employee card.
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-button");  

// Task 4: Implementing Removal of Employee Cards with Event Bubbling

    // Event listener to remove the employee card when the "Remove" button is clicked.
    removeButton.addEventListener("click", (event) => {
        employeeContainer.removeChild(card);
        console.log(`${name} was removed!`); // Log the employee's removal.
        event.stopPropagation(); // Prevent event from bubbling up to the parent container.
    });

