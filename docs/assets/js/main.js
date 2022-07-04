"use strict";console.log(">> Ready :)");const designHeader=document.querySelector(".js_header_design"),designContent=document.querySelector(".js_content_design"),angleDesign=document.querySelector(".js_angle_design"),dataHeader=document.querySelector(".js_header_data"),dataContent=document.querySelector(".js_content_data"),angleData=document.querySelector(".js_angle_data"),shareHeader=document.querySelector(".js_header_share"),shareContent=document.querySelector(".js_content_share"),angleShare=document.querySelector(".js_angle_share"),handleClick=e=>{const i=e.currentTarget;i.classList.contains("js_header_design")?(designContent.classList.toggle("collapsed"),dataContent.classList.add("collapsed"),shareContent.classList.add("collapsed"),angleDesign.classList.toggle("rotate"),angleData.classList.add("rotate"),angleShare.classList.add("rotate")):i.classList.contains("js_header_data")?(dataContent.classList.toggle("collapsed"),designContent.classList.add("collapsed"),shareContent.classList.add("collapsed"),angleData.classList.toggle("rotate"),angleShare.classList.add("rotate"),angleDesign.classList.add("rotate")):i.classList.contains("js_header_share")&&(shareContent.classList.toggle("collapsed"),dataContent.classList.add("collapsed"),designContent.classList.add("collapsed"),angleShare.classList.toggle("rotate"),angleData.classList.add("rotate"),angleDesign.classList.add("rotate"))};designHeader.addEventListener("click",handleClick),dataHeader.addEventListener("click",handleClick),shareHeader.addEventListener("click",handleClick);const submitButton=document.querySelector(".js_submit_button"),linkCard=document.querySelector(".js_link_card"),handleClickSubmit=e=>{e.preventDefault(),linkCard.classList.remove("collapsed")};submitButton.addEventListener("click",handleClickSubmit);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const i=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(i)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}fileField.addEventListener("change",getImage);const allInputs=document.querySelector(".js_all_inputs"),previewName=document.querySelector(".js_preview_name"),previewJob=document.querySelector(".js_preview_job"),previewEmail=document.querySelector(".js_preview_email"),previewPhone=document.querySelector(".js_preview_phone"),previewLinkedin=document.querySelector(".js_preview_linkedin"),previewGithub=document.querySelector(".js_preview_github"),data={palette:1,name:"",job:"",email:"",phone:"",linkedin:"",github:""},previewCard=()=>{""!==data.name?previewName.innerHTML=data.name:previewName.innerHTML="Nombre Apellido",""!==data.job?previewJob.innerHTML=data.job:previewJob.innerHTML="Front-end developer",previewEmail.href=data.email,previewPhone.href=data.phone,previewLinkedin.href=data.linkedin,previewGithub.href=data.github},handleInput=e=>{const i=e.target.name,s=e.target.value;data[i]=s,console.log(data.name),""!==data.name?previewName.innerHTML=data.name:previewName.innerHTML="Nombre Apellido",""!==data.job?previewJob.innerHTML=data.job:previewJob.innerHTML="Front-end developer",previewEmail.href=data.email,previewPhone.href=data.phone,previewLinkedin.href=data.linkedin,previewGithub.href=data.github};allInputs.addEventListener("keyup",handleInput);const palette=document.querySelector(".js_palette"),palette1=document.querySelector(".js_palette1"),palette2=document.querySelector(".js_palette2"),palette3=document.querySelector(".js_palette3"),previewIconPhone=document.querySelector(".js_preview_icon_phone"),previewIconEmail=document.querySelector(".js_preview_icon_email"),previewIconLinkedin=document.querySelector(".js_preview_icon_linkedin"),previewIconGithub=document.querySelector(".js_preview_icon_github"),previewContainer=document.querySelector(".js_preview_container"),previewNamePalette1=()=>{previewName.classList.remove("name-red-preview"),previewName.classList.remove("name-blue-preview"),previewName.classList.add("name-default-preview")},previewNamePalette2=()=>{previewName.classList.remove("name-blue-preview"),previewName.classList.remove("name-default-preview"),previewName.classList.add("name-red-preview")},previewNamePalette3=()=>{previewName.classList.remove("name-red-preview"),previewName.classList.remove("name-default-preview"),previewName.classList.add("name-blue-preview")},previewJobPalette1=()=>{previewJob.classList.remove("job-red-preview"),previewJob.classList.remove("job-blue-preview"),previewJob.classList.add("job-default-preview")},previewJobPalette2=()=>{previewJob.classList.remove("job-blue-preview"),previewJob.classList.remove("job-default-preview"),previewJob.classList.add("job-red-preview")},previewJobPalette3=()=>{previewJob.classList.remove("job-red-preview"),previewJob.classList.remove("job-default-preview"),previewJob.classList.add("job-blue-preview")},previewIconPhone1=()=>{previewIconPhone.classList.remove("icons-red-preview"),previewIconPhone.classList.remove("icons-blue-preview"),previewIconPhone.classList.add("icons-default-preview")},previewIconEmail1=()=>{previewIconEmail.classList.remove("icons-red-preview"),previewIconEmail.classList.remove("icons-blue-preview"),previewIconEmail.classList.add("icons-default-preview")},previewIconLinkedin1=()=>{previewIconLinkedin.classList.remove("icons-red-preview"),previewIconLinkedin.classList.remove("icons-blue-preview"),previewIconLinkedin.classList.add("icons-default-preview")},previewIconGithub1=()=>{previewIconGithub.classList.remove("icons-red-preview"),previewIconGithub.classList.remove("icons-blue-preview"),previewIconGithub.classList.add("icons-default-preview")},previewIconPhone2=()=>{previewIconPhone.classList.remove("icons-blue-preview"),previewIconPhone.classList.remove("icons-default-preview"),previewIconPhone.classList.add("icons-red-preview")},previewIconEmail2=()=>{previewIconEmail.classList.remove("icons-blue-preview"),previewIconEmail.classList.remove("icons-default-preview"),previewIconEmail.classList.add("icons-red-preview")},previewIconLinkedin2=()=>{previewIconLinkedin.classList.remove("icons-blue-preview"),previewIconLinkedin.classList.remove("icons-default-preview"),previewIconLinkedin.classList.add("icons-red-preview")},previewIconGithub2=()=>{previewIconGithub.classList.remove("icons-blue-preview"),previewIconGithub.classList.remove("icons-default-preview"),previewIconGithub.classList.add("icons-red-preview")},previewIconPhone3=()=>{previewIconPhone.classList.remove("icons-red-preview"),previewIconPhone.classList.remove("icons-default-preview"),previewIconPhone.classList.add("icons-blue-preview")},previewIconEmail3=()=>{previewIconEmail.classList.remove("icons-red-preview"),previewIconEmail.classList.remove("icons-default-preview"),previewIconEmail.classList.add("icons-blue-preview")},previewIconLinkedin3=()=>{previewIconLinkedin.classList.remove("icons-red-preview"),previewIconLinkedin.classList.remove("icons-default-preview"),previewIconLinkedin.classList.add("icons-blue-preview")},previewIconGithub3=()=>{previewIconGithub.classList.remove("icons-red-preview"),previewIconGithub.classList.remove("icons-default-preview"),previewIconGithub.classList.add("icons-blue-preview")},previewIconPalette1=()=>{previewIconPhone.classList.remove("icons-red-preview"),previewIconPhone.classList.remove("icons-blue-preview"),previewIconPhone.classList.add("icons-default-preview"),previewIconEmail.classList.remove("icons-red-preview"),previewIconEmail.classList.remove("icons-blue-preview"),previewIconEmail.classList.add("icons-default-preview"),previewIconLinkedin.classList.remove("icons-red-preview"),previewIconLinkedin.classList.remove("icons-blue-preview"),previewIconLinkedin.classList.add("icons-default-preview"),previewIconGithub.classList.remove("icons-red-preview"),previewIconGithub.classList.remove("icons-blue-preview"),previewIconGithub.classList.add("icons-default-preview")},previewIconPalette2=()=>{previewIconPhone.classList.remove("icons-blue-preview"),previewIconPhone.classList.remove("icons-default-preview"),previewIconPhone.classList.add("icons-red-preview"),previewIconEmail.classList.remove("icons-blue-preview"),previewIconEmail.classList.remove("icons-default-preview"),previewIconEmail.classList.add("icons-red-preview"),previewIconLinkedin.classList.remove("icons-blue-preview"),previewIconLinkedin.classList.remove("icons-default-preview"),previewIconLinkedin.classList.add("icons-red-preview"),previewIconGithub.classList.remove("icons-blue-preview"),previewIconGithub.classList.remove("icons-default-preview"),previewIconGithub.classList.add("icons-red-preview")},previewIconPalette3=()=>{previewIconPhone.classList.remove("icons-red-preview"),previewIconPhone.classList.remove("icons-default-preview"),previewIconPhone.classList.add("icons-blue-preview"),previewIconEmail.classList.remove("icons-red-preview"),previewIconEmail.classList.remove("icons-default-preview"),previewIconEmail.classList.add("icons-blue-preview"),previewIconLinkedin.classList.remove("icons-red-preview"),previewIconLinkedin.classList.remove("icons-default-preview"),previewIconLinkedin.classList.add("icons-blue-preview"),previewIconGithub.classList.remove("icons-red-preview"),previewIconGithub.classList.remove("icons-default-preview"),previewIconGithub.classList.add("icons-blue-preview")},previewContainerPalette1=()=>{previewContainer.classList.remove("container-red-preview"),previewContainer.classList.remove("container-blue-preview"),previewContainer.classList.add("container-default-preview")},previewContainerPalette2=()=>{previewContainer.classList.remove("container-blue-preview"),previewContainer.classList.remove("container-default-preview"),previewContainer.classList.add("container-red-preview")},previewContainerPalette3=()=>{previewContainer.classList.remove("container-red-preview"),previewContainer.classList.remove("container-default-preview"),previewContainer.classList.add("container-blue-preview")};palette.addEventListener("click",()=>{palette1.checked?(previewName.classList.remove("name-red-preview"),previewName.classList.remove("name-blue-preview"),previewName.classList.add("name-default-preview"),previewJob.classList.remove("job-red-preview"),previewJob.classList.remove("job-blue-preview"),previewJob.classList.add("job-default-preview"),previewIconPhone.classList.remove("icons-red-preview"),previewIconPhone.classList.remove("icons-blue-preview"),previewIconPhone.classList.add("icons-default-preview"),previewIconEmail.classList.remove("icons-red-preview"),previewIconEmail.classList.remove("icons-blue-preview"),previewIconEmail.classList.add("icons-default-preview"),previewIconLinkedin.classList.remove("icons-red-preview"),previewIconLinkedin.classList.remove("icons-blue-preview"),previewIconLinkedin.classList.add("icons-default-preview"),previewIconGithub.classList.remove("icons-red-preview"),previewIconGithub.classList.remove("icons-blue-preview"),previewIconGithub.classList.add("icons-default-preview"),previewContainer.classList.remove("container-red-preview"),previewContainer.classList.remove("container-blue-preview"),previewContainer.classList.add("container-default-preview")):palette2.checked?(previewName.classList.remove("name-blue-preview"),previewName.classList.remove("name-default-preview"),previewName.classList.add("name-red-preview"),previewJob.classList.remove("job-blue-preview"),previewJob.classList.remove("job-default-preview"),previewJob.classList.add("job-red-preview"),previewIconPhone.classList.remove("icons-blue-preview"),previewIconPhone.classList.remove("icons-default-preview"),previewIconPhone.classList.add("icons-red-preview"),previewIconEmail.classList.remove("icons-blue-preview"),previewIconEmail.classList.remove("icons-default-preview"),previewIconEmail.classList.add("icons-red-preview"),previewIconLinkedin.classList.remove("icons-blue-preview"),previewIconLinkedin.classList.remove("icons-default-preview"),previewIconLinkedin.classList.add("icons-red-preview"),previewIconGithub.classList.remove("icons-blue-preview"),previewIconGithub.classList.remove("icons-default-preview"),previewIconGithub.classList.add("icons-red-preview"),previewContainer.classList.remove("container-blue-preview"),previewContainer.classList.remove("container-default-preview"),previewContainer.classList.add("container-red-preview")):palette3.checked&&(previewName.classList.remove("name-red-preview"),previewName.classList.remove("name-default-preview"),previewName.classList.add("name-blue-preview"),previewJob.classList.remove("job-red-preview"),previewJob.classList.remove("job-default-preview"),previewJob.classList.add("job-blue-preview"),previewIconPhone.classList.remove("icons-red-preview"),previewIconPhone.classList.remove("icons-default-preview"),previewIconPhone.classList.add("icons-blue-preview"),previewIconEmail.classList.remove("icons-red-preview"),previewIconEmail.classList.remove("icons-default-preview"),previewIconEmail.classList.add("icons-blue-preview"),previewIconLinkedin.classList.remove("icons-red-preview"),previewIconLinkedin.classList.remove("icons-default-preview"),previewIconLinkedin.classList.add("icons-blue-preview"),previewIconGithub.classList.remove("icons-red-preview"),previewIconGithub.classList.remove("icons-default-preview"),previewIconGithub.classList.add("icons-blue-preview"),previewContainer.classList.remove("container-red-preview"),previewContainer.classList.remove("container-default-preview"),previewContainer.classList.add("container-blue-preview"))});