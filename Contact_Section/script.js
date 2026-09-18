
/* =====================================================
   SAFEEDGE APARTMENTS
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const buttonText = document.getElementById("buttonText");
const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        /* ===============================
           GET FORM VALUES
        =============================== */

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();


        /* ===============================
           CLEAR PREVIOUS MESSAGE
        =============================== */

        formMessage.textContent = "";
        formMessage.className = "form-message";


        /* ===============================
           VALIDATION
        =============================== */

        if (!name || !phone || !email || !subject || !message) {

            formMessage.textContent =
                "Please fill in all the required fields.";

            formMessage.classList.add("error");

            return;
        }


        /* ===============================
           EMAIL VALIDATION
        =============================== */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.classList.add("error");

            return;
        }


        /* ===============================
           PHONE VALIDATION
        =============================== */

        const phonePattern =
            /^[0-9+\-\s()]{7,20}$/;

        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid phone number.";

            formMessage.classList.add("error");

            return;
        }


        /* ===============================
           BUTTON LOADING STATE
        =============================== */

        submitBtn.classList.add("loading");

        buttonText.textContent = "Sending...";


        /* ===============================
           PREPARE FORM DATA
        =============================== */

        const formData = new FormData();

        formData.append(
            "access_key",
            "YOUR_WEB3FORMS_ACCESS_KEY"
        );

        formData.append(
            "name",
            name
        );

        formData.append(
            "phone",
            phone
        );

        formData.append(
            "email",
            email
        );

        formData.append(
            "subject",
            "SafeEdge Contact Form - " + subject
        );

        formData.append(
            "message",
            message
        );

        formData.append(
            "from_name",
            "SafeEdge Apartments Website"
        );


        /* ===============================
           SEND EMAIL
        =============================== */

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );


            const result = await response.json();


            /* ===============================
               SUCCESS
            =============================== */

            if (result.success) {

                formMessage.textContent =
                    "Thank you! Your message has been sent successfully. We'll get back to you shortly.";

                formMessage.classList.add("success");

                contactForm.reset();

            }


            /* ===============================
               ERROR
            =============================== */

            else {

                formMessage.textContent =
                    "Something went wrong. Please try again.";

                formMessage.classList.add("error");

            }

        }


        catch (error) {

            console.error("Form error:", error);

            formMessage.textContent =
                "Unable to send your message. Please try again or contact us directly.";

            formMessage.classList.add("error");

        }


        /* ===============================
           RESET BUTTON
        =============================== */

        submitBtn.classList.remove("loading");

        buttonText.textContent = "Send Message";

    });

}

