document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       APPOINTMENT FORM
    ========================= */

    const form = document.getElementById("appointmentForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("patientName").value.trim();

            const phone =
                document.getElementById("patientPhone").value.trim();

            const date =
                document.getElementById("appointmentDate").value;

            const time =
                document.getElementById("appointmentTime").value;

            const reason =
                document.getElementById("visitReason").value;

            const message =
                document.getElementById("patientMessage").value.trim();


            if (!name || !phone) {

                alert("Please enter your name and mobile number.");

                return;

            }


            let whatsappMessage =
                "Hello Dr. Shraddha Gupta,%0A%0A" +

                "I would like to book a dental appointment.%0A%0A" +

                "*Name:* " + encodeURIComponent(name) + "%0A" +

                "*Mobile:* " + encodeURIComponent(phone) + "%0A";


            if (date) {

                whatsappMessage +=
                    "*Preferred Date:* " +
                    encodeURIComponent(date) +
                    "%0A";

            }


            if (time) {

                whatsappMessage +=
                    "*Preferred Time:* " +
                    encodeURIComponent(time) +
                    "%0A";

            }


            if (reason) {

                whatsappMessage +=
                    "*Reason for Visit:* " +
                    encodeURIComponent(reason) +
                    "%0A";

            }


            if (message) {

                whatsappMessage +=
                    "*Message:* " +
                    encodeURIComponent(message) +
                    "%0A";

            }


            whatsappMessage +=
                "%0AThank you.";


            const whatsappURL =
                "https://wa.me/917042253751?text=" +
                whatsappMessage;


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    /* =========================
       NAVBAR AUTO CLOSE
       ON MOBILE
    ========================= */

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");

    const navbarCollapse =
        document.getElementById("mainNav");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });

});