document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const unlockButton = document.getElementById('unlockButton');
    const messageElement = document.getElementById('message');
    const modal = document.getElementById('modal'); 
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    // Set Valentine's Day countdown date
    const countDownDate = new Date("Feb 08, 2025 20:06:10").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance <= 0) {
            clearInterval(countdownFunction);
            countdownElement.innerHTML = "Joyeuse Saint-Valentin !";
            unlockButton.disabled = false;
            unlockButton.onclick = function() {
                window.location.href = "photos.html";
            };
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            unlockButton.disabled = true;

            unlockButton.onclick = function() {
                modalMessage.innerHTML = `You can't access before Valentine's Day! (${days} days left)`;
                modal.style.display = "block";
            };
        }
    }

    const countdownFunction = setInterval(updateCountdown, 1000);
    updateCountdown(); 

    // Modal close function
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
