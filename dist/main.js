(()=>{"use strict";!function(e,t){const l={darkModeSwitch:document.querySelector('input[type="checkbox"]'),modalContainer:document.querySelector(".modal-container"),listTitleModal:document.querySelector(".title-input"),listsContainer:document.querySelector(".lists-container"),addNewListBtn:document.getElementById("add-new-list"),discardTitleBtn:document.getElementById("discard-list-title"),listTitleInput:document.getElementById("list-title-input"),addListBtn:document.getElementById("add-list-title"),itemInputModal:document.querySelector(".item-input"),addNewItemBtn:document.getElementById("add-new-todo"),addItemBtn:document.getElementById("add-item"),discardItemBtn:document.getElementById("discard-item"),cancelListModal:document.querySelector(".deletion-modal"),closeCancelListModalBtn:document.getElementById("cancel"),confirmCancelationListBtn:document.getElementById("delete")};l.darkModeSwitch.addEventListener("click",(()=>e.toggleDarkMode(l.darkModeSwitch))),l.addNewListBtn.addEventListener("click",(()=>e.showModal(l.modalContainer,l.listTitleModal))),l.addNewItemBtn.addEventListener("click",(()=>e.showModal(l.modalContainer,l.itemInputModal))),l.listsContainer.addEventListener("click",(t=>{(t.target.classList.contains("delete-list")||"path"===t.target.tagName||"svg"===t.target.tagName)&&e.showModal(l.modalContainer,l.cancelListModal)})),l.discardTitleBtn.addEventListener("click",(t=>{e.resetInputField(l.listTitleInput),e.closeModal(t,l.modalContainer,l.listTitleModal)})),l.discardItemBtn.addEventListener("click",(t=>e.closeModal(t,l.modalContainer,l.itemInputModal))),l.closeCancelListModalBtn.addEventListener("click",(t=>e.closeModal(t,l.modalContainer,l.cancelListModal))),l.addListBtn.addEventListener("click",(d=>{""!==l.listTitleInput.value&&(t.createList(l.listTitleInput.value),e.resetInputField(l.listTitleInput),e.closeModal(d,l.modalContainer,l.listTitleModal))}))}({toggleDarkMode:e=>{const t=document.getElementById("dark");e.checked?t.rel="stylesheet":t.rel="stylesheet alternate"},resetInputField:e=>e.value="",showModal:(e,t)=>{e.classList.remove("visible"),t.classList.remove("visible")},closeModal:(e,t,l)=>{t.classList.add("visible"),l.classList.add("visible"),e.preventDefault()}},{createList:e=>{localStorage.setItem(e,JSON.stringify([]))}})})();