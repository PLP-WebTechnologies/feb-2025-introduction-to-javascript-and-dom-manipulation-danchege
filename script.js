// Change text content dynamically
document.getElementById('content-btn').addEventListener('click', function() {
    // Update the trainee count with a random number between 10,000 and 50,000
    const newCount = Math.floor(Math.random() * 40000) + 10000;
    document.getElementById('trainee-count').textContent = newCount.toLocaleString();
    
    // Also update the main title
    document.getElementById('main-title').textContent = `Empowering ${newCount.toLocaleString()} Africans Through Tech`;
});

// Modify CSS styles via JavaScript
document.getElementById('style-btn').addEventListener('click', function() {
    const blogPost = document.getElementById('blog-post');
    const currentColor = blogPost.style.backgroundColor;
    
    if (currentColor === 'rgb(240, 248, 255)') {
        blogPost.style.backgroundColor = '#f0fff0';
        blogPost.style.border = '2px solid #4CAF50';
        blogPost.style.padding = '20px';
    } else {
        blogPost.style.backgroundColor = 'aliceblue';
        blogPost.style.border = '2px solid #6495ED';
        blogPost.style.padding = '20px';
    }
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-btn').addEventListener('click', function() {
    const impactList = document.getElementById('impact-list');
    
    if (impactList.style.display === 'none') {
        impactList.style.display = 'block';
    } else {
        impactList.style.display = 'none';
    }
});

// Add new element when button is clicked
document.getElementById('add-btn').addEventListener('click', function() {
    const testimonials = [
        "PLP changed my life! I got a tech job after completing their program.",
        "The best tech education I've received, completely free!",
        "Thanks to PLP, I launched my own tech startup.",
        "PLP's curriculum is practical and industry-relevant."
    ];
    
    const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    
    const newTestimonial = document.createElement('div');
    newTestimonial.className = 'testimonial';
    newTestimonial.innerHTML = `<p>"${randomTestimonial}"</p>`;
    
    const impactSection = document.querySelector('#impact');
    impactSection.appendChild(newTestimonial);
    
    // Scroll to the new testimonial
    newTestimonial.scrollIntoView({ behavior: 'smooth' });
});

// Additional dynamic behavior
window.addEventListener('load', function() {
    // Change the color of list items on hover
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#2E8B57';
            this.style.fontWeight = 'bold';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontWeight = '';
        });
    });
});