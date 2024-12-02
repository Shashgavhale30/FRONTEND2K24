document.addEventListener('DOMContentLoaded', function () {
    const directorFileDisplay = document.getElementById('directorFileDisplay');
    
    // Example: Set file information dynamically
    const uploadedFileName = 'example_sign_file.pdf'; // Replace with actual file data
    if (uploadedFileName) {
        directorFileDisplay.textContent = `Uploaded File: ${uploadedFileName}`;
    }
});


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
