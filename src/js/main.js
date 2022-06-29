'use strict';

console.log('>> Ready :)');

//Parte colapsables
const sectionDesign = document.querySelector('.js_section_design');
const angleDesign = document.querySelector('.js_angle_design');
const sectionFormDesign = document.querySelector('.js_section_form_design');

function showSectionDesign () {
    sectionDesign.classList.remove('collapsed');
    angleDesign.classList.toggle('rotate');
}

function hideSectionDesign () {
    sectionDesign.classList.add('collapsed');
    angleDesign.classList.toggle('rotate');
}

function handleClickSectionDesign (event) {
    event.preventDefault();

    if (sectionDesign.classList.contains('collapsed')) {
        showSectionDesign();
    }
    else {
        hideSectionDesign();
    }
}

sectionFormDesign.addEventListener('click', handleClickSectionDesign);

//parte imagen

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');