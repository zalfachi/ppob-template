document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const customerId = document.getElementById("customerId").value;
    if (customerId) {
        document.getElementById("paymentResult").innerText = "Tagihan ditemukan untuk ID: " + customerId;
    } else {
        alert("Harap masukkan ID pelanggan");
    }
});