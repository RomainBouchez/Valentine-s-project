document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const unlockButton = document.getElementById('unlockButton');

    // Date cible pour la Saint-Valentin (14 février 2024)
    const targetDate = new Date('2024-02-14T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            countdownElement.innerHTML = 'Joyeuse Saint-Valentin !';
            unlockButton.style.display = 'block';
            unlockButton.addEventListener('click', function() {
                window.location.href = 'photos.html';
            });
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
