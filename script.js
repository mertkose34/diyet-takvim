document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Kullanıcı bilgilerini al
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value / 100; // Metre cinsinden
    const weight = document.getElementById("weight").value;
    const goal = document.getElementById("goal").value;

    // VKİ hesapla
    const vki = (weight / (height * height)).toFixed(2);

    // Bilgileri localStorage'a kaydet
    localStorage.setItem("userName", name);
    localStorage.setItem("userVKI", vki);
    localStorage.setItem("userGoal", goal);

    // Diyet takvimi sayfasına yönlendir
    window.location.href = "takvim.html";
});

// Kullanıcı bilgilerini göster
document.getElementById("userName").textContent = localStorage.getItem("userName");
document.getElementById("userVKI").textContent = localStorage.getItem("userVKI");
document.getElementById("userGoal").textContent = localStorage.getItem("userGoal");

// Takvimi oluştur
const calendar = document.getElementById("calendar");
const daysInMonth = 31; // Örnek olarak 31 günlük bir ay

for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerHTML = `
        <strong>Gün ${i}</strong>
        <p>Diyete uydunuz mu?</p>
        <button onclick="motivate(${i})">Evet</button>
    `;
    calendar.appendChild(dayDiv);
}

// Motivasyon mesajları
const messages = [
    "Harika iş çıkarıyorsun!",
    "Sen bir savaşçısın!",
    "Pes etme, hedefine çok yakınsın!",
    "Her adım seni hedefine biraz daha yaklaştırıyor."
];

function motivate(day) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(`Gün ${day}: ${randomMessage}`);
}