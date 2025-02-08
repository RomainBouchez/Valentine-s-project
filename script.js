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


document.getElementById("download-selected").addEventListener("click", function() {
    const zip = new JSZip();
    const selectedPhotos = document.querySelectorAll(".photo input[type='checkbox']:checked");

    if (selectedPhotos.length === 0) {
        alert("Veuillez sélectionner au moins une photo.");
        return;
    }

    let count = 0;
    selectedPhotos.forEach((checkbox) => {
        const img = checkbox.parentElement.querySelector("img");
        const imgSrc = img.src;
        const imgName = imgSrc.split('/').pop();

        fetch(imgSrc)
            .then(response => response.blob())
            .then(blob => {
                zip.file(imgName, blob);
                count++;
                if (count === selectedPhotos.length) {
                    zip.generateAsync({ type: "blob" }).then(function(content) {
                        const link = document.createElement("a");
                        link.href = URL.createObjectURL(content);
                        link.download = "photos.zip";
                        link.click();
                    });
                }
            });
    });
});

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("download-btn").href = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
