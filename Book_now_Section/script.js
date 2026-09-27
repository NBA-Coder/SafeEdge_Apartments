

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









       function doPost(e) {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Bookings");

  const data = e.parameter;

  const bookingId = data.bookingId || "";
  const name = data.name || "";
  const email = data.email || "";
  const phone = data.phone || "";
  const space = data.space || "";
  const roomName = data.roomName || "";
  const checkinDate = data.checkinDate || "";
  const checkoutDate = data.checkoutDate || "";
  const status = data.status || "Pending";

  // Make sure required booking information exists
  if (!bookingId || !roomName || !checkinDate || !checkoutDate) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: "Missing required booking information."
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Prevent the same Booking ID from being added twice
  const existingIds = sheet
    .getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1)
    .getValues()
    .flat();

  if (existingIds.includes(bookingId)) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: "Booking already exists."
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Add booking to Google Sheet
  sheet.appendRow([
    bookingId,
    name,
    email,
    phone,
    space,
    roomName,
    checkinDate,
    checkoutDate,
    status
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: "Booking saved successfully."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
    });

});
