document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const department = document.getElementById("department").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("appointment-date").value;
        const time = document.getElementById("appointment-time").value;

        // Display a confirmation message
        alert(`Appointment confirmed!\nDepartment: ${department}\nDoctor: ${doctor}\nDate: ${date}\nTime: ${time}`);
        
        // Reset the form
        form.reset();
    });
});
