document.addEventListener("DOMContentLoaded", () => {
    const features = [
        { name: "Patient Details", page: "patient-details.html" },
        { name: "Book Appointment", page: "book-appointment.html" },
        { name: "Medical Records", page: "medical-records.html" },
        { name: "Bed Availability", page: "bed-availability.html" },
        { name: "Queue Status", page: "queue-status.html" }
    ];

    const dashboardSection = document.getElementById("dashboard-section");
    
    // features.forEach(feature => {
    //     const card = document.createElement("div");
    //     card.classList.add("card");
    //     card.innerHTML = `<h3>${feature.name}</h3>`;
    //     card.addEventListener("click", () => {
    //         window.location.href = feature.page;
    //     });
    //     dashboardSection.appendChild(card);
    // });
});
