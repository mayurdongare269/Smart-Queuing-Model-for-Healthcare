// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("order-form");

//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const medicine = document.getElementById("medicine").value;
//         const quantity = document.getElementById("quantity").value;

//         if (medicine && quantity > 0) {
//             alert(`Order placed for ${quantity} unit(s) of ${medicine}.`);
//             form.reset();
//         } else {
//             alert("Please fill in all fields correctly.");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("order-form");
    const placedOrdersList = document.getElementById("placed-orders-list");
    const pastOrdersList = document.getElementById("past-orders-list");

    // Initialize Firebase (Add your Firebase config here)
    const firebaseConfig = {
        // Your Firebase configuration
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Fetch and display orders
    const fetchOrders = () => {
        db.collection("orders")
            .get()
            .then((querySnapshot) => {
                placedOrdersList.innerHTML = "";
                pastOrdersList.innerHTML = "";
                querySnapshot.forEach((doc) => {
                    const order = doc.data();
                    const li = document.createElement("li");
                    li.textContent = `${order.medicine} - ${order.quantity}`;
                    if (order.status === "placed") {
                        placedOrdersList.appendChild(li);
                    } else if (order.status === "past") {
                        pastOrdersList.appendChild(li);
                    }
                });
            })
            .catch((error) => console.error("Error fetching orders:", error));
    };

    // Handle new order submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const medicine = document.getElementById("medicine").value;
        const quantity = document.getElementById("quantity").value;

        if (medicine && quantity > 0) {
            db.collection("orders")
                .add({
                    medicine,
                    quantity,
                    status: "placed",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(() => {
                    alert("Order placed successfully!");
                    form.reset();
                    fetchOrders();
                })
                .catch((error) => console.error("Error placing order:", error));
        } else {
            alert("Please fill in all fields correctly.");
        }
    });

    // Initial fetch
    fetchOrders();
});
