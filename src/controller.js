export default function controller(view, model) {
    const DOM = {
        darkModeSwitch: document.querySelector('input[type="checkbox"]'),
        addNewListBtn: document.getElementById('add__todo'),
        modalContainer: document.querySelector('.modal-container'),
        listTitleModal: document.querySelector('.title-input'),
        discardBtn: document.getElementById('discard'),
        addBtn: document.getElementById('add')
    }

    // Toggle dark mode
    DOM.darkModeSwitch.addEventListener('click', () => view.toggleDarkMode(DOM.darkModeSwitch));

    // Show modal container and its modal
    DOM.addNewListBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.listTitleModal));

    // Close modal container and its modal
    DOM.discardBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.listTitleModal))
}