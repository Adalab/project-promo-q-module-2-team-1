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
  if (
    elementClick.classList.contains(
      'js_header_design'
    ) /* && dataContent.classList.contains('collapsed') && shareContent.classList.contains('collapsed')*/
  ) {
    designContent.classList.toggle('collapsed');
    dataContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
    angleDesign.classList.toggle('rotate');
    angleData.classList.add('rotate');
    angleShare.classList.add('rotate');
  } else if (elementClick.classList.contains('js_header_data')) {
    dataContent.classList.toggle('collapsed');
    designContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
    angleData.classList.toggle('rotate');
    angleShare.classList.add('rotate');
    angleDesign.classList.add('rotate');
  } else if (elementClick.classList.contains('js_header_share')) {
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

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

fileField.addEventListener('change', getImage);

//formulario

const allInputs = document.querySelector('.js_all_inputs');
const previewName = document.querySelector('.js_preview_name');
const previewJob = document.querySelector('.js_preview_job');
const previewEmail = document.querySelector('.js_preview_email');
const previewPhone = document.querySelector('.js_preview_phone');
const previewLinkedin = document.querySelector('.js_preview_linkedin');
const previewGithub = document.querySelector('.js_preview_github');

const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

const previewCard = () => {
  if (data.name !== '') {
    previewName.innerHTML = data.name;
  } else {
    previewName.innerHTML = 'Nombre Apellido';
  }

  if (data.job !== '') {
    previewJob.innerHTML = data.job;
  } else {
    previewJob.innerHTML = 'Front-end developer';
  }

  previewEmail.href = data.email;
  previewPhone.href = data.phone;
  previewLinkedin.href = data.linkedin;
  previewGithub.href = data.github;
};

const handleInput = (ev) => {
  const nameInput = ev.target.name;
  const valueInput = ev.target.value;
  data[nameInput] = valueInput;
  console.log(data.name);
  previewCard();
};

allInputs.addEventListener('keyup', handleInput); //change

//palette
const palette1 = document.querySelector('.js_palette1');
const palette2 = document.querySelector('.js_palette2');
const palette3 = document.querySelector('.js_palette3');

palette1.addEventListener('click', () => {
  previewName.classList.remove('red-preview');
  previewName.classList.remove('blue-preview');
  previewName.classList.add('default-preview');
});

palette2.addEventListener('click', () => {
  previewName.classList.remove('blue-preview');
  previewName.classList.remove('default-preview');
  previewName.classList.add('red-preview');
});

palette3.addEventListener('click', () => {
  previewName.classList.remove('red-preview');
  previewName.classList.remove('default-preview');
  previewName.classList.add('blue-preview');
});

// palette.addEventListener ('focus', (event) =>{
// if (palette2.checked){
// previewName.classList.add('red-preview');
// console.log('Hola');
// } else if (palette3.checked === true){
// previewName.classList.add('blue-preview');
// }
// });
