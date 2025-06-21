document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bed-update-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const bedType = document.getElementById("bed-type").value;
        const status = document.getElementById("update-status").value;

        // Update bed status
        if (status === "Occupied") {
            let occupiedBeds = parseInt(document.getElementById("occupied-beds").textContent);
            let availableBeds = parseInt(document.getElementById("available-beds").textContent);

            if (availableBeds > 0) {
                occupiedBeds++;
                availableBeds--;
                document.getElementById("occupied-beds").textContent = occupiedBeds;
                document.getElementById("available-beds").textContent = availableBeds;
                alert(`Status updated: ${bedType} bed is now ${status}.`);
            } else {
                alert("No available beds to occupy.");
            }
        } else {
            let availableBeds = parseInt(document.getElementById("available-beds").textContent);
            let occupiedBeds = parseInt(document.getElementById("occupied-beds").textContent);

            occupiedBeds--;
            availableBeds++;
            document.getElementById("occupied-beds").textContent = occupiedBeds;
            document.getElementById("available-beds").textContent = availableBeds;
            alert(`Status updated: ${bedType} bed is now ${status}.`);
        }
        
        form.reset();
    });
});
