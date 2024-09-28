
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