// document.addEventListener("DOMContentLoaded", () => {
//     const upcomingAppointments = [
//         { patient: "John Doe", date: "Nov 10th, 2024" },
//         { patient: "Jane Smith", date: "Nov 12th, 2024" }
//     ];
    
//     const notifications = [
//         "New inventory received.",
//         "Patient John Doe has been admitted."
//     ];
  
//     loadAppointments(upcomingAppointments);
//     loadNotifications(notifications);
// });

function loadAppointments(appointments) {
    const appointmentList = document.querySelector(".upcoming ul");
    if (appointments.length > 0) {
        appointments.forEach(appointment => {
            const li = document.createElement("li");
            li.textContent = `${appointment.patient} - ${appointment.date}`;
            appointmentList.appendChild(li);
        });
    } else {
        appointmentList.textContent = "No upcoming appointments.";
    }
}

function loadNotifications(notificationList) {
    const notificationCard = document.querySelector(".notify p");
    if (notificationList.length > 0) {
        notificationCard.textContent = notificationList.join("\n");
    } else {
        notificationCard.textContent = "No new notifications.";
    }
}
