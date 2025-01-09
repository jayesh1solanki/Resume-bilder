//Function to show job description
function show(element) {
    const jobDescription = element.querySelector('.job_discription');
    if (jobDescription.style.display === 'block') {
        jobDescription.style.display = 'none';
    } else {
        jobDescription.style.display = 'block';
    }
}


// Function to show the project summery

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    const showSummery = document.querySelectorAll('.show-summery');
    
    // Loop through each project to handle modal and summary toggling
    projects.forEach(project => {
        const summery = project.querySelector('.proj-summery');
        const showSummaryText = project.querySelector('.show-summery');

        // On project click, open modal
        project.addEventListener('click', function (e) {
            e.stopPropagation();  // Prevent event from bubbling up to overlay

            // Toggle the active class for the project (for summary)
            project.classList.toggle('active');
            if (summery.style.display === 'none') {
                summery.style.display = 'block';
            } else {
                summery.style.display = 'none';
            }
        });
    });
});
