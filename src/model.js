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
        priority,
        description
        ) => {
            // Get the array elements from the current list
            const tempList = JSON.parse(localStorage.getItem(currentList));

            // Create the new todo
            const newTodo = {
                title,
                date,
                priority,
                description
            }

            // Push the new todo inside the array
            tempList.push(newTodo);

            // Pass the temp array and be setted to currentList
            localStorage.setItem(JSON.stringify(tempList));
        }

    return {
        createList,
        deleteList,
        addTodo
    }
}