const videoPlayer = document.getElementById('video-player');
const rotationInput = document.getElementById('rotation');
const rotationValue = document.getElementById('rotation-value');

rotationInput.addEventListener('input', function () {
    const rotationDegree = this.value;
    videoPlayer.style.transform = `rotate(${rotationDegree}deg)`;
    rotationValue.innerText = `${rotationDegree} degrees`;
});
