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

// Task 5: Implement Inline Editing of Employee Details
    // Create an "Edit" button that allows for editing the employee card's information.
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-button");

    // Event listener for the "Edit" button, which allows for inline editing of name and position.
    editButton.addEventListener("click", (event) => {
        // Create input fields for both the employee's name and position to allow editing.
        const nameInput = document.createElement("input");
        nameInput.value = nameHeading.textContent;

        const positionInput = document.createElement("input");
        positionInput.value = positionParagraph.textContent;

        // Create a save button to apply changes after editing.
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Changes";

        // Event listener for the "Save Changes" button to update the card with new data.
        saveButton.addEventListener("click", (event) => {
            // Update the card content with the new name and position values.
            nameHeading.textContent = nameInput.value;
            positionParagraph.textContent = positionInput.value;

            // Replace the input fields with the updated name and position text.
            card.replaceChild(nameHeading, nameInput);
            card.replaceChild(positionParagraph, positionInput);

            // Remove the save button after the changes are saved.
            card.removeChild(saveButton);
        });

        // Replace the static elements (name and position) with the input fields and save button.
        card.replaceChild(nameInput, nameHeading);
        card.replaceChild(positionInput, positionParagraph);
        card.appendChild(saveButton);
    });

    // Event listener for clicking the employee card itself (to log the name).
    // This is a demonstration of logging the updated name (after an edit).
    card.addEventListener("click", (event) => {
        // Log the current name (updated name after an edit) to the console.
        console.log(`${nameHeading.textContent} was clicked.`); // Logs the updated name.
        
        // Prevents the click event from affecting other parts of the application.
        event.stopPropagation();
    });

    // Append the elements to the employee card.
    card.appendChild(nameHeading); // Employee's name
    card.appendChild(positionParagraph); // Employee's position
    card.appendChild(removeButton); // "Remove" button
    card.appendChild(editButton); // "Edit" button

    // Finally, append the employee card to the main container that holds all cards.
    employeeContainer.appendChild(card);
};

// Test cases: Adding several employee cards to the dashboard for demonstration.
addEmployeeCard("Samantha Parker", "Software Engineer");
addEmployeeCard("David Mitchell", "Product Manager");
addEmployeeCard("Olivia Robinson", "Lead Designer");