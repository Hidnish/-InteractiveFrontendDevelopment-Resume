function sendMail(contactForm) {
    emailjs.send("service_lso3e7r","rosie_bindi", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            location.reload();
        },
        function(error) {
            console.log("FAILED", error);
        })

    return false;  //This is to prevent the page from refreshing when you submit your form    
}