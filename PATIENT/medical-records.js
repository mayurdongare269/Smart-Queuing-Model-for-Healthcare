// Function to download medical records as a text file
function downloadRecords() {
    const records = `Medical Records:
    
    Appointment with Dr. John Doe - Oct 1st, 2024
    Prescription: Medicine A, Medicine B
    Lab Test Results - Oct 5th, 2024
    `;
    
    const blob = new Blob([records], { type: 'text/plain' });
    
    // Create a link element for downloading
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'medical_records.txt';
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
}

function showRecordDetails(record) {
    const modal = document.getElementById('record-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `<p>${record}</p>`;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('record-modal');
    modal.style.display = 'none';
}

document.getElementById('download-btn').addEventListener('click', function() {
    downloadRecords();
});

document.querySelector('.records-buttons button:nth-child(2)').addEventListener('click', function(event) {
    const confirmLeave = confirm("Are you sure you want to leave this page?");
    if (!confirmLeave) {
        event.preventDefault(); 
    }
});

document.querySelectorAll('.records-list li').forEach(item => {
    item.addEventListener('click', function() {
        showRecordDetails(item.innerText);
    });
});

document.getElementById('close-modal').addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('record-modal');
    if (event.target === modal) {
        closeModal();
    }
});
