document.addEventListener("DOMContentLoaded", () => {
    const resources = [
        { hospital: "City Hospital", beds: 30, supplies: "100 units" },
        { hospital: "General Hospital", beds: 25, supplies: "80 units" },
        { hospital: "Health Center", beds: 20, supplies: "50 units" }
    ];

    const resourceTable = document.querySelector("#resource-table tbody");

    resources.forEach(resource => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${resource.hospital}</td><td>${resource.beds}</td><td>${resource.supplies}</td>`;
        resourceTable.appendChild(row);
    });
});
