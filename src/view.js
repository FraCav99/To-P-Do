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

    return {
        toggleDarkMode,
        resetInputField,
        showModal,
        closeModal
    }
}