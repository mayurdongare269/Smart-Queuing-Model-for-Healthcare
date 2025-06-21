// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("appointment-form");

//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const department = document.getElementById("department").value;
//         const doctor = document.getElementById("doctor").value;
//         const date = document.getElementById("appointment-date").value;
//         const time = document.getElementById("appointment-time").value;

//         // Validation
//         if (!department || !doctor || !date || !time) {
//             alert("Please fill in all fields before confirming your appointment.");
//             return;
//         }

//         // Confirmation alert
//         alert(`Appointment confirmed with ${doctor} in ${department} department on ${date} at ${time}.`);
//         form.reset();
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const departmentSelect = document.getElementById("department");
    const doctorSelect = document.getElementById("doctor");
    const doctorSlotDetails = document.getElementById("doctor-slot-details");

    departmentSelect.addEventListener("change", () => {
        const department = departmentSelect.value;

        if (department) {
            // Fetch available doctors for the selected department (Firebase logic will replace this)
            const doctors = [
                { name: "Dr. John Doe", slots: ["9AM-12PM", "1PM-3PM"] },
                { name: "Dr. Jane Smith", slots: ["10AM-1PM", "2PM-4PM"] }
            ];

            doctorSelect.innerHTML = "<option value=''>Select Doctor</option>";
            doctors.forEach(doctor => {
                const option = document.createElement("option");
                option.textContent = doctor.name;
                doctorSelect.appendChild(option);
            });

            doctorSlotDetails.style.display = 'none';
        }
    });

    doctorSelect.addEventListener("change", () => {
        const doctorName = doctorSelect.value;

        if (doctorName) {
            // Fetch available slots for the selected doctor (Firebase logic will replace this)
            const doctor = { name: "Dr. John Doe", slots: ["9AM-12PM", "1PM-3PM"] };

            doctorSlotDetails.style.display = 'block';
            doctorSlotDetails.innerHTML = `<h3>Available Slots</h3><ul>`;
            doctor.slots.forEach(slot => {
                const slotItem = document.createElement("li");
                slotItem.textContent = slot;
                doctorSlotDetails.appendChild(slotItem);
            });
        }
    });

    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const department = document.getElementById("department").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("appointment-date").value;
        const time = document.getElementById("appointment-time").value;

        // Validation
        if (!department || !doctor || !date || !time) {
            alert("Please fill in all fields before confirming your appointment.");
            return;
        }

        // Confirmation alert
        alert(`Appointment confirmed with ${doctor} in ${department} department on ${date} at ${time}.`);
        form.reset();
    });
});

