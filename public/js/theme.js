// Dark mode configuration
const darkModeConfig = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    'bg-primary': '#1a1b1e',
                    'bg-secondary': '#2c2e33',
                    'text-primary': '#e4e6ea',
                    'text-secondary': '#9ca3af',
                }
            }
        }
    }
};

// Initialize dark mode
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const html = document.documentElement;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }

    // Toggle dark mode function
    function toggleDarkMode() {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark') ? 'enabled' : 'disabled');
    }

    // Add click handlers to both toggle buttons
    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
    if (darkModeToggleMobile) darkModeToggleMobile.addEventListener('click', toggleDarkMode);

    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            html.classList.toggle('dark', e.matches);
        }
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    initializeMobileMenu();
}); 