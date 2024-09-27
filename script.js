
// Menu Radiobuttons

const input_studies = document.getElementById('input-studies');
const input_projects = document.getElementById('input-projects');
const input_experiences = document.getElementById('input-experiences');
const input_other = document.getElementById('input-other');

const section_studies = document.getElementById('studies');
const section_projects = document.getElementById('projects');
const section_experiences = document.getElementById('experiences');
const section_other = document.getElementById('other');

function resetButtons() {
    section_studies.style.display = 'none';
    section_projects.style.display = 'none';
    section_experiences.style.display = 'none';
    section_other.style.display = 'none';
}

input_studies.addEventListener('change', function () {
    if (input_studies.checked) {resetButtons(); section_studies.style.display = 'block'}});

input_projects.addEventListener('change', function () {
    if (input_projects.checked) {resetButtons(); section_projects.style.display = 'block'}});

input_experiences.addEventListener('change', function () {
    if (input_experiences.checked) {resetButtons(); section_experiences.style.display = 'block';}});

input_other.addEventListener('change', function () {
    if (input_other.checked) {resetButtons(); section_other.style.display = 'block'}});


// Sidebar Show/Hide animation

const sidebar_button = document.getElementById('sidebar-button-input');
const sidebar_show = document.getElementById('show');
const sidebar_hide = document.getElementById('hide');
const sidebar = document.getElementById('sidebar');

function toggleAnimation(reverse) {

    if (sidebar.classList.contains('animated') && !reverse) {return}
    if (sidebar.classList.contains('reversed') && reverse) {return}

    sidebar.classList.remove('animated', 'reversed');

    sidebar_hide.style.display = 'none';
    sidebar_show.style.display = 'none';

    void sidebar.offsetWidth;

    if (reverse) {sidebar.classList.add('reversed'); sidebar_hide.style.display = 'block'}
    else {sidebar.classList.add('animated'); sidebar_show.style.display = 'block'}
}

sidebar_button.addEventListener('change', function () {
    toggleAnimation(sidebar_button.checked)});


// Hide when screen is small

function handleSmallScreen(e) {
    if (e.matches) {sidebar_button.checked = false; toggleAnimation(false)}
}

const mediaQuery = window.matchMedia('(max-width: 600px)');

mediaQuery.addEventListener('change', handleSmallScreen);

handleSmallScreen(mediaQuery);