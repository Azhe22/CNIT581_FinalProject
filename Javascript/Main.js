//Open login form
function openForm1() {
  document.getElementById("loginForm").style.display = "block";
}

//Close login form
function closeForm1() {
  document.getElementById("loginForm").style.display = "none";
}

//Open signup form
function openForm2() {
  document.getElementById("signupForm").style.display = "block";
}

//Close signup form
function closeForm2() {
  document.getElementById("signupForm").style.display = "none";
}

//Add link for "Ready to Create?" button
document.getElementById("create").addEventListener("click", function(){
  window.location.href = '../1_Create/CreateOverview.html';
});

//Add link for "Review Your Peer's Works" button
document.getElementById("review").addEventListener("click", function(){
  window.location.href = '../2_Review/Review.html';
});

//Add link for "Ready for Some Challenges?" button
document.getElementById("challenge").addEventListener("click", function(){
  window.location.href = '../3_Practice/Practice.html';
});



// select the button and the div
const button = document.getElementById('myButton');
const div = document.getElementById('myDiv');

// define the function to change the HTML content
function changeContent() {
    div.innerHTML = '<p>New HTML content!</p>';
}

// add event listener to the button
button.addEventListener('click', changeContent);



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

function openSection(evt, sectionName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Let user enter inputs and add rows for data tables
function myCreateFunction(tablename,fname,lname,myform) {
  var table = document.getElementById(tablename);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = document.getElementById(fname).value;
  cell2.innerHTML = document.getElementById(lname).value;
  document.getElementById(myform).reset();
}
function myDeleteFunction(tablename) {
  var table = document.getElementById(tablename);
  var rowCount = table.rows.length;
  if (rowCount >=2){
  document.getElementById(tablename).deleteRow(rowCount-1);
  }
  	
}