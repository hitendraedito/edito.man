
document.addEventListener('DOMContentLoaded', function() {
  // Handle video players
  const videoContainers = document.querySelectorAll('.video-container');
  
  videoContainers.forEach(container => {
    const video = container.querySelector('.video-player');
    const playPauseBtn = container.querySelector('.play-pause');
    const muteBtn = container.querySelector('.mute');
    const progress = container.querySelector('.progress');
    const progressBar = container.querySelector('.progress-bar');
    
    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        // Pause all other videos
        document.querySelectorAll('.video-player').forEach(v => {
          if (v !== video) {
            v.pause();
            const otherBtn = v.parentElement.querySelector('.play-pause i');
            otherBtn.className = 'fas fa-play';
          }
        });
        
        video.play();
        playPauseBtn.querySelector('i').className = 'fas fa-pause';
      } else {
        video.pause();
        playPauseBtn.querySelector('i').className = 'fas fa-play';
      }
    });
    
    // Mute
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.querySelector('i').className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    });
    
    // Progress bar
    video.addEventListener('timeupdate', () => {
      const percentage = (video.currentTime / video.duration) * 100;
      progress.style.width = percentage + '%';
    });
    
    progressBar.addEventListener('click', (e) => {
      const pos = (e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth;
      video.currentTime = pos * video.duration;
    });
    
    // Reset controls when video ends
    video.addEventListener('ended', () => {
      playPauseBtn.querySelector('i').className = 'fas fa-play';
      progress.style.width = '0%';
    });
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll('.glass');
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
