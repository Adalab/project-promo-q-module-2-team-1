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
  if (elementClick.classList.contains('js_header_design')/* && dataContent.classList.contains('collapsed') && shareContent.classList.contains('collapsed')*/) {
    designContent.classList.toggle('collapsed');
    dataContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
    angleDesign.classList.toggle('rotate');
    angleData.classList.add('rotate');
    angleShare.classList.add('rotate');
  }
  else if (elementClick.classList.contains('js_header_data')) {
    dataContent.classList.toggle('collapsed');
    designContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
    angleData.classList.toggle('rotate');
    angleShare.classList.add('rotate');
    angleDesign.classList.add('rotate');
  }
  else if (elementClick.classList.contains('js_header_share')) {
    shareContent.classList.toggle('collapsed');
    dataContent.classList.add('collapsed');
    designContent.classList.add('collapsed');
    angleShare.classList.toggle('rotate');
    angleData.classList.add('rotate');
    angleDesign.classList.add('rotate');
  }
};
designHeader.addEventListener('click', handleClick);
dataHeader.addEventListener('click', handleClick);
shareHeader.addEventListener('click', handleClick);


//parte link
const submitButton = document.querySelector('.js_submit_button');
const linkCard = document.querySelector('.js_link_card');

const handleClickSubmit = (ev) => {
  ev.preventDefault();

  linkCard.classList.remove('collapsed');


};
submitButton.addEventListener('click', handleClickSubmit);


//parte imagen


const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


//@param { evento } e

function getImage (e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


function writeImage () {

  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}


fileField.addEventListener('change', getImage);
