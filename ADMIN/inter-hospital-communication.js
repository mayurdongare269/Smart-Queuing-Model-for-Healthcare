document.getElementById("send-message-button").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    if (message.trim() !== "") {
        alert(`Message sent: "${message}"`);
        document.getElementById("message").value = ""; // Clear the textarea after sending
    } else {
        alert("Please enter a message before sending.");
    }
});
