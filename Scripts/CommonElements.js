document.addEventListener('DOMContentLoaded', () => {
    // Create header content
    const header = document.getElementById('common-header');
    if (header) {
        header.innerHTML = `
            <header>
                <h1>RIHP Website</h1>
                <nav>
                    <a href="MainPage.html">Home</a>
                    <a href="Forum.html">Forum</a>
                    <a href="FAQ.html">FAQ</a>
                </nav>
            </header>
        `;
    }

    // Create footer content
    const footer = document.getElementById('common-footer');
    if (footer) {
        footer.innerHTML = `
            <footer>
                <p>&copy; 2025 RIHP Website. All rights reserved.</p>
            </footer>
        `;
    }
});