// JavaScript for sliding photo gallery
document.addEventListener('DOMContentLoaded', () => {
    // Photo Gallery
    const slides = document.querySelector('.photo-gallery .slides');
    const slideCount = document.querySelectorAll('.photo-gallery .slide').length;
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % slideCount;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // Visitor Count
    let visitCount = localStorage.getItem('visitCount');
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;

    // Language Switching
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang) {
        // Logic to switch language
        console.log(`Selected language: ${lang}`);
    }
});

// script.js
function addToCart(productName, productPrice) {
    // Implement cart functionality here
    console.log(`${productName} added to cart at ₹${productPrice}`);
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const englishLink = document.getElementById('english-link');
    const kannadaLink = document.getElementById('kannada-link');
    const currentLang = document.documentElement.lang;

    if (currentLang === 'en') {
        kannadaLink.style.display = 'inline';
        englishLink.style.display = 'none';
    } else {
        kannadaLink.style.display = 'none';
        englishLink.style.display = 'inline';
    }
});
// JavaScript for review slider
let currentReviewIndex = 0;

function showReview(index) {
    const reviews = document.querySelectorAll('.review');
    if (index >= reviews.length) currentReviewIndex = 0;
    if (index < 0) currentReviewIndex = reviews.length - 1;
    
    reviews.forEach((review, i) => {
        review.style.display = (i === currentReviewIndex) ? 'block' : 'none';
    });
}

function nextReview() {
    showReview(currentReviewIndex + 1);
}

function prevReview() {
    showReview(currentReviewIndex - 1);
}

// Initialize first review
showReview(currentReviewIndex);


document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');
    
    // Validation function
    function validateForm() {
        let isValid = true;
        // Reset previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());

        // Validate Full Name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Full Name is required');
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'Invalid Email Address');
            isValid = false;
        }

        // Validate Shipping Address
        if (addressInput.value.trim() === '') {
            showError(addressInput, 'Shipping Address is required');
            isValid = false;
        }

        // Validate Phone Number
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            showError(phoneInput, 'Phone Number must be 10 digits');
            isValid = false;
        }

        return isValid;
    }

    // Function to show error message
    function showError(input, message) {
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert('Form submitted successfully!');
        }
    });
});
