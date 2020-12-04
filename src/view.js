export default function view() {
    
    const toggleDarkMode = switcher =>  {
        const darkStylesheet = document.getElementById('dark');
        switcher.checked ?
        darkStylesheet.rel = 'stylesheet' :
        darkStylesheet.rel = 'stylesheet alternate';
    }

    return {
        toggleDarkMode
    }
}