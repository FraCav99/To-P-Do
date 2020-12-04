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

        for (let i = 0; i < localStorage.length; i++) {
            //console.log(localStorage.key(i));
            
            const list = document.createElement('li');
            list.classList.add('list');
            list.textContent = localStorage.key(i);
    
            // Create the delete list button
            const deleteListBtn = document.createElement('button');
            deleteListBtn.classList.add('delete-list');
    
            // Create the trash icon button
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.setAttribute('viewBox', '0 0 24 24');
            path.setAttribute('d', 'M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z');
            svg.append(path);
            deleteListBtn.append(svg);
    
            // append the button to li element
            list.append(deleteListBtn);
    
            // append list element to list container
            listsContainer.append(list);
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