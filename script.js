document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        
        const originalText = item.textContent;

        item.addEventListener('mouseover', () => {
            item.textContent = `→ ${originalText} ←`;
        });

        item.addEventListener('mouseout', () => {
            item.textContent = originalText;
        });
    });
});
