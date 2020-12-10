(()=>{"use strict";const e={darkModeSwitch:document.querySelector('input[type="checkbox"]'),sideBar:document.querySelector(".sidebar"),closeSideBarBtn:document.querySelector(".close-sidebar-btn"),openSideBarBtn:document.querySelector(".burger"),modalContainer:document.querySelector(".modal-container"),listTitleModal:document.querySelector(".title-input"),listsContainer:document.querySelector(".lists-container"),addNewListBtn:document.getElementById("add-new-list"),discardTitleBtn:document.getElementById("discard-list-title"),listTitleInput:document.getElementById("list-title-input"),addListBtn:document.getElementById("add-list-title"),itemInputModal:document.querySelector(".item-input"),addNewItemBtn:document.getElementById("add-new-todo"),addItemBtn:document.getElementById("add-item"),discardItemBtn:document.getElementById("discard-item"),editItemModal:document.querySelector(".edit-item-input"),editTitleInput:document.getElementById("item-edit-title"),editDateInput:document.getElementById("item-edit-duedate"),editPriorityInput:document.getElementById("item-edit-priority"),editDescrInput:document.getElementById("edit-description"),confirmEditBtn:document.getElementById("edit-item"),discardEditBtn:document.getElementById("discard-edit-item"),infoItemModal:document.querySelector(".info-item-input"),infoItemTitle:document.getElementById("item-info-title"),infoItemDate:document.getElementById("item-info-duedate"),infoItemPriority:document.getElementById("item-info-priority"),infoItemDesc:document.getElementById("info-description"),closeInfoBtn:document.getElementById("close-info-item"),cancelListModal:document.querySelector(".deletion-modal"),closeCancelListModalBtn:document.getElementById("cancel"),confirmCancelationListBtn:document.getElementById("delete"),listItemsContainer:document.querySelector(".list-items-container"),listTitle:document.getElementById("list-title"),itemTitle:document.getElementById("item-title"),itemDate:document.getElementById("item-duedate"),itemPriority:document.getElementById("item-priority"),itemDescription:document.getElementById("description")};!function(t,i){let o,d,n,l;e.darkModeSwitch.addEventListener("click",(()=>t.toggleDarkMode(e.darkModeSwitch))),e.openSideBarBtn.addEventListener("click",(()=>{t.toggleSideBar(e.sideBar)})),e.closeSideBarBtn.addEventListener("click",(()=>{t.toggleSideBar(e.sideBar)})),e.addNewListBtn.addEventListener("click",(()=>t.showModal(e.modalContainer,e.listTitleModal))),e.addNewItemBtn.addEventListener("click",(()=>t.showModal(e.modalContainer,e.itemInputModal))),e.listsContainer.addEventListener("click",(i=>{i.target.classList.contains("list")&&(o=i.target.textContent,o=o.slice(0,-1),t.toggleSideBar(e.sideBar),t.showTodos(o,e.listItemsContainer,e.listTitle),e.addNewItemBtn.classList.remove("visible")),i.target.classList.contains("delete-list")&&(o=i.target.parentNode.textContent,o=o.slice(0,-1),t.showModal(e.modalContainer,e.cancelListModal))})),e.discardTitleBtn.addEventListener("click",(i=>{t.resetInputField(e.listTitleInput),t.closeModal(i,e.modalContainer,e.listTitleModal)})),e.discardItemBtn.addEventListener("click",(i=>{t.resetInputField(e.itemTitle),t.resetInputField(e.itemDate),t.resetInputField(e.itemDescription),t.closeModal(i,e.modalContainer,e.itemInputModal)})),e.closeCancelListModalBtn.addEventListener("click",(i=>t.closeModal(i,e.modalContainer,e.cancelListModal))),e.addListBtn.addEventListener("click",(o=>{""!==e.listTitleInput.value&&(i.createList(e.listTitleInput.value),t.createListDiv(e.listsContainer),t.resetInputField(e.listTitleInput),t.closeModal(o,e.modalContainer,e.listTitleModal))})),e.confirmCancelationListBtn.addEventListener("click",(d=>{""!==o&&(i.deleteList(o),t.createListDiv(e.listsContainer),t.closeModal(d,e.modalContainer,e.cancelListModal)),t.clearListContainer(e.listItemsContainer),e.addNewItemBtn.classList.add("visible"),o="",e.listTitle.textContent="Select a list or create a new one."})),e.addItemBtn.addEventListener("click",(d=>{o&&0!==localStorage.length?""!==e.itemTitle.value&&""!==e.itemDate.value&&(i.addTodo(o,e.itemTitle.value,e.itemDate.value,e.itemPriority.value,e.itemDescription.value),t.resetInputField(e.itemTitle),t.resetInputField(e.itemDate),t.resetInputField(e.itemDescription),t.closeModal(d,e.modalContainer,e.itemInputModal),t.showTodos(o,e.listItemsContainer,e.listTitle)):(t.resetInputField(e.itemTitle),t.resetInputField(e.itemDate),t.resetInputField(e.itemDescription),t.closeModal(d,e.modalContainer,e.itemInputModal))})),e.discardEditBtn.addEventListener("click",(i=>{t.closeModal(i,e.modalContainer,e.editItemModal)})),e.confirmEditBtn.addEventListener("click",(d=>{""!==e.editTitleInput.value&&""!==e.editDateInput.value&&(i.editTodo(o,l,e.editTitleInput.value,e.editDateInput.value,e.editPriorityInput.value,e.editDescrInput.value),t.closeModal(d,e.modalContainer,e.editItemModal),t.showTodos(o,e.listItemsContainer,e.listTitle))})),e.closeInfoBtn.addEventListener("click",(i=>{t.closeModal(i,e.modalContainer,e.infoItemModal)})),e.listItemsContainer.addEventListener("click",(a=>{if("action"===a.target.className){d=document.querySelectorAll(".item"),n=a.target.parentNode.parentNode;for(let e=0;e<d.length;e++)if(d[e]===n){l=e;break}switch(a.target.getAttribute("id")){case"modify":t.showEditModal(e.modalContainer,e.editItemModal,l,o,e.editTitleInput,e.editDateInput,e.editPriorityInput,e.editDescrInput);break;case"checked":i.checkTodo(o,l),t.showTodos(o,e.listItemsContainer,e.listTitle);break;case"info":t.showEditModal(e.modalContainer,e.infoItemModal,l,o,e.infoItemTitle,e.infoItemDate,e.infoItemPriority,e.infoItemDesc);break;case"delete":i.deleteTodo(o,l),l="",t.showTodos(o,e.listItemsContainer,e.listTitle)}}})),i.createList("demo"),i.addTodo("demo","high priority","2020-12-31","high","this item has high priority"),i.addTodo("demo","medium priority","2020-12-31","medium","this item has medium priority"),i.addTodo("demo","low priority","2020-12-31","low","this item has low priority"),i.addTodo("demo","first button can modify item","2020-12-31","low","this item has low priority"),i.addTodo("demo","second button can mark item as complete","2020-12-31","low","this item has low priority"),i.addTodo("demo","third button can show item's info","2020-12-31","low","this item has low priority"),i.addTodo("demo","fourth button can delete item","2020-12-31","low","this item has low priority"),t.createListDiv(e.listsContainer)}(function(){const e=(e,t)=>{e.classList.remove("visible"),t.classList.remove("visible")},t=e=>{for(;e.firstChild&&"add-new-todo"!==e.lastChild.id;)e.removeChild(e.lastChild)},i=(e,t)=>{const i=document.createElement("button");i.setAttribute("class","action"),i.setAttribute("id",e);const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 24 24");const d=document.createElementNS("http://www.w3.org/2000/svg","path");return d.setAttribute("d",t),o.append(d),i.append(o),i},o=(e,t)=>{const o=document.createElement("div");o.classList.add("item");const d=document.createElement("span");switch(d.classList.add("priority"),e.priority){case"high":d.classList.add("high");break;case"medium":d.classList.add("medium");break;case"low":d.classList.add("low")}const n=document.createElement("span");n.setAttribute("class","item-name"),n.textContent=e.title;const l=document.createElement("div");l.setAttribute("class","actionBtn");const a=i("modify","M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"),s=i("checked","M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"),r=i("info","M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"),c=document.createElement("button");c.setAttribute("class","action"),c.setAttribute("id","delete"),c.textContent="X",l.append(a),l.append(s),l.append(r),l.append(c),e.complete?(n.classList.add("checked"),o.classList.add("checkedDiv")):(n.classList.remove("checked"),o.classList.remove("checkedDiv")),o.append(d),o.append(n),o.append(l),t.append(o)};return{toggleDarkMode:e=>{const t=document.getElementById("dark");e.checked?t.rel="stylesheet":t.rel="stylesheet alternate"},toggleSideBar:e=>{e.classList.toggle("sidebar-active")},resetInputField:e=>e.value="",showModal:e,closeModal:(e,t,i)=>{t.classList.add("visible"),i.classList.add("visible"),e.preventDefault()},createListDiv:e=>{if((e=>{for(;e.firstChild;)e.removeChild(e.lastChild)})(e),localStorage.length>0)for(let t=0;t<localStorage.length;t++){const i=document.createElement("li");i.classList.add("list"),i.textContent=localStorage.key(t);const o=document.createElement("button");o.classList.add("delete-list"),o.textContent="X",i.append(o),e.append(i)}else{const t=document.createElement("p");t.textContent="Start by creating a new list",e.append(t)}},showTodos:(e,i,d)=>{if(JSON.parse(localStorage.getItem(e)).length>0){let n=JSON.parse(localStorage.getItem(e));d.textContent=e,t(i);for(let e of n)o(e,i)}else{t(i);const o=document.createElement("p");o.style.textAlign="center",o.textContent="Add new todo(s) from the button above",i.append(o),d.textContent=e}},clearListContainer:t,showEditModal:(t,i,o,d,n,l,a,s)=>{const r=JSON.parse(localStorage.getItem(d)).find((e=>e.id===o));e(t,i),n.value=r.title,l.value=r.date,a.value=r.priority,s.value=r.description}}}(),{createList:e=>{localStorage.setItem(e,JSON.stringify([]))},deleteList:e=>{localStorage.removeItem(e)},addTodo:(e,t,i,o,d)=>{const n=JSON.parse(localStorage.getItem(e)),l={id:n.length,title:t,date:i,priority:o,description:d,complete:!1};n.push(l),localStorage.setItem(e,JSON.stringify(n))},editTodo:(e,t,i,o,d,n)=>{const l=JSON.parse(localStorage.getItem(e)),a=l.find((e=>e.id===t));a.id=t,a.title=i,a.date=o,a.priority=d,a.description=n;const s={id:a.id,title:a.title,date:a.date,priority:a.priority,description:a.description,complete:a.complete};l[t]=s,localStorage.setItem(e,JSON.stringify(l))},checkTodo:(e,t)=>{const i=JSON.parse(localStorage.getItem(e)),o=i.find((e=>e.id===t)),d={id:o.id,title:o.title,date:o.date,priority:o.priority,description:o.description,complete:!o.complete};i[t]=d,localStorage.setItem(e,JSON.stringify(i))},deleteTodo:(e,t)=>{const i=JSON.parse(localStorage.getItem(e)).filter((e=>e.id!==t)).map((e=>({id:e.id>t?e.id-1:e.id,title:e.title,date:e.date,priority:e.priority,description:e.description,complete:e.complete})));localStorage.setItem(e,JSON.stringify(i))}})})();