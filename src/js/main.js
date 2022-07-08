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
  data.photo = fr.result;
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  console.log(data);
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
  photo: '',
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
  previewCard();
};

allInputs.addEventListener('keyup', handleInput); //change

//palette
const palette = document.querySelector('.js_palette');
const palette1 = document.querySelector('.js_palette1');
const palette2 = document.querySelector('.js_palette2');
const palette3 = document.querySelector('.js_palette3');
const previewIconPhone = document.querySelector('.js_preview_icon_phone');
const previewIconEmail = document.querySelector('.js_preview_icon_email');
const previewIconLinkedin = document.querySelector('.js_preview_icon_linkedin');
const previewIconGithub = document.querySelector('.js_preview_icon_github');
const previewContainer = document.querySelector('.js_preview_container');

const previewNamePalette1 = () => {
  previewName.classList.remove('name-red-preview');
  previewName.classList.remove('name-blue-preview');
  previewName.classList.add('name-default-preview');
};

const previewNamePalette2 = () => {
  previewName.classList.remove('name-blue-preview');
  previewName.classList.remove('name-default-preview');
  previewName.classList.add('name-red-preview');
};

const previewNamePalette3 = () => {
  previewName.classList.remove('name-red-preview');
  previewName.classList.remove('name-default-preview');
  previewName.classList.add('name-blue-preview');
};

const previewJobPalette1 = () => {
  previewJob.classList.remove('job-red-preview');
  previewJob.classList.remove('job-blue-preview');
  previewJob.classList.add('job-default-preview');
};

const previewJobPalette2 = () => {
  previewJob.classList.remove('job-blue-preview');
  previewJob.classList.remove('job-default-preview');
  previewJob.classList.add('job-red-preview');
};

const previewJobPalette3 = () => {
  previewJob.classList.remove('job-red-preview');
  previewJob.classList.remove('job-default-preview');
  previewJob.classList.add('job-blue-preview');
};

const previewIconPhone1 = () => {
  previewIconPhone.classList.remove('icons-red-preview');
  previewIconPhone.classList.remove('icons-blue-preview');
  previewIconPhone.classList.add('icons-default-preview');
};

const previewIconEmail1 = () => {
  previewIconEmail.classList.remove('icons-red-preview');
  previewIconEmail.classList.remove('icons-blue-preview');
  previewIconEmail.classList.add('icons-default-preview');
};

const previewIconLinkedin1 = () => {
  previewIconLinkedin.classList.remove('icons-red-preview');
  previewIconLinkedin.classList.remove('icons-blue-preview');
  previewIconLinkedin.classList.add('icons-default-preview');
};

const previewIconGithub1 = () => {
  previewIconGithub.classList.remove('icons-red-preview');
  previewIconGithub.classList.remove('icons-blue-preview');
  previewIconGithub.classList.add('icons-default-preview');
};

const previewIconPhone2 = () => {
  previewIconPhone.classList.remove('icons-blue-preview');
  previewIconPhone.classList.remove('icons-default-preview');
  previewIconPhone.classList.add('icons-red-preview');
};

const previewIconEmail2 = () => {
  previewIconEmail.classList.remove('icons-blue-preview');
  previewIconEmail.classList.remove('icons-default-preview');
  previewIconEmail.classList.add('icons-red-preview');
};

const previewIconLinkedin2 = () => {
  previewIconLinkedin.classList.remove('icons-blue-preview');
  previewIconLinkedin.classList.remove('icons-default-preview');
  previewIconLinkedin.classList.add('icons-red-preview');
};

const previewIconGithub2 = () => {
  previewIconGithub.classList.remove('icons-blue-preview');
  previewIconGithub.classList.remove('icons-default-preview');
  previewIconGithub.classList.add('icons-red-preview');
};

const previewIconPhone3 = () => {
  previewIconPhone.classList.remove('icons-red-preview');
  previewIconPhone.classList.remove('icons-default-preview');
  previewIconPhone.classList.add('icons-blue-preview');
};

const previewIconEmail3 = () => {
  previewIconEmail.classList.remove('icons-red-preview');
  previewIconEmail.classList.remove('icons-default-preview');
  previewIconEmail.classList.add('icons-blue-preview');
};

const previewIconLinkedin3 = () => {
  previewIconLinkedin.classList.remove('icons-red-preview');
  previewIconLinkedin.classList.remove('icons-default-preview');
  previewIconLinkedin.classList.add('icons-blue-preview');
};

const previewIconGithub3 = () => {
  previewIconGithub.classList.remove('icons-red-preview');
  previewIconGithub.classList.remove('icons-default-preview');
  previewIconGithub.classList.add('icons-blue-preview');
};

const previewIconPalette1 = () => {
  previewIconPhone1();
  previewIconEmail1();
  previewIconLinkedin1();
  previewIconGithub1();
};

const previewIconPalette2 = () => {
  previewIconPhone2();
  previewIconEmail2();
  previewIconLinkedin2();
  previewIconGithub2();
};

const previewIconPalette3 = () => {
  previewIconPhone3();
  previewIconEmail3();
  previewIconLinkedin3();
  previewIconGithub3();
};

const previewContainerPalette1 = () => {
  previewContainer.classList.remove('container-red-preview');
  previewContainer.classList.remove('container-blue-preview');
  previewContainer.classList.add('container-default-preview');
};

const previewContainerPalette2 = () => {
  previewContainer.classList.remove('container-blue-preview');
  previewContainer.classList.remove('container-default-preview');
  previewContainer.classList.add('container-red-preview');
};

const previewContainerPalette3 = () => {
  previewContainer.classList.remove('container-red-preview');
  previewContainer.classList.remove('container-default-preview');
  previewContainer.classList.add('container-blue-preview');
};

palette.addEventListener('click', () => {
  if (palette1.checked) {
    data.palette = 1;
    previewNamePalette1();
    previewJobPalette1();
    previewIconPalette1();
    previewContainerPalette1();
  } else if (palette2.checked) {
    data.palette = 2;
    previewNamePalette2();
    previewJobPalette2();
    previewIconPalette2();
    previewContainerPalette2();
  } else if (palette3.checked) {
    data.palette = 3;
    previewNamePalette3();
    previewJobPalette3();
    previewIconPalette3();
    previewContainerPalette3();
  }
});

//Reset button

const resetButton = document.querySelector('.js_reset_button');

const handleClickReset = (ev) => {
  ev.preventDefault();
  clearObjectData();
  previewCard(data);
  allInputs.reset();
  clearImage();
  console.log(data);
};

function clearImage() {
  profileImage.style.backgroundImage = `url()`;
  profilePreview.style.backgroundImage = `url()`;
};

function clearObjectData() {
  data.palette = 1;
  data.name = ``;
  data.job = ``;
  data.photo = ``;
  data.email = ``;
  data.phone = ``;
  data.linkedin = ``;
  data.github = ``;
}

resetButton.addEventListener('click', handleClickReset);

// previewName.innerHTML = `Nombre apellido`;
// previewJob.innerHTML = `Front-end developer`;
// previewEmail.value = ``;
// previewGithub.value = ``;
// previewLinkedin.value = ``;
// previewPhone.value = ``;
// // fileField.src = ``;
// // profileImage.src = ``;
// // profilePreview.src = ``