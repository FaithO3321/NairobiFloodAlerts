function displaySection(sectionId, event) {
    event.preventDefault(); // Prevent the default link action

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active'); // Hide all sections
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active'); // Show the selected section
    }
}

// Display the first section by default
document.addEventListener('DOMContentLoaded', () => {
    displaySection('regions', { preventDefault: () => {} }); // Display the Regions section by default
});

function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const sectionMapping = {
        'regions': 'regions',
        'weather': 'weather',
        'rivers': 'rivers',
        'flood alerts': 'flood-alerts',
        'be prepared': 'be-prepared'
    };

    const sectionKey = Object.keys(sectionMapping).find(key => searchInput.includes(key));
    if (sectionKey) {
        displaySection(sectionMapping[sectionKey]);
    } else {
        alert('No matching section found');
    }
}
