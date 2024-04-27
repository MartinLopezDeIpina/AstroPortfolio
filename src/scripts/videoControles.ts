document.addEventListener('DOMContentLoaded', (event) => {
    const videoPlayers = document.querySelectorAll('#videoPlayer') as NodeListOf<HTMLVideoElement>;

    videoPlayers.forEach(videoPlayer => {
        const progressValue = videoPlayer.parentNode.querySelector('.progress-value') as HTMLElement;
        const progressBar = videoPlayer.parentNode.querySelector('.progress') as HTMLElement;
        const pauseButton = videoPlayer.parentNode.querySelector('.botonPausa');
        const pauseButtonPath = pauseButton.querySelector('path');

        setTimer();

        videoPlayer.addEventListener('pause', () => {
            videoPlayer.classList.remove('playing');
            videoPlayer.classList.add('paused');
            pauseButtonPath.setAttribute('d', 'M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z');
            pauseButtonPath.classList.remove('svgPause');
        });
        videoPlayer.addEventListener('play', () => {
            videoPlayer.classList.remove('paused');
            videoPlayer.classList.add('playing');
            pauseButtonPath.setAttribute('d', 'M8 5V19M16 5V19 stroke-width="3"');
            pauseButtonPath.classList.add('svgPause');
        });

        function updateProgressIfPlaying() {
            if (videoPlayer.paused) return;  
            updateProgress();
        }

        function updateProgress(){
            const progress = videoPlayer.currentTime / videoPlayer.duration;
            progressValue.style.width = progress * 100 + '%';
        }

        function setTimer(){
            setInterval(updateProgressIfPlaying, 10);
        }

        progressBar.addEventListener('click', (event) => {
            const progressBarRect = progressBar.getBoundingClientRect();
            const progress = (event.clientX - progressBarRect.left) / progressBarRect.width;
            videoPlayer.currentTime = videoPlayer.duration * progress;
            updateProgress();
        });


        pauseButton.addEventListener('click', () => {
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoPlayer.play();
                } else {
                    videoPlayer.pause();
                }
            });
        });

        observer.observe(videoPlayer);
    });
});