const videoPlayer = document.getElementById('video-player');
const rotateButton = document.getElementById('rotate-button');
let isRotated = false;

rotateButton.addEventListener('click', function () {
    if (isRotated) {
        videoPlayer.style.transform = 'rotate(0deg)';
    } else {
        videoPlayer.style.transform = 'rotate(90deg)';
    }
    isRotated = !isRotated;
});
