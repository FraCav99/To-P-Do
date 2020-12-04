export default function controller(view, model) {
    const DOM = {
        darkModeSwitch: document.querySelector('input[type="checkbox"]')
    }

    DOM.darkModeSwitch.addEventListener('click', () => view.toggleDarkMode(DOM.darkModeSwitch));
}