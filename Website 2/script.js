// Simulasi Pembayaran E-Wallet
function showPaymentModal() {
    document.getElementById("payment-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("payment-modal").classList.add("hidden");
}

function payWith(ewallet) {
    const instruction = document.getElementById("payment-instruction");
    const detail = document.getElementById("payment-detail");
    
    // Simulasi instruksi pembayaran
    if (ewallet === "shopeepay") {
        detail.innerHTML = "1. Buka aplikasi ShopeePay<br>2. Scan QR code berikut: <b>1234-5678</b>";
    } else if (ewallet === "gopay") {
        detail.innerHTML = "1. Buka aplikasi Gojek<br>2. Bayar ke kode <b>987-654-321</b>";
    } else if (ewallet === "ovo") {
        detail.innerHTML = "1. Buka aplikasi OVO<br>2. Transfer ke <b>0812-3456-7890</b>";
    }
    
    instruction.classList.remove("hidden");
}

function checkPayment() {
    // Simulasi pembayaran berhasil
    alert("Pembayaran berhasil! Lanjutkan curhat.");
    closeModal();
    document.getElementById("user-input").disabled = false;
}

// Tampilkan modal setelah 3 pesan (contoh)
let messageCount = 0;
function sendMessage() {
    // ... (kode sebelumnya)
    messageCount++;
    if (messageCount >= 3) {
        showPaymentModal();
        document.getElementById("user-input").disabled = true;
    }
}