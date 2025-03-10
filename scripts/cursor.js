document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const arrow = document.createElement('div');
    arrow.className = 'cursor-arrow';
    
    const label = document.createElement('div');
    label.className = 'cursor-label';
    label.textContent = 'you';
    
    cursor.appendChild(arrow);
    cursor.appendChild(label);
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
        });
    });
});
