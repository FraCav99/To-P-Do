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

    const _createTodoDiv = todo => {
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
            case 'medium':
                priority.classList.add('medium');
            case 'low':
                priority.classList.add('low');
        }

        // Create todo title
        const todoTitle = document.createElement('span');
        todoTitle.setAttribute('id', 'item-name');
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


        // Attach elements to item
        item.append(priority);
        item.append(todoTitle);
        item.append(actionBtnDiv);
    }

    const showTodos = (selectList, listContainer, listTitle) => {
        // Take element from selected list under object notation form
        let todos = JSON.parse(localStorage.getItem(selectList));
        
        // Make some DOM modifications
        // Change the list title
        listTitle.textContent = selectList;

        // Reload the elements inside listContainer
        while(listContainer.firstChild) {
            if (listContainer.lastChild.id !== 'add-new-todo') {
                listContainer.removeChild(listContainer.lastChild);
            } else break;
        }

        // Display todos on screen
        for (let todo of todos) {
            _createTodoDiv(todo);
        }


    }

    return {
        toggleDarkMode,
        resetInputField,
        showModal,
        closeModal,
        createListDiv,
        showTodos
    }
}