(()=>{"use strict";!function(e,t){const d={darkModeSwitch:document.querySelector('input[type="checkbox"]'),addNewListBtn:document.getElementById("add__todo"),modalContainer:document.querySelector(".modal-container"),listTitleModal:document.querySelector(".title-input"),discardBtn:document.getElementById("discard"),addBtn:document.getElementById("add")};d.darkModeSwitch.addEventListener("click",(()=>e.toggleDarkMode(d.darkModeSwitch))),d.addNewListBtn.addEventListener("click",(()=>e.showModal(d.modalContainer,d.listTitleModal))),d.discardBtn.addEventListener("click",(t=>e.closeModal(t,d.modalContainer,d.listTitleModal)))}({toggleDarkMode:e=>{const t=document.getElementById("dark");e.checked?t.rel="stylesheet":t.rel="stylesheet alternate"},showModal:(e,t)=>{e.classList.remove("visible"),t.classList.remove("visible")},closeModal:(e,t,d)=>{t.classList.add("visible"),d.classList.add("visible"),e.preventDefault()}})})();