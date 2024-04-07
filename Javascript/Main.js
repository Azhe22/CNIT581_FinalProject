document.addEventListener('DOMContentLoaded', function() {
  // Create the footer and anchor (link) elements
  const footerElement = document.createElement('footer');
  const linkElement = document.createElement('a');

  // Set up the anchor element
  linkElement.id = 'contactLink';
  linkElement.href = '#';
  linkElement.textContent = 'Contact Us';

  // Append elements: add the link to the footer, then the footer to the body
  footerElement.innerHTML = 'Need Help? ';
  footerElement.appendChild(linkElement);
  document.body.appendChild(footerElement);

  // Enhancements for user interaction with the footer
  setupFooterInteractions();
});

function setupFooterInteractions() {
  const footer = document.querySelector('footer'); // Selecting the footer element directly
  const contactLink = document.getElementById('contactLink');

  // Change text color on mouseover and mouseout
  footer.addEventListener('mouseover', () => footer.style.color = 'blue');
  footer.addEventListener('mouseout', () => footer.style.color = 'black');

  // Display alert on contact link click, preventing default link behavior
  contactLink.addEventListener('click', function(event) {
    event.preventDefault(); // Stop the default anchor action
    alert('Thank you for reaching out! We will get back to you soon.');
  });
}
