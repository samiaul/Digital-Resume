
// Menu Radiobuttons

const input_studies = document.getElementById('input-studies');
const input_experiences = document.getElementById('input-experiences');
const input_other = document.getElementById('input-other');

const section_studies = document.getElementById('studies');
const section_experiences = document.getElementById('experiences');
const section_other = document.getElementById('other');

// Hide all sections
function resetButtons() {
    section_studies.style.display = 'none';
    section_experiences.style.display = 'none';
    section_other.style.display = 'none';
}

// If button is pressed -> hide all sections and show selected section
input_studies.addEventListener('change',  () => {
    if (input_studies.checked) {resetButtons(); section_studies.style.display = 'block'}});

input_experiences.addEventListener('change',  ()=>{
    if (input_experiences.checked) {resetButtons(); section_experiences.style.display = 'block';}});

input_other.addEventListener('change',  ()=>{
    if (input_other.checked) {resetButtons(); section_other.style.display = 'block'}});


// Sidebar Show/Hide animation

const sidebar_button = document.getElementById('sidebar-button-input');
const sidebar_show_icon = document.getElementById('sidebar-show-icon');
const sidebar_hide_icon = document.getElementById('sidebar-hide-icon');
const sidebar = document.getElementById('sidebar');

// Run the corresponding animation
function toggleAnimation(checked) {

    // Remove both animations
    sidebar.classList.remove('animated', 'reversed');

    // Hide both icons
    sidebar_hide_icon.style.display = 'none';
    sidebar_show_icon.style.display = 'none';

    // This force reset its animations property
    void sidebar.offsetWidth;

    // Add animation & show icon
    if (checked) {
        sidebar.classList.add('reversed');
        sidebar_hide_icon.style.display = 'block'
    }
    else {
        sidebar.classList.add('animated');
        sidebar_show_icon.style.display = 'block'}
}

// Set listener
sidebar_button.addEventListener('change',()=> {toggleAnimation(sidebar_button.checked)});


// Responsiveness
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Hide sidebar when screen is small
function handleSmallScreen(e) {
    if (e.matches) {sidebar_button.checked = false; toggleAnimation(false)}
}
// Event listener
mediaQuery.addEventListener('change', handleSmallScreen);

// Init at page loading
handleSmallScreen(mediaQuery);


// Accessibility

// Activate the element if the corresponding label is focused and 'enter' is pressed
function clickOnEvent(event, element) {if (event.key === 'Enter') {element.click()}}

// Submit button
document.getElementById('contact-button').addEventListener('keydown',
     event => {clickOnEvent(event, document.getElementById('submit-button'))});

// Profil menu
document.getElementById('label-studies').addEventListener('keydown',
     event => {clickOnEvent(event, document.getElementById('input-studies'))});

document.getElementById('label-experiences').addEventListener('keydown',
     event => {clickOnEvent(event, document.getElementById('input-experiences'))});

document.getElementById('label-other').addEventListener('keydown',
     event => {clickOnEvent(event, document.getElementById('input-other'))});

// Sidebar button
document.getElementById('sidebar-button').addEventListener('keydown',
     event => {clickOnEvent(event, document.getElementById('sidebar-button-input'))});