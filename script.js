const dropZone = document.getElementById('dropZone');
const videoPlayer = document.getElementById('videoPlayer');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    playVideo(file);
});

document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    playVideo(file);
});

function playVideo(file) {
    const videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
    videoPlayer.play();
}
