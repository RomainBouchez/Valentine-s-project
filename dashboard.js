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
            id: 'calendar',
            icon: '📅',
            title: 'Nos Dates',
            preview: `
                <div class="preview-calendar">
                    Prochain rendez-vous: 14 Février 2025
                </div>
            `,
            content: `
                <div id="calendar"></div>
            `
        }
    ];

    const appsGrid = document.getElementById('appsGrid');
    const appContent = document.getElementById('appContent');
    const contentContainer = document.getElementById('contentContainer');
    const backButton = document.getElementById('backButton');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox .close');

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

    function initializeAppFeatures(app) {
        if (app.id === 'photos') {
            initializePhotoFeatures();
        } else if (app.id === 'playlist') {
            initializePlaylistFeatures();
        } else if (app.id === 'calendar') {
            initializeCalendar();
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

    function initializeCalendar() {
        const calendarEl = document.getElementById('calendar');

        if (calendarEl) {
            const calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                events: [
                    { title: 'Premier rendez-vous', start: '2025-02-14' },
                    { title: 'Premier dîner ensemble', start: '2024-01-15' }
                ]
            });

            calendar.render();
        }
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
});
