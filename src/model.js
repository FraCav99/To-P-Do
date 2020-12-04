export default function model() {
    const createList = title => {
        const todos = [];
        localStorage.setItem(title, JSON.stringify(todos));
    }

    const deleteList = title => {
        localStorage.removeItem(title);
    }

    return {
        createList,
        deleteList
    }
}