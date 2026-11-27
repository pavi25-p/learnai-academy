
// LearnAI Academy - Website Functionality

// Select required website elements
const enrollButtons = document.querySelectorAll(".enroll-btn");
const courseSelect = document.getElementById("course-select");
const registrationForm = document.getElementById("registration-form");
const registrationMessage = document.getElementById("registration-message");

// Automatically select the course
enrollButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const courseName = button.getAttribute("data-course");

        courseSelect.value = courseName;

        console.log("Selected Course:", courseName);

    });

});

// Handle registration form submission
registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const selectedCourse = courseSelect.value;

    // Display successful registration message
    registrationMessage.textContent =
        "Demo registration successful for " +
        selectedCourse + "!";

    registrationMessage.style.color = "#15803D";

    console.log("Demo Registration Successful");
    console.log("Registered Course:", selectedCourse);

    // Clear the form
    registrationForm.reset();

});
