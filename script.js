// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Modal Logic ---
    const envelopeCards = document.querySelectorAll('.envelope-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButtons = document.querySelectorAll('.close-btn');
    const modals = document.querySelectorAll('.modal');

    // Open Modal
    envelopeCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);

            if (targetModal) {
                modalOverlay.classList.remove('hidden');
                targetModal.classList.remove('hidden');
            }
        });
    });

    // Close Modal via button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });

    // Close Modal via clicking outside (on overlay)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });

    function closeAllModals() {
        modalOverlay.classList.add('hidden');
        modals.forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    // --- Countdown Timer Logic ---
    // Target Date: May 3, 2026 00:00:00
    const targetDate = new Date('May 3, 2026 00:00:00').getTime();

    const cdMonths = document.getElementById('cd-months');
    const cdDays = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMinutes = document.getElementById('cd-minutes');
    const cdSeconds = document.getElementById('cd-seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            // Reached target date
            cdMonths.innerText = '0';
            cdDays.innerText = '0';
            cdHours.innerText = '0';
            cdMinutes.innerText = '0';
            cdSeconds.innerText = '0';
            return;
        }

        // Time calculations
        // Note: Months calculation is tricky and an approximation (average 30.44 days per month).
        // For a more precise approach, we'd use Date objects for differences, but standard ms math is often sufficient.

        let currentDate = new Date();
        let targetDateObj = new Date(targetDate);

        // Calculate differences
        let years = targetDateObj.getFullYear() - currentDate.getFullYear();
        let months = targetDateObj.getMonth() - currentDate.getMonth();
        let days = targetDateObj.getDate() - currentDate.getDate();

        if (days < 0) {
            months--;
            // Get days in previous month
            let copyDate = new Date(targetDateObj.getFullYear(), targetDateObj.getMonth(), 0);
            days += copyDate.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        let totalMonths = (years * 12) + months;

        // Calculate hours, minutes, seconds from remainder
        // To get the remainder, subtract the year/month/day calculation from the total difference
        // A simpler way: just use standard ms difference for hours, mins, secs, and ignore the day boundaries of the overall calc
        // wait, `days` calculation already accounts for it. Let's just calculate hours/mins/secs on the current day.

        let hours = targetDateObj.getHours() - currentDate.getHours();
        let minutes = targetDateObj.getMinutes() - currentDate.getMinutes();
        let seconds = targetDateObj.getSeconds() - currentDate.getSeconds();

        if (seconds < 0) {
            minutes--;
            seconds += 60;
        }
        if (minutes < 0) {
            hours--;
            minutes += 60;
        }
        if (hours < 0) {
            // We already calculated days, but if hours wrap around, we need to subtract a day.
            // Since we calculated days using dates, we need to adjust:
            // Actually, if right now is 18:00 and target is 00:00, hours = 0 - 18 = -18.
            // That means we borrow a day.
            days--;
            hours += 24;
            if (days < 0) {
                // If days go negative, borrow a month.
                months--;
                if (months < 0) {
                    years--;
                    months += 12;
                }
                // Recalculate days in the new previous month
                let prevMonth = targetDateObj.getMonth() - 1;
                let prevYear = targetDateObj.getFullYear();
                if (prevMonth < 0) { prevMonth = 11; prevYear--; }
                let daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
                days += daysInPrevMonth;
            }
            // Recalculate totalMonths
            totalMonths = (years * 12) + months;
        }

        cdMonths.innerText = totalMonths;
        cdDays.innerText = days;
        cdHours.innerText = hours;
        cdMinutes.innerText = minutes;
        cdSeconds.innerText = seconds;
    }

    // Initial call
    updateCountdown();
    // Update every second
    setInterval(updateCountdown, 1000);
});
