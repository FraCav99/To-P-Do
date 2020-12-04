export default function model() {
    const createList = title => {
        const todos = [];
        localStorage.setItem(title, JSON.stringify(todos));
    }

    return {
        createList
    }
}