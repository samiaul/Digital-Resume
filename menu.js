
const input_studies = document.getElementById('input-studies');
const input_projects = document.getElementById('input-projects');
const input_experiences = document.getElementById('input-experiences');
const input_other = document.getElementById('input-other');

const section_studies = document.getElementById('studies');
const section_projects = document.getElementById('projects');
const section_experiences = document.getElementById('experiences');
const section_other = document.getElementById('other');

input_studies.addEventListener('change', function () {
    if (input_studies.checked) {
        section_studies.style.display = 'block';
        section_projects.style.display = 'none';
        section_experiences.style.display = 'none';
        section_other.style.display = 'none';
    }
});

input_projects.addEventListener('change', function () {
    if (input_projects.checked) {
        section_studies.style.display = 'none';
        section_projects.style.display = 'block';
        section_experiences.style.display = 'none';
        section_other.style.display = 'none';
    }
});

input_experiences.addEventListener('change', function () {
    if (input_experiences.checked) {
        section_studies.style.display = 'none';
        section_projects.style.display = 'none';
        section_experiences.style.display = 'block';
        section_other.style.display = 'none';
    }
});

input_other.addEventListener('change', function () {
    if (input_other.checked) {
        section_studies.style.display = 'none';
        section_projects.style.display = 'none';
        section_experiences.style.display = 'none';
        section_other.style.display = 'block';
    }
});
