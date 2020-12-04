export default function controller(view, model) {
    const DOM = {
        darkModeSwitch: document.querySelector('input[type="checkbox"]'),
        modalContainer: document.querySelector('.modal-container'),     // main modal container
        listTitleModal: document.querySelector('.title-input'),         // list title modal
        listsContainer: document.querySelector('.lists-container'),
        addNewListBtn: document.getElementById('add-new-list'),
        discardTitleBtn: document.getElementById('discard-list-title'),
        addListBtn: document.getElementById('add-list-title'),
        itemInputModal: document.querySelector('.item-input'),      // add new item modal
        addNewItemBtn: document.getElementById('add-new-todo'),
        addItemBtn: document.getElementById('add-item'),
        discardItemBtn: document.getElementById('discard-item'),
        cancelListModal: document.querySelector('.deletion-modal'), // cancelation modal
        closeCancelListModalBtn: document.getElementById('cancel'),
        confirmCancelationListBtn: document.getElementById('delete')
    }

    console.log(DOM.deleteListButton);

    // Toggle dark mode
    DOM.darkModeSwitch.addEventListener('click', () => view.toggleDarkMode(DOM.darkModeSwitch));

    // Show modal container and its modal
    DOM.addNewListBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.listTitleModal));
    DOM.addNewItemBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.itemInputModal));

    // Use event delegation for click listener on delete buttons
    DOM.listsContainer.addEventListener('click', ev => {
        console.log(ev.target.tagName);
        if (ev.target.classList.contains('delete-list') || ev.target.tagName === 'path' || ev.target.tagName === 'svg') {
            view.showModal(DOM.modalContainer, DOM.cancelListModal)
        }
    })

    // Close modal container and its modal
    DOM.discardTitleBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.listTitleModal));
    DOM.discardItemBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.itemInputModal));
    DOM.closeCancelListModalBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.cancelListModal))
}