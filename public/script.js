document
  .getElementById("emailForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const recipientEmail = document.getElementById("recipientEmail").value;
    const recipientName = document.getElementById("recipientName").value;
    const emailSubject = document.getElementById("emailSubject").value;
    const emailBody = document.getElementById("emailBody").value;

    const statusMessage = document.getElementById("statusMessage");

    function updateStatusMessage(text, type) {
      statusMessage.textContent = text;
      statusMessage.classList.remove("success", "error", "info");
      if (type) statusMessage.classList.add(type);
    }

    updateStatusMessage("Sending email...", "info");

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toEmail: recipientEmail,
          toName: recipientName,
          subject: emailSubject,
          htmlContent: emailBody,
        }),
      });

      const responseText = await response.text();

      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("Response was not JSON:", responseText);
        updateStatusMessage(
          "Server error: Invalid response from server.",
          "error"
        );
        return;
      }

      if (response.ok) {
        updateStatusMessage("Email sent successfully!", "success");
        document.getElementById("emailForm").reset();
      } else {
        updateStatusMessage(
          `Error: ${data.message || "Failed to send email."}`,
          "error"
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      updateStatusMessage("Network error. Please try again.", "error");
    }
  });
