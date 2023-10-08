const videoPlayer = document.getElementById('video-player');
const playPauseButton = document.getElementById('play-pause-button');
const rotateButton = document.getElementById('rotate-button');
let isPlaying = false;
let isRotated = false;

playPauseButton.addEventListener('click', function () {
    if (isPlaying) {
        videoPlayer.pause();
        playPauseButton.innerText = 'Play';
    } else {
        videoPlayer.play();
        playPauseButton.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
});

rotateButton.addEventListener('click', function () {
    if (isRotated) {
        videoPlayer.style.transform = 'rotate(0deg)';
    } else {
        videoPlayer.style.transform = 'rotate(90deg)';
    }
    isRotated = !isRotated;
});
