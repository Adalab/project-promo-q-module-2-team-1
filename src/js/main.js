'use strict';



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

function getImage (e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);

}

function writeImage () {
  data.photo = fr.result;
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  localStorage.setItem('dataStorage', JSON.stringify(data));
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

let data = {
  palette: 1,
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

const dataName = () => {
  if (data.name !== '') {
    previewName.innerHTML = data.name;
  } else {
    previewName.innerHTML = 'Nombre Apellido';
  }
};

const dataJob = () => {
  if (data.job !== '') {
    previewJob.innerHTML = data.job;
  } else {
    previewJob.innerHTML = 'Front-end developer';
  }
};

const dataEmail = () => {
  previewEmail.href = `mailto:${data.email}`;
};

const dataPhone = () => {
  previewPhone.href = data.phone;
};

const dataLinkedin = () => {
  if (data.linkedin.includes('https:/')) {
    const dataLinkedin = /^(\w+):\/\/([^\/]+)\/([^\/]+\/)([^]+)$/.exec(data.linkedin);
    data.linkedin = dataLinkedin[4];
    previewLinkedin.href = `https://www.linkedin.com/in/${dataLinkedin[4]}`;
  }
  if (data.linkedin.includes('www.linkedin.com/')) {
    const dataLinkedin = /^([^\/]+)\/([^]+)$/.exec(data.linkedin);
    console.log(dataLinkedin);
    data.linkedin = dataLinkedin[2];
    previewLinkedin.href = `https://www.linkedin.com/in/${dataLinkedin[2]}`;

  }
  if (data.linkedin.includes('linkedin.com/')) {
    const dataLinkedin = /^([^\/]+)\/([^]+)$/.exec(data.linkedin);
    console.log(dataLinkedin);
    data.linkedin = dataLinkedin[2];
    previewLinkedin.href = `https://www.linkedin.com/in/${dataLinkedin[2]}`;

  } else {
    previewLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}`;
  }
};


const dataGithub = () => {
  if (data.github.includes('@')) {
    data.github = data.github.replace('@', '');
    previewGithub.href = `https://github.com/${data.github}`;
  }
  if (data.github.includes('https:/')) {
    const dataGithub = /^(\w+):\/\/([^\/]+)\/([^]+)$/.exec(data.github);
    data.github = dataGithub[3];
    previewGithub.href = dataGithub[0];
  }
  if (data.github.includes('www.github.com/')) {
    const dataGithub = /^([^\/]+)\/([^]+)$/.exec(data.github);
    data.github = dataGithub[2];
    previewGithub.href = dataGithub[0];

  }
  if (data.github.includes('github.com/')) {
    const dataGithub = /^([^\/]+)\/([^]+)$/.exec(data.github);
    console.log(dataGithub);
    data.github = dataGithub[2];
    previewGithub.href = `https://${dataGithub[0]}`;

  } else {
    previewGithub.href = `https://github.com/${data.github}`;
  }
};

const previewCard = () => {
  dataName();
  dataJob();
  dataEmail();
  dataPhone();
  dataLinkedin();
  dataGithub();
};

const handleInput = (ev) => {
  const nameInput = ev.target.name;
  const valueInput = ev.target.value;
  localStorage.setItem('dataStorage', JSON.stringify(data));
  data[nameInput] = valueInput;
  previewCard();
};

allInputs.addEventListener('keyup', handleInput); //change
allInputs.addEventListener('change', handleInput);


//localStorage

const dataLS = () => {
  let dataStorage = JSON.parse(localStorage.getItem('dataStorage'));
  if (dataStorage !== null) {
    data = dataStorage;
  }
  return data;
};

const nameInput = document.querySelector('.js_name_input');
const jobInput = document.querySelector('.js_job_input');
const emailInput = document.querySelector('.js_email_input');
const phoneInput = document.querySelector('.js_phone_input');
const linkedinInput = document.querySelector('.js_linkedin_input');
const githubInput = document.querySelector('.js_github_input');

const paintData = () => {
  data = dataLS();
  console.log(data);
  nameInput.value = `${data.name}`;
  jobInput.value = `${data.job}`;
  emailInput.value = `${data.email}`;
  phoneInput.value = `${data.phone}`;
  linkedinInput.value = `${data.linkedin}`;
  githubInput.value = `${data.github}`;

  if (data.photo === '') {
    clearImage();
  } else {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
};

paintData();
previewCard(data);


//palette

const allPalette = document.querySelectorAll('.color-box-input');
const previewContainer = document.querySelector('.js_preview_palette');



function paintPalette (palette) {
  previewContainer.classList.remove('palette-1', 'palette-2', 'palette-3');
  previewContainer.classList.add(`palette-${palette}`);
}

function handlerRadio (ev) {
  const palette = parseInt(ev.currentTarget.value);
  data.palette = palette;
  paintPalette(palette);

}

for (const onePalette of allPalette) {
  onePalette.addEventListener('click', handlerRadio);
}

//Reset button

const resetButton = document.querySelector('.js_reset_button');

const handleClickReset = (ev) => {
  ev.preventDefault();
  clearObjectData();
  previewCard(data);
  allInputs.reset();
  clearImage();
  clearSubmitButton();
  localStorage.removeItem('dataStorage');
};

function clearSubmitButton () {
  linkCard.classList.add('collapsed');
  submitButton.classList.remove('submit-button-gray');
}

function clearImage () {
  profileImage.style.backgroundImage = `url()`;
  profilePreview.style.backgroundImage = `url(./assets/images/retrato-defecto.png)`;
}

function clearObjectData () {
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

//Petición al servidor
const messageCard = document.querySelector('.js_message');
const urlCard = document.querySelector('.js_url');

function backgroundCreate () {
  submitButton.classList.add('submit-button-gray');
}

function handleCreateCard (ev) {
  ev.preventDefault();


  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((serverResp) => {


      if (serverResp.success) {
        messageCard.innerHTML = 'La tarjeta ha sido creada';
        urlCard.innerHTML = serverResp.cardURL;
        urlCard.href = serverResp.cardURL;
        backgroundCreate();
      } else {
        messageCard.innerHTML = 'Debes rellenar todos los campos';
      }
    });
}

submitButton.addEventListener('click', handleCreateCard);

//Botón Twitter
const buttonTwitter = document.querySelector('.js_button_twitter');

function handleTwitterClick () {
  const hrefUrlCard = urlCard.href;
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=%C2%A1¡¡He%20creado%20mi%20propia%20tarjeta%20de%20contacto!!!%20Puedes%20verla%20aqu%C3%AD%3A&url=${hrefUrlCard}`;
}

buttonTwitter.addEventListener('click', handleTwitterClick);