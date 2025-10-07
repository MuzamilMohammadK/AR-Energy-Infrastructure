
function sendMail(event){
    // Prevent the form from submitting and reloading the page
    if (event && event.preventDefault) event.preventDefault();

    const parms = {
        name: (document.getElementById("name") && document.getElementById("name").value) || "",
        email: (document.getElementById("email") && document.getElementById("email").value) || "",
        subject: (document.getElementById("subject") && document.getElementById("subject").value) || "",
        message: (document.getElementById("message") && document.getElementById("message").value) || ""
    };

    // Basic validation
    if (!parms.name || !parms.email || !parms.message) {
        alert('Please fill in your name, email and message.');
        return false;
    }

    // Send via EmailJS (ensure emailjs.init was called on the page)
    emailjs.send("service_t34dygt", "template_0e9wokk", parms)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("EmailJS success:", response);
            // reset the first form on the page (if any)
            const f = document.querySelector('form');
            if (f) f.reset();
        })
        .catch((error) => {
            alert("Email not sent. Error: " + (error && error.text ? error.text : error));
            console.error("EmailJS error:", error);
        });

    return false; // ensure no form submission / reload
}

