document.addEventListener('DOMContentLoaded', function() {
    const apps = [
        {
            id: 'photos',
            icon: '📸',
            title: 'Nos Photos',
            preview: `
                <div class="preview-photos">
                    <img src="photo1.jpg" alt="Preview 1">
                    <img src="photo2.jpg" alt="Preview 2">
                    <img src="photo3.jpg" alt="Preview 3">
                </div>
            `,
            content: `
                <div class="photo-gallery">
                    <div class="photo">
                        <input type="checkbox" class="select-photo">
                        <img src="photo1.jpg" alt="Photo 1" onclick="openLightbox('photo1.jpg')">
                    </div>
                    <div class="photo">
                        <input type="checkbox" class="select-photo">
                        <img src="photo2.jpg" alt="Photo 2" onclick="openLightbox('photo2.jpg')">
                    </div>
                    <div class="photo">
                        <input type="checkbox" class="select-photo">
                        <img src="photo3.jpg" alt="Photo 3" onclick="openLightbox('photo3.jpg')">
                    </div>
                </div>
                <button id="download-selected" class="download-btn">Télécharger la sélection</button>
            `
        },
        {
            id: 'messages',
            icon: '💌',
            title: 'Nos Messages',
            preview: `
                <div class="preview-message">
                    "Je pense à toi tous les jours..."
                </div>
            `,
            content: `
                <div class="messages-container">
                    <h2>First Messages</h2>
                    </div>
                    <div class="imessage">
                        <div class="message-info">
                            <div class="message-senderfrom-them">Romain</div>
                        </div>
                            <p class="from-them">It was a great night 🥰
                            Hope we can spend more time together.</p>
                            <div class="message-datefrom-them">12/11/2023 05:03</div>
                    </div>
                    
                    <h2>Your Felling</h2>
                    <div class="imessage">
                        <div class="message-info">
                            <div class="message-senderfrom-me">Me</div>
                        </div>
                        <p class="from-me no-tail margin-b_none">Ah</p>
                        <p class="from-me">I can't describe all my feelings</p>
                        <div class="message-info">
                            <div class="message-datefrom-me">10 Feb 2025</div>
                        </div>
                        
                        <div class="message-info">
                            <div class="message-senderfrom-them">Romain</div>
                        </div>
                        <p class="from-them no-tail margin-b_none">I understand</p>
                        <p class="from-them">I have the same thing</p>
                        <div class="message-info">
                            <div class="message-date">10 Feb 2025</div>
                        </div>

                        <div class="message-info">
                            <div class="message-senderfrom-me">Me</div>
                        </div>
                        <p class="from-me no-tail margin-b_none">No</p>
                        <p class="from-me no-tail margin-b_none">Not in that way</p>
                        <p class="from-me">I meant I can't describe cause they are too much feelings for you</p>
                        <div class="message-info">
                            <div class="message-datefrom-me">10 Feb 2025</div>
                        </div>
                    </div>

                    <h2>Your Project</h2>
                    <div class="imessage">
                        <div class="message-info">
                            <div class="message-senderfrom-me">Me</div>
                        </div>
                        <p class="from-me no-tail margin-b_none">what if i do my master in France somewhere so I can be close to you</p>
                        <p class="from-me no-tail margin-b_none margin-t_none">Imagine</p>
                        <p class="from-me">Either way I wouldnt do it on Greece</p>
                        <div class="message-info">
                            <div class="message-datefrom-me">10 Feb 2025</div>
                            
                        </div>
                        <div class="message-info">
                            <div class="message-senderfrom-them">Romain</div>
                        </div>
                        <p class="from-them no-tail margin-b_none">First - it's you choice</p>
                        <p class="from-them no-tail margin-b_none">Two - do your choice for your future</p>
                        <p class="from-them no-tail margin-b_none">Three - You will improve your French</p>
                        <p class="from-them">Four - It will be much easier to see each other and more often</p>
                        <div class="message-info">
                            <div class="message-date">10 Feb 2025</div>
                            
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'playlist',
            icon: '🎵',
            title: 'Our Playlist',
            preview: `
                <div class="preview-playlist">
                    ♪ Notre playlist spéciale
                </div>
            `,
            content: `
                <div class="playlist-container">
                    <div class="playlist-header">
                        <div class="playlist-cover">
                            <img src="/api/placeholder/232/232" alt="Playlist cover">
                        </div>
                        <div class="playlist-info">
                            <div class="playlist-type">Playlist</div>
                            <h1 class="playlist-title">Our Playlist</h1>
                            <div class="playlist-description">Notre collection de chansons spéciales ❤️</div>
                            <div class="playlist-meta">
                                <span>Créé pour Mika</span> • <span>5 titres</span>
                            </div>
                        </div>
                    </div>

                    <div class="song-list">
                        <div class="song-header">
                            <div>#</div>
                            <div>Title</div>
                            <div>Album</div>
                            <div>Durée</div>
                        </div>
                        <div class="song-item" data-duration="4:23">
                            <div class="song-number">1</div>
                            <div class="song-info">
                                <div class="song-title">Perfect</div>
                                <div class="song-artist">Ed Sheeran</div>
                            </div>
                            <div class="song-album">÷ (Divide)</div>
                            <div class="song-duration">4:23</div>
                        </div>
                        <div class="song-item" data-duration="4:29">
                            <div class="song-number">2</div>
                            <div class="song-info">
                                <div class="song-title">All of Me</div>
                                <div class="song-artist">John Legend</div>
                            </div>
                            <div class="song-album">Love in the Future</div>
                            <div class="song-duration">4:29</div>
                        </div>
                        <div class="song-item" data-duration="3:58">
                            <div class="song-number">3</div>
                            <div class="song-info">
                                <div class="song-title">Can't Help Falling in Love</div>
                                <div class="song-artist">Elvis Presley</div>
                            </div>
                            <div class="song-album">Blue Hawaii</div>
                            <div class="song-duration">3:58</div>
                        </div>
                        <div class="song-item" data-duration="3:25">
                            <div class="song-number">4</div>
                            <div class="song-info">
                                <div class="song-title">Just the Way You Are</div>
                                <div class="song-artist">Bruno Mars</div>
                            </div>
                            <div class="song-album">Doo-Wops & Hooligans</div>
                            <div class="song-duration">3:25</div>
                        </div>
                        <div class="song-item" data-duration="4:02">
                            <div class="song-number">5</div>
                            <div class="song-info">
                                <div class="song-title">At Last</div>
                                <div class="song-artist">Etta James</div>
                            </div>
                            <div class="song-album">At Last!</div>
                            <div class="song-duration">4:02</div>
                        </div>
                    </div>
                </div>
            `
        },
        
        {
            id: 'map',
            icon: '🗺️',
            title: 'Nos Aventures',
            preview: `
                <div class="preview-map">
                    🗺️ Notre carte des souvenirs
                </div>
            `,
            content: `
                <div class="map-container">
                    <div id="adventure-map" style="height: 600px; width: 100%;"></div>
                </div>
            `
        },
    ];

    const appsGrid = document.getElementById('appsGrid');
    const appContent = document.getElementById('appContent');
    const contentContainer = document.getElementById('contentContainer');
    const backButton = document.getElementById('backButton');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox .close');
    let map;

    // Create app cards
    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <div class="app-header">
                <span class="app-icon">${app.icon}</span>
                <h2 class="app-title">${app.title}</h2>
            </div>
            <div class="preview-container">
                ${app.preview}
            </div>
        `;
        appCard.onclick = () => showAppContent(app);
        appsGrid.appendChild(appCard);
    });

    function showAppContent(app) {
        appsGrid.classList.add('hidden');
        appContent.classList.remove('hidden');
        contentContainer.innerHTML = `
            ${app.content}
        `;
        initializeAppFeatures(app);
    }

    backButton.onclick = () => {
        appContent.classList.add('hidden');
        appsGrid.classList.remove('hidden');
    };

    // Lightbox functionality
    window.openLightbox = function(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
    };

    lightboxClose.onclick = function() {
        lightbox.style.display = 'none';
    };

    lightbox.onclick = function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    };

    async function initializeAppFeatures(app) {
        if (app.id === 'photos') {
            initializePhotoFeatures();
        } else if (app.id === 'playlist') {
            initializePlaylistFeatures();
        } else if (app.id === 'map') {
            initializeMap();
        }
    }

    function initializePhotoFeatures() {
        const downloadButton = document.getElementById('download-selected');
        if (downloadButton) {
            downloadButton.addEventListener('click', function() {
                const selectedPhotos = document.querySelectorAll('.select-photo:checked');
                if (selectedPhotos.length === 0) {
                    alert('Veuillez sélectionner au moins une photo.');
                    return;
                }
                downloadSelectedPhotos(selectedPhotos);
            });
        }
    }

    function initializePlaylistFeatures() {
        const songItems = document.querySelectorAll('.song-item');
        let currentlyPlaying = null;

        songItems.forEach(song => {
            const playButton = song.querySelector('.play-button');

            playButton.addEventListener('click', function(e) {
                e.stopPropagation();

                // If this song is already playing, pause it
                if (song === currentlyPlaying) {
                    song.classList.remove('playing');
                    playButton.innerHTML = '▶';
                    currentlyPlaying = null;
                    return;
                }

                // Stop currently playing song if any
                if (currentlyPlaying) {
                    currentlyPlaying.classList.remove('playing');
                    currentlyPlaying.querySelector('.play-button').innerHTML = '▶';
                }

                // Play this song
                song.classList.add('playing');
                playButton.innerHTML = '⏸';
                currentlyPlaying = song;
            });

            // Hover effect for play button
            song.addEventListener('mouseenter', function() {
                if (song !== currentlyPlaying) {
                    playButton.style.opacity = '1';
                }
            });

            song.addEventListener('mouseleave', function() {
                if (song !== currentlyPlaying) {
                    playButton.style.opacity = '0';
                }
            });
        });
    }

    function downloadSelectedPhotos(selectedPhotos) {
        const zip = new JSZip();
        let count = 0;

        selectedPhotos.forEach(checkbox => {
            const img = checkbox.parentElement.querySelector('img');
            const imgSrc = img.src;
            const imgName = imgSrc.split('/').pop();

            fetch(imgSrc)
                .then(response => response.blob())
                .then(blob => {
                    zip.file(imgName, blob);
                    count++;
                    if (count === selectedPhotos.length) {
                        zip.generateAsync({ type: 'blob' })
                            .then(content => {
                                saveAs(content, 'nos_photos.zip');
                            });
                    }
                });
        });
    }

    // Handle escape key for lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });


    function initializeMap() {
        // Check if map instance already exists and remove it
        if (map) {
            map.remove();
        }
    
        // Adventures data
        const adventures = [
            {
                id: 1,
                name: "Premier Rendez-vous à Paris",
                date: "11 Dec 2023",
                lat: 48.8566,
                lng: 2.3522,
                description: "Notre première rencontre magique",
                image: "/api/placeholder/300/200" // Using placeholder for testing
            },
            {
                id: 2,
                name: "Weekend à Lyon",
                date: "15 Jan 2024",
                lat: 45.7578,
                lng: 4.8320,
                description: "Un weekend inoubliable ensemble",
                image: "/api/placeholder/300/200" // Using placeholder for testing
            },
            {
                id: 3,
                name: "Vacances à Nice",
                date: "10 Feb 2024",
                lat: 43.7102,
                lng: 7.2620,
                description: "Des moments parfaits au bord de la mer",
                image: "/api/placeholder/300/200" // Using placeholder for testing
            }
        ];
    
        // Initialize map
        map = L.map('adventure-map').setView([47.5260, 20.2551], 4);
        
        // Add tile layer with fewer roads
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);
    
        // Custom marker icon
        const customIcon = L.divIcon({
            html: `
                <div style="
                    width: 32px;
                    height: 32px;
                    background-color:rgba(239, 68, 68, 0);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transform-origin: bottom;
                    transition: transform 0.3s ease;
                ">
                    <img src="Heart.svg" alt="Heart" style="width: 32px; height: 32px;">
                </div>
            `,
            className: 'custom-marker',
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });
    
        // Add markers
        adventures.forEach(adventure => {
            const marker = L.marker([adventure.lat, adventure.lng], { icon: customIcon })
                .addTo(map);
    
            const popupContent = document.createElement('div');
            popupContent.className = 'adventure-popup';
            popupContent.innerHTML = `
                <div style="
                    padding: 1rem;
                    min-width: 200px;
                    max-width: 300px;
                ">
                    <h3 style="
                        font-size: 1.125rem;
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                    ">${adventure.name}</h3>
                    <p style="
                        font-size: 0.875rem;
                        color: #666;
                        margin-bottom: 0.5rem;
                    ">${adventure.date}</p>
                    <img src="${adventure.image}" 
                        alt="${adventure.name}" 
                        style="
                            width: 100%;
                            height: 150px;
                            object-fit: cover;
                            border-radius: 0.375rem;
                            margin-bottom: 0.5rem;
                            transition: transform 0.3s ease;
                        "
                    />
                    <p style="
                        font-size: 0.875rem;
                        color: #333;
                    ">${adventure.description}</p>
                </div>
            `;
    
            marker.bindPopup(popupContent, {
                maxWidth: 300,
                className: 'adventure-popup'
            });
    
            // Add hover effects
            marker.on('mouseover', function() {
                this.getElement().querySelector('div').style.transform = 'scale(1.1)';
            });
            marker.on('mouseout', function() {
                this.getElement().querySelector('div').style.transform = 'scale(1)';
            });
        });
    
        // Add CSS
        if (!document.querySelector('#map-styles')) {
            const style = document.createElement('style');
            style.id = 'map-styles';
            style.textContent = `
                .adventure-popup .leaflet-popup-content-wrapper {
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                .adventure-popup .leaflet-popup-content {
                    margin: 0;
                }
                .custom-marker {
                    background: none;
                    border: none;
                }
                
            `;
            document.head.appendChild(style);
        }
    
        // Force a resize event to ensure the map renders correctly
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});
