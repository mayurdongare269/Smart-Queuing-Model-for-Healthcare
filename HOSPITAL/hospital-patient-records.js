document.addEventListener("DOMContentLoaded", () => {
    const recordsList = document.getElementById("records-list");
    const form = document.getElementById("patient-records-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const patientName = document.getElementById("patient-name").value;
        const patientCondition = document.getElementById("patient-condition").value;
        const admissionDate = document.getElementById("admission-date").value;

        const li = document.createElement("li");
        li.textContent = `Name: ${patientName}, Condition: ${patientCondition}, Admission Date: ${admissionDate}`;
        recordsList.appendChild(li);
        
        alert(`Record for ${patientName} has been added.`);
        form.reset();
    });
});
