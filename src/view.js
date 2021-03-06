export default function view() {

    const _darkStylesheet = document.getElementById('dark');
    let _theme = localStorage.getItem('theme');
    
    const _enableDarkMode = () => {
        _darkStylesheet.rel = 'stylesheet';
        localStorage.setItem('theme', 'dark');
    }

    const _disableDarkMode = () => {
        _darkStylesheet.rel = 'stylesheet alternate';
        localStorage.setItem('theme', null);
    }

    _theme === 'dark' ? _enableDarkMode() : null;

    const toggleDarkMode = switcher =>  {
        // Persist dark mode even if page is reload
        _theme = localStorage.getItem('theme');
        if (switcher.checked && _theme !== 'dark') {
            _enableDarkMode();
            console.log(_theme);
        } else {
            _disableDarkMode();
            console.log(_theme);
        }
    }

    const toggleSideBar = sideBar => {
        sideBar.classList.toggle('sidebar-active');
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

    const clearListContainer = container => {
        while(container.firstChild) {
            if (container.lastChild.id !== 'add-new-todo') {
                container.removeChild(container.lastChild);
            } else break;
        }
    }

    const createListDiv = listsContainer => {
        // Refresh the list names resetting it
        _removeChilds(listsContainer);

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'theme') {
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
            }
        } else {
            const par = document.createElement('p');
            par.textContent = "Start by creating a new list";

            listsContainer.append(par);
        }
    }

    const _createBtn = (id, d) => {
        const button = document.createElement('button');
        button.setAttribute('class', 'action');
        button.setAttribute('id', id);
        const buttonSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        buttonSvg.setAttribute('viewBox', '0 0 24 24');
        const buttonPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        buttonPath.setAttribute("d", d);
        buttonSvg.append(buttonPath);
        button.append(buttonSvg);

        return button;
    }

    const _createTodoDiv = (todo, listContainer) => {
        // Create the main div element
        const item = document.createElement('div');
        item.classList.add('item');

        // Create priority circle
        const priority = document.createElement('span');
        priority.classList.add('priority');

        // Change color based on priority
        switch(todo.priority) {
            case 'high':
                priority.classList.add('high');
                break;
            case 'medium':
                priority.classList.add('medium');
                break;
            case 'low':
                priority.classList.add('low');
                break;
        }

        // Create todo title
        const todoTitle = document.createElement('span');
        todoTitle.setAttribute('class', 'item-name');
        todoTitle.textContent = todo.title;

        // Create action buttons div
        const actionBtnDiv = document.createElement('div');
        actionBtnDiv.setAttribute('class', 'actionBtn');

        // Create buttons for actionBtnDiv
        const modifiyBtn = _createBtn('modify', 'M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z');
        const checkedBtn = _createBtn('checked', 'M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z');
        const infoBtn = _createBtn('info', 'M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z');
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'action');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'X';

        // Attach all buttons to action button div
        actionBtnDiv.append(modifiyBtn);
        actionBtnDiv.append(checkedBtn);
        actionBtnDiv.append(infoBtn);
        actionBtnDiv.append(deleteBtn);

        // Apply effects if todo is completed
        if (todo.complete) {
            todoTitle.classList.add('checked');
            item.classList.add('checkedDiv');
        } else {
            todoTitle.classList.remove('checked');
            item.classList.remove('checkedDiv');
        }

        // Attach elements to item
        item.append(priority);
        item.append(todoTitle);
        item.append(actionBtnDiv);

        // Where all items will be attached
        listContainer.append(item);
    }

    const showTodos = (selectList, listContainer, listTitle) => {
        if (JSON.parse(localStorage.getItem(selectList)).length > 0) {
            // Take element from selected list under object notation form
            let todos = JSON.parse(localStorage.getItem(selectList));
            
            // Make some DOM modifications
            // Change the list title
            listTitle.textContent = selectList;

            // Reload the elements inside listContainer
            clearListContainer(listContainer);

            // Display todos on screen
            for (let todo of todos) {
                _createTodoDiv(todo, listContainer);
            }
        } else {
            clearListContainer(listContainer);
            const par = document.createElement('p');
            par.style.textAlign = 'center';
            par.textContent = 'Add new todo(s) from the button above';
            listContainer.append(par);
            listTitle.textContent = selectList;
        }
    }

    const showEditModal = (
        mainModal,
        modal,
        itemId,
        currentList,
        titleInputField,
        dateInputField,
        priorityInputField,
        descInputField
    ) => {
        const tempArray = JSON.parse(localStorage.getItem(currentList));
        const editItem = tempArray.find(item => item.id === itemId);

        // Show modal
        showModal(mainModal, modal);

        // Set the input field value from the item object
        titleInputField.value = editItem.title;
        dateInputField.value = editItem.date;
        priorityInputField.value = editItem.priority;
        descInputField.value = editItem.description;
    }

    return {
        toggleDarkMode,
        toggleSideBar,
        resetInputField,
        showModal,
        closeModal,
        createListDiv,
        showTodos,
        clearListContainer,
        showEditModal
    }
}