document.addEventListener("DOMContentLoaded", () => {
    // Mock data for demonstration
    const totalHospitals = 10;
    const availableBeds = 150;
    const patientsAdmitted = 320;

    // Update the dashboard with mock data
    document.getElementById("total-hospitals").textContent = totalHospitals;
    document.getElementById("available-beds").textContent = availableBeds;
    document.getElementById("patients-admitted").textContent = patientsAdmitted;
});
