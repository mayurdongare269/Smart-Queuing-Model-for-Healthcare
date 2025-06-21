document.addEventListener("DOMContentLoaded", () => {
    const statusBox = document.getElementById("queue-details");

    // Initialize Firebase (Replace with your Firebase config)
    const firebaseConfig = {
        // Your Firebase configuration here
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Function to fetch and display queue status
    const fetchQueueStatus = () => {
        const patientId = "examplePatientID"; // Replace with actual patient ID logic

        db.collection("queue")
            .doc(patientId)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    statusBox.innerHTML = `
                        <strong>Queue Number:</strong> ${data.queueNumber}<br>
                        <strong>Doctor:</strong> ${data.doctor}<br>
                        <strong>Estimated Wait Time:</strong> ${data.estimatedWaitTime} mins<br>
                        <strong>Status:</strong> ${data.status}
                    `;
                } else {
                    statusBox.textContent = "No queue details found for the patient.";
                }
            })
            .catch((error) => {
                console.error("Error fetching queue status:", error);
                statusBox.textContent = "Unable to load queue details.";
            });
    };

    // Fetch queue status on page load
    fetchQueueStatus();
});
