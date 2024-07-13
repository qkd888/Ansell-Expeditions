{/****************************NAV-TOGGLE**********/}
{/************************************************/}
{/************************************************/}
{/************************************************/}

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

// Listen for a click on the navToggle
// check if mobile Nav contains Show Mobile nav class. If it doesn't add class
// Listen for a click event on the body
// if body contains show mobile nav class, remove it.
// else, remove show mobile nav class.

navToggle.addEventListener('click', () => {
	if (!mobileNav.classList.contains('show-mobile-nav')) {
		mobileNav.classList.add('show-mobile-nav')
		document.body.addEventListener('click', e => {
			if (!navToggle.contains(e.target)) {
				mobileNav.classList.remove('show-mobile-nav')
			}
		})
	} else {
		mobileNav.classList.remove('show-mobile-nav')
	}
})

{/**************************************SHARE-BTN*/}
{/************************************************/}
{/************************************************/}
{/************************************************/}

// Get the share button, link box, and close button elements
const shareButton = document.querySelector('.share-icon');
const SharelinkBox = document.querySelector('.share-icon-box');
const closeButton = document.querySelector('.share-close-btn');
const navLinkBox = document.querySelector('.nav-link-box');
// Add a click event listener to the share button
shareButton.addEventListener('click', () => {
  SharelinkBox.style.display = 'block';
  SharelinkBox.style.transition = 'opacity 0.6s ease-in-out';
  SharelinkBox.style.opacity = '1'; // Make it fully visible
  shareButton.style.display = 'none';
});

// Add a click event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the link box with a transition
  SharelinkBox.style.transition = 'opacity 0.6s ease-in-out';
  SharelinkBox.style.opacity = '0'; // Make it fully transparent
  setTimeout(() => {
    SharelinkBox.style.display = 'none';
    shareButton.style.display = 'block';
  }, 600); // Wait for the transition to complete (600ms)
});

{/**************************************CONTACT-PAGE/}
  {/************************************************/}
  {/************************************************/}
  {/************************************************/}

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('message');
    const loadingDiv = document.getElementById('loading');
    const submitBtn = document.getElementById('submit-btn');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (subjectSelect.value === '') {
            subjectError.textContent = 'Please select a subject';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }

        if (messageTextarea.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = new FormData(form);

        submitBtn.disabled = true;
        loadingDiv.style.display = 'block';
        messageDiv.classList.remove('show');

        fetch('https://api.ansellexpeditions.com/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('There was a problem sending your message. Please try again later.', 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            loadingDiv.style.display = 'none';
        });
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type} show`;

        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 5000);
    }
});

{/****************************TOURS/}
  {/************************************************/}
  {/************************************************/}
  {/************************************************/}


  const toursData = [
    {
        id: 1,
        title: "Kruger National Park Safari",
        description: "Experience the thrill of spotting the Big Five in South Africa's largest game reserve.",
        price: "$1500",
        rating: 4.8,
        image: "./images/lion.jpg"
    },
    {
        id: 2,
        title: "Cape Town City Tour",
        description: "Explore the vibrant city of Cape Town, including Table Mountain and the V&A Waterfront.",
        price: "$800",
        rating: 4.6,
        image: "./images/cape town.jpg"
    },
    {
        id: 3,
        title: "Garden Route Adventure",
        description: "Journey along the scenic Garden Route, stopping at charming coastal towns and nature reserves.",
        price: "$1200",
        rating: 4.7,
        image: "./images/garden route.jpg"
    },
    {
        id: 4,
        title: "Drakensberg Mountains Hike",
        description: "Trek through the stunning Drakensberg Mountains and discover ancient rock art.",
        price: "$900",
        rating: 4.5,
        image: "./images/drakensberg.jpg"
    },
    {
        id: 5,
        title: "Soweto Cultural Experience",
        description: "Immerse yourself in the rich history and culture of Soweto, Johannesburg's famous township.",
        price: "$600",
        rating: 4.4,
        image: "./images/soweto.jpg"
    },
    {
        id: 6,
        title: "Winelands Tasting Tour",
        description: "Sample world-class wines in the picturesque Cape Winelands region.",
        price: "$750",
        rating: 4.9,
        image: "./images/wine.jpg"
    },
    {
        id: 7,
        title: "Addo Elephant Park Safari",
        description: "Observe diverse wildlife, including the famous Addo elephants, in this Eastern Cape reserve.",
        price: "$1100",
        rating: 4.7,
        image: "./images/elephant.jpg"
    },
    {
        id: 8,
        title: "Blyde River Canyon Nature Reserve",
        description: "Marvel at the breathtaking landscapes of one of the world's largest canyons.",
        price: "$850",
        rating: 4.6,
        image: "./images/blyde.jpg"
    },
    {
        id: 9,
        title: "iSimangaliso Wetland Park Adventure",
        description: "Explore diverse ecosystems in this UNESCO World Heritage site, from beaches to wetlands.",
        price: "$1000",
        rating: 4.5,
        image: "./images/wet.jpg"
    },
    {
        id: 10,
        title: "Robben Island Historical Tour",
        description: "Visit the infamous prison where Nelson Mandela was held and learn about South Africa's history.",
        price: "$700",
        rating: 4.8,
        image: "./images/robben island.jpg"
    }
];

const toursContainer = document.getElementById('tours-container');
const loadMoreButton = document.getElementById('load-more');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalRating = document.getElementById('modal-rating');
const modalImage = document.getElementById('modal-image');
const addToMyToursButton = document.getElementById('add-to-my-tours');
const myToursList = document.getElementById('my-tours-list');
const closeModal = document.getElementsByClassName('close')[0];

let currentTours = 0;
const toursPerLoad = 5;

function createTourCard(tour) {
    const card = document.createElement('div');
    card.classList.add('tour-card');
    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}" class="tour-image">
        <h3>${tour.title}</h3>
        <p>${tour.description.substring(0, 100)}...</p>
        <button class="see-more" data-id="${tour.id}">See More</button>
    `;
    return card;
}

function loadTours() {
    const fragment = document.createDocumentFragment();
    const end = Math.min(currentTours + toursPerLoad, toursData.length);
    
    for (let i = currentTours; i < end; i++) {
        const card = createTourCard(toursData[i]);
        fragment.appendChild(card);
    }
    
    toursContainer.appendChild(fragment);
    currentTours = end;
    
    if (currentTours >= toursData.length) {
        loadMoreButton.style.display = 'none';
    }
}

function openModal(tour) {
    modalTitle.textContent = tour.title;
    modalDescription.textContent = tour.description;
    modalPrice.textContent = `Price: ${tour.price}`;
    modalRating.textContent = `Rating: ${tour.rating}/5`;
    modalImage.src = tour.image;
    modalImage.alt = tour.title;
    addToMyToursButton.dataset.id = tour.id;
    modal.style.display = 'block';
}

function closeModalHandler() {
    modal.style.display = 'none';
}

function addToMyTours(tourId) {
    const tour = toursData.find(t => t.id === parseInt(tourId));
    const myTourItem = document.createElement('div');
    myTourItem.classList.add('my-tour-item');
    myTourItem.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}" class="my-tour-image">
        <span>${tour.title}</span>
        <button class="delete-tour" data-id="${tour.id}">Delete</button>
    `;
    myToursList.appendChild(myTourItem);
    closeModalHandler();
}

function deleteTour(event) {
    if (event.target.classList.contains('delete-tour')) {
        event.target.parentElement.remove();
    }
}

loadMoreButton.addEventListener('click', loadTours);

toursContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('see-more')) {
        const tourId = parseInt(event.target.dataset.id);
        const tour = toursData.find(t => t.id === tourId);
        openModal(tour);
    }
});

closeModal.addEventListener('click', closeModalHandler);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});

addToMyToursButton.addEventListener('click', (event) => {
    addToMyTours(event.target.dataset.id);
});

myToursList.addEventListener('click', deleteTour);

// Initial load
loadTours();