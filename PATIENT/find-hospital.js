// document.addEventListener("DOMContentLoaded", () => {
//     const hospitalResults = document.getElementById("hospital-results");
//     const doctorList = document.getElementById("doctor-list");

//     document.getElementById("hospital-search-form").addEventListener("submit", (event) => {
//         event.preventDefault();
//         const location = document.getElementById("location").value;

//         // Simulate finding hospitals based on location
//         const hospitals = [
//             { name: "City Hospital", doctors: ["Dr. Smith", "Dr. Brown"] },
//             { name: "County Hospital", doctors: ["Dr. Green", "Dr. White"] }
//         ];

//         hospitalResults.innerHTML = "<h2>Nearby Hospitals</h2><ul>";
//         hospitals.forEach(hospital => {
//             const hospitalItem = document.createElement("li");
//             hospitalItem.textContent = hospital.name;
//             hospitalItem.addEventListener("click", () => loadDoctors(hospital.doctors));
//             hospitalResults.appendChild(hospitalItem);
//         });
//     });

//     function loadDoctors(doctors) {
//         doctorList.innerHTML = "<option value=''>Select a doctor</option>";
//         doctors.forEach(doctor => {
//             const option = document.createElement("option");
//             option.textContent = doctor;
//             doctorList.appendChild(option);
//         });
//     }

//     document.getElementById("confirm-doctor-btn").addEventListener("click", () => {
//         const selectedDoctor = doctorList.value;
//         if (selectedDoctor) {
//             alert(`Doctor ${selectedDoctor} selected.`);
//         } else {
//             alert("Please select a doctor.");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const hospitalResults = document.getElementById("hospital-results");
    const hospitalDetails = document.getElementById("hospital-details");

    document.getElementById("hospital-search-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const location = document.getElementById("location").value;

        // Simulate finding hospitals based on location (Firebase logic will replace this)
        const hospitals = [
            { name: "City Hospital", details: ["General OPD: 9AM-12PM", "Cardiology OPD: 1PM-3PM"] },
            { name: "County Hospital", details: ["Surgery OPD: 8AM-12PM", "Pediatrics OPD: 10AM-2PM"] }
        ];

        hospitalResults.innerHTML = "<h2>Nearby Hospitals</h2><ul>";
        hospitals.forEach(hospital => {
            const hospitalItem = document.createElement("li");
            hospitalItem.textContent = hospital.name;
            hospitalItem.addEventListener("click", () => loadHospitalDetails(hospital));
            hospitalResults.appendChild(hospitalItem);
        });
    });

    function loadHospitalDetails(hospital) {
        hospitalDetails.style.display = 'block';
        hospitalDetails.innerHTML = `<h3>Available OPD Slots</h3><ul>`;
        hospital.details.forEach(detail => {
            const detailItem = document.createElement("li");
            detailItem.textContent = detail;
            hospitalDetails.appendChild(detailItem);
        });
    }
});
