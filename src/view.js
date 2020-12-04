export default function view() {

    const toggleDarkMode = switcher =>  {
        const darkStylesheet = document.getElementById('dark');
        switcher.checked ?
        darkStylesheet.rel = 'stylesheet' :
        darkStylesheet.rel = 'stylesheet alternate';
    }

    const resetInputField = field => field.value = '';

    const showModal = (mainModalContainer, modal) => {
        // Make modal container and its modal visible
        mainModalContainer.classList.remove('visible');
        modal.classList.remove('visible');
    }

    const closeModal = (ev, mainModalContainer, modal) => {
        // Make modal container and its modal invisible
        mainModalContainer.classList.add('visible');
        modal.classList.add('visible');

        // Prevent normal behaviour of form
        // when buttons are clicked
        ev.preventDefault();
    }

    const _removeChilds = container => {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }

    const createListDiv = listsContainer => {
        // Refresh the list names resetting it
        _removeChilds(listsContainer);

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const list = document.createElement('li');
                list.classList.add('list');
                list.textContent = localStorage.key(i);
        
                // Create the delete list button
                const deleteListBtn = document.createElement('button');
                deleteListBtn.classList.add('delete-list');
                deleteListBtn.textContent = 'X';
        
                // append the button to li element
                list.append(deleteListBtn);
        
                // append list element to list container
                listsContainer.append(list);
            }
        } else {
            const par = document.createElement('p');
            par.textContent = "Start by creating a new list";

            listsContainer.append(par);
        }
    }

    return {
        toggleDarkMode,
        resetInputField,
        showModal,
        closeModal,
        createListDiv,
    }
}