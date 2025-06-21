document.addEventListener("DOMContentLoaded", () => {
    const policies = [
        { hospital: "City Hospital", compliant: true },
        { hospital: "General Hospital", compliant: false },
        { hospital: "Health Center", compliant: true }
    ];

    const complianceList = document.getElementById("compliance-list");

    policies.forEach(policy => {
        const li = document.createElement("li");
        li.textContent = `${policy.hospital} is ${policy.compliant ? 'Compliant' : 'Non-Compliant'}`;
        complianceList.appendChild(li);
    });
});
