document.addEventListener("DOMContentLoaded", () => {
    const patientData = {
        photo: "profile-icon.jpg", // Replace with actual photo path
        name: "John Doe",
        age: 45,
        contact: "+1-234-567-890",
        address: "742 Evergreen Terrace, Springfield, USA",
        medicalHistory: ["Hypertension", "Diabetes", "Recent Surgery - Appendectomy (March 2024)"]
    };

    document.getElementById("patient-photo").src = patientData.photo;
    document.getElementById("patient-name").textContent = patientData.name;
    document.getElementById("patient-age").textContent = patientData.age;
    document.getElementById("patient-contact").textContent = patientData.contact;
    document.getElementById("patient-address").textContent = patientData.address;

    const historyList = document.getElementById("patient-history");
    patientData.medicalHistory.forEach(condition => {
        const li = document.createElement("li");
        li.textContent = condition;
        historyList.appendChild(li);
    });
});


