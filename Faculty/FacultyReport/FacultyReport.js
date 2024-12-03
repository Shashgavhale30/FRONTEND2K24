document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function openTab(tabName) {
        // Hide all tabs
        tabContents.forEach(tab => tab.classList.remove('active'));

        // Remove active class from all buttons
        tabButtons.forEach(button => button.classList.remove('active'));

        // Show the clicked tab's content
        const activeTab = document.getElementById(tabName);
        activeTab.classList.add('active');

        // Add active class to the clicked button
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        activeButton.classList.add('active');

        // Scroll to the active tab
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');
            openTab(tabName);
        });
    });

    // Open the first tab by default
    openTab('teaching');

    // Role-based section handling
    const roleSections = document.querySelectorAll('[data-role]');

    roleSections.forEach(section => {
        const role = section.getAttribute('data-role');
        if (role === 'HOD') {
            // Disable inputs and make read-only
            section.querySelectorAll('input, textarea, select, button').forEach(el => {
                el.setAttribute('disabled', 'true');
            });
        } else if (role === 'Director') {
            // Enable inputs and allow editing
            section.querySelectorAll('input, textarea, select, button').forEach(el => {
                el.removeAttribute('disabled');
            });
        }
    });

    // Example: View and Edit functionality
    const viewButtons = document.querySelectorAll('.view-button');
    const editButtons = document.querySelectorAll('.edit-button');

    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('View button clicked');
            // Implement view functionality
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Edit button clicked');
            // Implement edit functionality
        });
    });
});