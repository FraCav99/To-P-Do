export default function model() {
    const createList = title => {
        const todos = [];
        localStorage.setItem(title, JSON.stringify(todos));
    }

    const deleteList = title => {
        localStorage.removeItem(title);
    }

    const addTodo = (
        currentList,
        title,
        date,
        priority,
        description
        ) => {
            // Get the array elements from the current list
            const tempList = JSON.parse(localStorage.getItem(currentList));

            // Create the new todo
            const newTodo = {
                id: tempList.length,
                title,
                date,
                priority,
                description,
                complete: false
            }

            // Push the new todo inside the array
            tempList.push(newTodo);

            // Pass the temp array and be setted to currentList
            localStorage.setItem(currentList, JSON.stringify(tempList));
        }
    
    const editTodo = (
        currentList,
        id,
        editedTitle,
        editedDate,
        editedPriority,
        editedDesc
    ) => {
        // Get localStorage array & current edited item by id
        const tempArray = JSON.parse(localStorage.getItem(currentList));
        const selectedItem = tempArray.find(item => item.id === id);

        selectedItem.id = id;
        selectedItem.title = editedTitle;
        selectedItem.date = editedDate;
        selectedItem.priority = editedPriority;
        selectedItem.description = editedDesc;

        const editedTodo = {
            id: selectedItem.id,
            title: selectedItem.title,
            date: selectedItem.date,
            priority: selectedItem.priority,
            description: selectedItem.description,
            complete: selectedItem.complete
        };

        // Replace the previous todo with the edited todo
        // specifing the position inside the array
        tempArray[id] = editedTodo;

        // Set the new array inside localStorage
        localStorage.setItem(currentList, JSON.stringify(tempArray));
    }


    const checkTodo = (currentList, id) => {
        const tempArray = JSON.parse(localStorage.getItem(currentList));
        const selectedItem = tempArray.find(item => item.id === id);

        const checkedTodo = {
            id: selectedItem.id,
            title: selectedItem.title,
            date: selectedItem.date,
            priority: selectedItem.priority,
            description: selectedItem.description,
            complete: !selectedItem.complete
        };

        tempArray[id] = checkedTodo;
        localStorage.setItem(currentList, JSON.stringify(tempArray));
    }

    const deleteTodo = (currentList, id) => {
        const tempArray = JSON.parse(localStorage.getItem(currentList));

        // return all elements except the one with the specified 'id'
        const filteredArray = tempArray.filter(item => item.id !== id);

        // Create an array where all the item's ids are
        // greater than passed 'id', these will be decresed by 1
        // To reflect indexes inside DOM list items
        const updatedArray = filteredArray.map(item => {
            item = {
                id: item.id > id ? item.id - 1 : item.id,
                title: item.title,
                date: item.date,
                priority: item.priority,
                description: item.description,
                complete: item.complete
            };

            return item;
        });

        localStorage.setItem(currentList, JSON.stringify(updatedArray));
    }

    return {
        createList,
        deleteList,
        addTodo,
        editTodo,
        checkTodo,
        deleteTodo
    }
}