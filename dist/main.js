(()=>{"use strict";!function(t,e){const i={darkModeSwitch:document.querySelector('input[type="checkbox"]'),modalContainer:document.querySelector(".modal-container"),listTitleModal:document.querySelector(".title-input"),listsContainer:document.querySelector(".lists-container"),addNewListBtn:document.getElementById("add-new-list"),discardTitleBtn:document.getElementById("discard-list-title"),listTitleInput:document.getElementById("list-title-input"),addListBtn:document.getElementById("add-list-title"),itemInputModal:document.querySelector(".item-input"),addNewItemBtn:document.getElementById("add-new-todo"),addItemBtn:document.getElementById("add-item"),discardItemBtn:document.getElementById("discard-item"),cancelListModal:document.querySelector(".deletion-modal"),closeCancelListModalBtn:document.getElementById("cancel"),confirmCancelationListBtn:document.getElementById("delete"),listItemsContainer:document.querySelector(".list-items-container"),listTitle:document.getElementById("list-title"),itemTitle:document.getElementById("item-title"),itemDate:document.getElementById("item-duedate"),itemPriority:document.getElementById("item-priority"),itemDescription:document.getElementById("description")};let n;i.darkModeSwitch.addEventListener("click",(()=>t.toggleDarkMode(i.darkModeSwitch))),i.addNewListBtn.addEventListener("click",(()=>t.showModal(i.modalContainer,i.listTitleModal))),i.addNewItemBtn.addEventListener("click",(()=>t.showModal(i.modalContainer,i.itemInputModal))),i.listsContainer.addEventListener("click",(e=>{e.target.classList.contains("list")&&(n=e.target.textContent,n=n.slice(0,-1),t.showTodos(n,i.listItemsContainer,i.listTitle)),e.target.classList.contains("delete-list")&&(n=e.target.parentNode.textContent,n=n.slice(0,-1),t.showModal(i.modalContainer,i.cancelListModal))})),i.discardTitleBtn.addEventListener("click",(e=>{t.resetInputField(i.listTitleInput),t.closeModal(e,i.modalContainer,i.listTitleModal)})),i.discardItemBtn.addEventListener("click",(e=>{t.resetInputField(i.itemTitle),t.resetInputField(i.itemDate),t.resetInputField(i.itemDescription),t.closeModal(e,i.modalContainer,i.itemInputModal)})),i.closeCancelListModalBtn.addEventListener("click",(e=>t.closeModal(e,i.modalContainer,i.cancelListModal))),i.addListBtn.addEventListener("click",(n=>{""!==i.listTitleInput.value&&(e.createList(i.listTitleInput.value),t.createListDiv(i.listsContainer),t.resetInputField(i.listTitleInput),t.closeModal(n,i.modalContainer,i.listTitleModal))})),i.confirmCancelationListBtn.addEventListener("click",(l=>{""!==n&&(e.deleteList(n),t.createListDiv(i.listsContainer),t.closeModal(l,i.modalContainer,i.cancelListModal)),t.clearListContainer(i.listItemsContainer),n="",i.listTitle.textContent="Select a list or create a new one."})),i.addItemBtn.addEventListener("click",(l=>{n&&0!==localStorage.length?""!==i.itemTitle.value&&""!==i.itemDate.value&&(e.addTodo(n,i.itemTitle.value,i.itemDate.value,i.itemPriority.value,i.itemDescription.value),t.resetInputField(i.itemTitle),t.resetInputField(i.itemDate),t.resetInputField(i.itemDescription),t.closeModal(l,i.modalContainer,i.itemInputModal),t.showTodos(n,i.listItemsContainer,i.listTitle)):(t.resetInputField(i.itemTitle),t.resetInputField(i.itemDate),t.resetInputField(i.itemDescription),t.closeModal(l,i.modalContainer,i.itemInputModal))})),t.createListDiv(i.listsContainer)}(function(){const t=t=>{for(;t.firstChild&&"add-new-todo"!==t.lastChild.id;)t.removeChild(t.lastChild)},e=(t,e)=>{const i=document.createElement("button");i.setAttribute("class","action"),i.setAttribute("id",t);const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 24 24");const l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("d",e),n.append(l),i.append(n),i},i=(t,i)=>{const n=document.createElement("div");n.classList.add("item");const l=document.createElement("span");switch(l.classList.add("priority"),t.priority){case"high":l.classList.add("high");break;case"medium":l.classList.add("medium");break;case"low":l.classList.add("low")}const d=document.createElement("span");d.setAttribute("id","item-name"),d.textContent=t.title;const o=document.createElement("div");o.setAttribute("class","actionBtn");const a=e("modify","M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"),s=e("checked","M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"),c=e("info","M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"),r=document.createElement("button");r.setAttribute("class","action"),r.setAttribute("id","delete"),r.textContent="X",o.append(a),o.append(s),o.append(c),o.append(r),n.append(l),n.append(d),n.append(o),i.append(n)};return{toggleDarkMode:t=>{const e=document.getElementById("dark");t.checked?e.rel="stylesheet":e.rel="stylesheet alternate"},resetInputField:t=>t.value="",showModal:(t,e)=>{t.classList.remove("visible"),e.classList.remove("visible")},closeModal:(t,e,i)=>{e.classList.add("visible"),i.classList.add("visible"),t.preventDefault()},createListDiv:t=>{if((t=>{for(;t.firstChild;)t.removeChild(t.lastChild)})(t),localStorage.length>0)for(let e=0;e<localStorage.length;e++){const i=document.createElement("li");i.classList.add("list"),i.textContent=localStorage.key(e);const n=document.createElement("button");n.classList.add("delete-list"),n.textContent="X",i.append(n),t.append(i)}else{const e=document.createElement("p");e.textContent="Start by creating a new list",t.append(e)}},showTodos:(e,n,l)=>{if(JSON.parse(localStorage.getItem(e)).length>0){let d=JSON.parse(localStorage.getItem(e));l.textContent=e,t(n);for(let t of d)i(t,n)}else{t(n);const i=document.createElement("p");i.style.textAlign="center",i.textContent="Add new todo(s) from the button below",n.append(i),l.textContent=e}},clearListContainer:t}}(),{createList:t=>{localStorage.setItem(t,JSON.stringify([]))},deleteList:t=>{localStorage.removeItem(t)},addTodo:(t,e,i,n,l)=>{const d=JSON.parse(localStorage.getItem(t)),o={title:e,date:i,priority:n,description:l};d.push(o),localStorage.setItem(t,JSON.stringify(d))}})})();