var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;

    var resumeHTML = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    resumeDisplayElement.innerHTML = resumeHTML;

    // Store the complete data in localStorage
    localStorage.setItem('resumeData', JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    }));

    // Create a shareable URL with only the username
    var shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(name)}`;
    
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

downloadPdfButton.addEventListener('click', function () {
    window.print();
});

window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('username');

    // Check if the username parameter is present
    if (name) {
        // Retrieve the complete data from localStorage
        var resumeData = JSON.parse(localStorage.getItem('resumeData'));
        
        if (resumeData) {
            // Populate the form with the complete data
            document.getElementById('username').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});