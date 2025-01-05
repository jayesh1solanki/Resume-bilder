//Function to show job description
function show(element) {
    const jobDescription = element.querySelector('.job_discription');
    if (jobDescription.style.display === 'block') {
        jobDescription.style.display = 'none';
    } else {
        jobDescription.style.display = 'block';
    }
}


// // Function to show the project summery
// document.addEventListener('DOMContentLoaded', function () {
//     // Select all project elements
//     const projects = document.querySelectorAll('.project');

//     projects.forEach(project => {
//         const summery = project.querySelector('.proj-summery');
//         const showSummery = project.querySelector('.show-summery');

//         // Hide the summary initially
//         summery.style.display = 'none';

//         // Add click event listener to toggle summary visibility
//         project.addEventListener('click', function () {
//             if (summery.style.display === 'none') {
//                 summery.style.display = 'block';
//                 project.style.width = 'fit-content';  // Adjust width when summary is shown
//             } else {
//                 summery.style.display = 'none';
//                 project.style.width = '25%';  // Reset width when summary is hidden
//             }
//         });
//     });
// });
