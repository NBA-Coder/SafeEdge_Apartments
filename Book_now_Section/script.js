

/* =====================================================
   CLEAR FORM AFTER SUCCESSFUL SUBMISSION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function () {

            // Wait for the form submission to complete
            setTimeout(function () {

                // Clear all user-entered fields
                form.querySelectorAll("input, textarea, select").forEach(function (field) {

                    // Don't clear hidden inputs such as Web3Forms access_key
                    if (field.type === "hidden") {
                        return;
                    }

                    if (field.tagName.toLowerCase() === "select") {
                        field.selectedIndex = 0;
                    } else {
                        field.value = "";
                    }

                });

            }, 1500);

        });

    });

});
