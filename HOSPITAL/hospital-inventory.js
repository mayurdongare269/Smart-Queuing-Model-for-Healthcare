document.addEventListener("DOMContentLoaded", () => {
    const inventoryList = document.getElementById("inventory-list");
    const form = document.getElementById("inventory-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const itemName = document.getElementById("item-name").value;
        const itemQuantity = document.getElementById("item-quantity").value;

        const li = document.createElement("li");
        li.textContent = `${itemName} - Quantity: ${itemQuantity}`;
        inventoryList.appendChild(li);
        
        alert(`${itemName} has been added to the inventory.`);
        form.reset();
    });
});
