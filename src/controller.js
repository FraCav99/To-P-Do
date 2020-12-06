export default function controller(view, model) {
    const DOM = {
        darkModeSwitch: document.querySelector('input[type="checkbox"]'),
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
        cancelListModal: document.querySelector('.deletion-modal'), // cancelation modal
        closeCancelListModalBtn: document.getElementById('cancel'),
        confirmCancelationListBtn: document.getElementById('delete'),
        listItemsContainer: document.querySelector('.list-items-container'), // Elements inside list container
        listTitle: document.getElementById('list-title'),
        itemTitle: document.getElementById('item-title'),  // Input fields
        itemDate: document.getElementById('item-duedate'),
        itemPriority: document.getElementById('item-priority'),
        itemDescription: document.getElementById('description')
    }

    // Hold the clicked list name
    let targetTextContent;

    // Toggle dark mode
    DOM.darkModeSwitch.addEventListener('click', () => view.toggleDarkMode(DOM.darkModeSwitch));

    // Show modal container and its modal
    DOM.addNewListBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.listTitleModal));
    DOM.addNewItemBtn.addEventListener('click', () => view.showModal(DOM.modalContainer, DOM.itemInputModal));

    // Use event delegation for click listener on delete list buttons
    DOM.listsContainer.addEventListener('click', ev => {
        if (ev.target.classList.contains('list')) {
            // Avoid to have 'X' at the end of the list name
            // e.g: 'shoppingX' --> 'shopping'
            targetTextContent = ev.target.textContent;
            targetTextContent = targetTextContent.slice(0, -1);
            
            view.showTodos(targetTextContent, DOM.listItemsContainer, DOM.listTitle);
        }

        if (ev.target.classList.contains('delete-list')) {
            targetTextContent = ev.target.parentNode.textContent;
            targetTextContent = targetTextContent.slice(0, -1);

            view.showModal(DOM.modalContainer, DOM.cancelListModal);
        }
    });

    // Close modal container and its modal
    DOM.discardTitleBtn.addEventListener('click', ev => {
        view.resetInputField(DOM.listTitleInput);   // reset input field if something was written
        view.closeModal(ev, DOM.modalContainer, DOM.listTitleModal);
    });
    DOM.discardItemBtn.addEventListener('click', ev => {
        // Resetting input fields
        view.resetInputField(DOM.itemTitle);
        view.resetInputField(DOM.itemDate);
        view.resetInputField(DOM.itemDescription);

        view.closeModal(ev, DOM.modalContainer, DOM.itemInputModal);
    });
    DOM.closeCancelListModalBtn.addEventListener('click', ev => view.closeModal(ev, DOM.modalContainer, DOM.cancelListModal));

    // Create a new todo list
    DOM.addListBtn.addEventListener('click', ev => {
        if (DOM.listTitleInput.value !== '') {
            model.createList(DOM.listTitleInput.value);
            view.createListDiv(DOM.listsContainer);
            view.resetInputField(DOM.listTitleInput);
            view.closeModal(ev, DOM.modalContainer, DOM.listTitleModal);
        }
    });

    // Delete a list
    DOM.confirmCancelationListBtn.addEventListener('click', ev => {
        if (targetTextContent !== "") {
            model.deleteList(targetTextContent);
            view.createListDiv(DOM.listsContainer);
            view.closeModal(ev, DOM.modalContainer, DOM.cancelListModal);
        }

        targetTextContent = "";
    });

    // Add new todo for the current list
    DOM.addItemBtn.addEventListener('click', ev => {
        if (!targetTextContent || localStorage.length === 0) {
            // Resetting input fields
            view.resetInputField(DOM.itemTitle);
            view.resetInputField(DOM.itemDate);
            view.resetInputField(DOM.itemDescription);

            view.closeModal(ev, DOM.modalContainer, DOM.itemInputModal);
        } else if (
            DOM.itemTitle.value !== "" &&
            DOM.itemDate.value !== ""
        ) {
            model.addTodo(
                targetTextContent,
                DOM.itemTitle.value,
                DOM.itemDate.value,
                DOM.itemPriority.value,
                DOM.itemDescription.value
            );

            // Resetting input fields
            view.resetInputField(DOM.itemTitle);
            view.resetInputField(DOM.itemDate);
            view.resetInputField(DOM.itemDescription);

            view.closeModal(ev, DOM.modalContainer, DOM.itemInputModal);
            view.showTodos(targetTextContent, DOM.listItemsContainer, DOM.listTitle);
        }
    });

    // Display the list
    view.createListDiv(DOM.listsContainer);
}