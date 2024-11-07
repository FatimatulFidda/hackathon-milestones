// script.js

// Get references to the form and display area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById ('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span containeteditable="true">${name}</span></p>
    <p><b>Email:</b><span containeteditable="true">${email}</span></p>
    <p><b>Phone Number:</b><span containeteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p containeteditable="true">${education}</p>

    <h3>Experience</h3>
    <p containeteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p containeteditable="true">${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});