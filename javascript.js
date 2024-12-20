document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission
    const form = document.getElementById('recommendation-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value || 'Anonymous';
        const message = document.getElementById('message').value;

        // Creation of a new recommendation block
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.innerHTML = `
            <p>${message}</p>
            <footer>— ${name}</footer>
        `;

        // Add new recommendation to the list
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.appendChild(newRecommendation);

        // Reset the form
        form.reset();

        // Show custom popup
        const popup = document.getElementById('popup');
        popup.classList.add('active');
    });
});

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

