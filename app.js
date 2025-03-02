const videoIds = ['projectVideo1', 'projectVideo2', 'projectVideo3', 'projectVideo4'];
const videos = videoIds.map(id => document.getElementById(id));
const hoverSign = document.querySelector(".hover-sign");  

videos.forEach(video => {
    if (video) {
        video.addEventListener('mouseover', () => {
            video.play().catch(error => console.error('Playback failed:', error));
            hoverSign.classList.add("active");
        });

        video.addEventListener('mouseout', () => {
            video.pause();
            hoverSign.classList.remove("active");
        });
    }
});
