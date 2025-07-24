document.addEventListener('DOMContentLoaded', function() {
    const moreMenu = document.querySelector('.more-menu');
    const moreBtn = document.querySelector('.more-btn');

    moreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        moreMenu.classList.toggle('show');
    });

    document.addEventListener('click', function() {
        moreMenu.classList.remove('show');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const categoriesSection = document.querySelector('.categories-section');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        const imageBoxes = document.querySelectorAll('.image-box');
        let categoriesVisible = false;

        imageBoxes.forEach(box => {
            const heading = box.querySelector('h2');
            if (!query) {
                box.style.display = '';
                categoriesVisible = true;
            } else if (heading && heading.textContent.toLowerCase().includes(query)) {
                box.style.display = '';
                // Check if this box is in the categories section
                if (box.closest('.categories-section') || box.parentElement.previousElementSibling === categoriesSection) {
                    categoriesVisible = true;
                }
            } else {
                box.style.display = 'none';
            }
        });

        // Hide or show the categories heading
        if (!query || categoriesVisible) {
            categoriesSection.style.display = '';
        } else {
            categoriesSection.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Contact Us Modal
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');

    if (contactBtn && contactModal && closeContactModal) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            contactModal.style.display = 'flex';
        });
        closeContactModal.addEventListener('click', function() {
            contactModal.style.display = 'none';
        });
        window.addEventListener('click', function(event) {
            if (event.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const popupModal = document.getElementById('img-popup-modal');
    const closeImgModal = document.getElementById('close-img-modal');
    const galleryImages = document.getElementById('gallery-images');

    document.querySelectorAll('.popup-img').forEach(img => {
        img.addEventListener('click', function() {
            if (img.getAttribute('data-title').toLowerCase() === 'shirts') {
                galleryImages.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center;">
                        <img src="shirt1.jpg" alt="Shirt 1" style="max-width:220px; border-radius:10px;">
                        <div style="color:#e53935; font-weight:bold; margin-top:8px;">Red Color Checked Cotton Shirt</div>
                        <div style="margin-top:4px;">
                            <span style="color:#888; text-decoration:line-through; font-size:1.1em; margin-right:8px;">₹700</span>
                            <span style="color:#388e3c; font-size:1.3em; font-weight:bold;">₹599</span>
                        </div>
                        <button class="order-btn">Order</button>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center;">
                        <img src="shirt2.jpg" alt="Shirt 2" style="max-width:220px; border-radius:10px;">
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center;">
                        <img src="shirt3.jpg" alt="Shirt 3" style="max-width:220px; border-radius:10px;">
                    </div>
                `;
                popupModal.style.display = 'flex';
            }
        });
    });

    closeImgModal.addEventListener('click', function() {
        popupModal.style.display = 'none';
        galleryImages.innerHTML = '';
    });
    window.addEventListener('click', function(event) {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
            galleryImages.innerHTML = '';
        }
    });
});