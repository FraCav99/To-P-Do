export default function controller(view, model) {
    const DOM = {
        darkModeSwitch: document.querySelector('input[type="checkbox"]'),
        addNewListBtn: document.getElementById('add-new-list'),
        addNewItemBtn: document.getElementById('add-new-todo'),
        modalContainer: document.querySelector('.modal-container'),
        listTitleModal: document.querySelector('.title-input'),
        itemInputModal: document.querySelector('.item-input'),
        discardTitleBtn: document.getElementById('discard-list-title'),
        discardItemBtn: document.getElementById('discard-item'),
        addListBtn: document.getElementById('add-list-title'),
        addItemBtn: document.getElementById('add-item')
    }

    // Toggle dark mode
    DOM.darkModeSwitch.addEventListener('click', () => view.toggleDarkMode(DOM.darkModeSwitch));

    // Show modal container and its modal
    DOM.addNewListBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.listTitleModal));
    DOM.addNewItemBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.itemInputModal));

    // Close modal container and its modal
    DOM.discardTitleBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.listTitleModal));
    DOM.discardItemBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.itemInputModal));
}