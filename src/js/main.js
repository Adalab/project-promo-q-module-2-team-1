'use strict';

console.log('>> Ready :)');

//Parte colapsables
const designHeader = document.querySelector('.js_header_design');
const designContent = document.querySelector('.js_content_design');
const angleDesign = document.querySelector('.js_angle_design');
const dataHeader = document.querySelector('.js_header_data');
const dataContent = document.querySelector('.js_content_data');
const angleData = document.querySelector('.js_angle_data');
const shareHeader = document.querySelector('.js_header_share');
const shareContent = document.querySelector('.js_content_share');
const angleShare = document.querySelector('.js_angle_share');

const handleClick = (ev) => {
    const elementClick = ev.currentTarget;
    if (elementClick.classList.contains('.js_header_design')) {
        designContent.classList.toggle('collapsed');
    }
    else if (elementClick.classList.contains('.js_header_data')) {
        dataContent.classList.toggle('collapsed');
    }
    else if (elementClick.classList.contains('.js_header_share')) {
        shareContent.classList.toggle('collapsed');
    }
};
designHeader.addEventListener('click', handleClick);
dataHeader.addEventListener('click', handleClick);
shareHeader.addEventListener('click', handleClick);
/*

function handleClickSectionDesign (event) {
    event.preventDefault();


sectionFormDesign.addEventListener('click', handleClickSectionDesign);

//parte imagen

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');*/