// document.addEventListener("DOMContentLoaded", function () {
//     let add_experience = document.getElementById("add-experience"); // Now points to the image
//     let experience = document.getElementById("experience-form");
//     let work_experience_form = document.getElementById("work-experience");

//     // Function to show or hide the experience form (popup)
//     function showPopup(bool) {
//         if (bool) {
//             experience.style.display = 'block';
//             document.querySelector("body").style.overflow = 'hidden';
//         } else {
//             experience.style.display = 'none';
//             document.querySelector("body").style.overflow = 'auto';
//         }
//     }

//     // Show the popup when the image is clicked
//     add_experience.addEventListener("click", function (event) {
//         event.stopPropagation(); // Prevent bubbling
//         showPopup(true);
//     });

//     // Prevent closing the popup when clicking inside the form
//     work_experience_form.addEventListener("click", function (event) {
//         event.stopPropagation();
//     });

//     // Close the popup when clicking outside of the form
//     document.addEventListener("click", function () {
//         if (experience.style.display === 'block') {
//             showPopup(false);
//         }
//     });
// });
