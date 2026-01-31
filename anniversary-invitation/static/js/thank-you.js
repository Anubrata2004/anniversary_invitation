// Thank you page - Confetti animation
document.addEventListener('DOMContentLoaded', function() {
    // Create confetti animation
    createConfetti();
    
    function createConfetti() {
        const container = document.getElementById('confettiContainer');
        const colors = ['#d4405f', '#f4c2d3', '#ffd700', '#ff6b9d', '#c44569'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                
                // Random size
                const size = Math.random() * 8 + 5;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                
                // Random rotation
                confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                
                container.appendChild(confetti);
                
                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, 3500);
            }, i * 30);
        }
    }
    
    // Add pulse animation to success icon
    const successIcon = document.querySelector('.success-icon');
    if (successIcon) {
        setTimeout(() => {
            successIcon.style.animation = 'pulse 2s ease-in-out infinite';
        }, 1000);
    }
});

// Add pulse keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);
