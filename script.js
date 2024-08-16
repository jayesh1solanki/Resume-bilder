function show(element) {
    let jobDescription = element.querySelector('.job_discription');
    if (jobDescription.style.display === 'block') {
        jobDescription.style.display = 'none';
    } else {
        jobDescription.style.display = 'block';
    }
}
