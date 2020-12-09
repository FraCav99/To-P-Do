const DOM = {
    darkModeSwitch: document.querySelector('input[type="checkbox"]'),
    sideBar: document.querySelector('.sidebar'), // sidebar
    closeSideBarBtn: document.querySelector('.close-sidebar-btn'),
    openSideBarBtn: document.querySelector('.burger'),
    modalContainer: document.querySelector('.modal-container'),     // main modal container
    listTitleModal: document.querySelector('.title-input'),         // list title modal
    listsContainer: document.querySelector('.lists-container'),
    addNewListBtn: document.getElementById('add-new-list'),
    discardTitleBtn: document.getElementById('discard-list-title'),
    listTitleInput: document.getElementById('list-title-input'),
    addListBtn: document.getElementById('add-list-title'),
    itemInputModal: document.querySelector('.item-input'),      // add new item modal
    addNewItemBtn: document.getElementById('add-new-todo'),
    addItemBtn: document.getElementById('add-item'),
    discardItemBtn: document.getElementById('discard-item'),
    editItemModal: document.querySelector('.edit-item-input'),   // edit item modal
    editTitleInput: document.getElementById('item-edit-title'),
    editDateInput: document.getElementById('item-edit-duedate'),
    editPriorityInput: document.getElementById('item-edit-priority'),
    editDescrInput: document.getElementById('edit-description'),
    confirmEditBtn: document.getElementById('edit-item'),
    discardEditBtn: document.getElementById('discard-edit-item'),
    infoItemModal: document.querySelector('.info-item-input'),  // info item modal
    infoItemTitle: document.getElementById('item-info-title'),
    infoItemDate: document.getElementById('item-info-duedate'),
    infoItemPriority: document.getElementById('item-info-priority'),
    infoItemDesc: document.getElementById('info-description'),
    closeInfoBtn: document.getElementById('close-info-item'),
    cancelListModal: document.querySelector('.deletion-modal'), // cancelation modal
    closeCancelListModalBtn: document.getElementById('cancel'),
    confirmCancelationListBtn: document.getElementById('delete'),
    listItemsContainer: document.querySelector('.list-items-container'), // Elements inside list container
    listTitle: document.getElementById('list-title'),
    itemTitle: document.getElementById('item-title'),  // Input fields
    itemDate: document.getElementById('item-duedate'),
    itemPriority: document.getElementById('item-priority'),
    itemDescription: document.getElementById('description'),
}

export default DOM;