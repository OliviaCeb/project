document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    const appointmentDate = document.getElementById("appointmentDate");
    const appointmentTime = document.getElementById("appointmentTime");

    // Stocare date rezervate
    const reservedSlots = {
        "2024-12-01": ["08:00", "09:30", "12:30"], // Exemplu date ocupate
        "2024-12-02": ["11:00", "15:30"]
    };

    // Eveniment pentru verificarea disponibilității
    appointmentTime.addEventListener("change", () => {
        const selectedDate = appointmentDate.value;
        const selectedTime = appointmentTime.value;

        if (!selectedDate) {
            alert("Selectați mai întâi o dată pentru programare!");
            appointmentTime.value = "";
            return;
        }

        // Verificare dacă ora este rezervată
        if (reservedSlots[selectedDate] && reservedSlots[selectedDate].includes(selectedTime)) {
            alert(`Ora ${selectedTime} este deja ocupată. Vă rugăm să alegeți altă oră.`);
            appointmentTime.value = "";
        }
    });

    // Gestionare trimitere formular
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const phone = form.phone.value.trim();
        const date = appointmentDate.value;
        const time = appointmentTime.value;

        if (!firstName || !lastName || !phone || !date || !time) {
            alert("Toate câmpurile sunt obligatorii!");
            return;
        }

        // Adăugare programare în lista rezervată
        if (!reservedSlots[date]) {
            reservedSlots[date] = [];
        }
        reservedSlots[date].push(time);

        alert(`Programare realizată cu succes pentru ${firstName} ${lastName} la ${date} ora ${time}.`);
        form.reset();
    });
});
