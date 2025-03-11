document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const dino = document.createElement('div');
    dino.className = 'cursor-dino';
    
    // Create spikes container
    const spikes = document.createElement('div');
    spikes.className = 'cursor-spikes';
    
    // Add 5 spikes
    for (let i = 0; i < 5; i++) {
        const spike = document.createElement('div');
        spike.className = 'spike';
        spikes.appendChild(spike);
    }
    
    dino.appendChild(spikes);
    
    const label = document.createElement('div');
    label.className = 'cursor-label';
    label.textContent = 'rawr';
    
    cursor.appendChild(dino);
    cursor.appendChild(label);
    document.body.appendChild(cursor);

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    // Smooth cursor movement
    function updateCursor() {
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        
        currentX += dx * 0.15; // Slightly slower movement for cuteness
        currentY += dy * 0.15;
        
        cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
        
        // Add subtle bobbing animation
        const time = Date.now() / 1000;
        dino.style.transform = `scale(${1 + Math.sin(time * 2) * 0.03})`;
        
        requestAnimationFrame(updateCursor);
    }

    // Update cursor target position
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX - 16; // Center the 32px cursor
        targetY = e.clientY - 16;
    });

    // Start animation loop
    updateCursor();

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            label.textContent = 'click!';
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            label.textContent = 'rawr';
        });
    });
});
