const switchElement = document.getElementById('switchElement');

switchElement.addEventListener('change', () => {
    updateTheme();
});

function updateTheme(){
    const htmlElement = document.querySelector('html');

    const theme = getLocalStorageTheme();

    if (theme === 'dark') {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    }else{
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    document.dispatchEvent(new Event('colorChanged'));
}

function getLocalStorageTheme(){
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    return 'dark';
} 

document.addEventListener('DOMContentLoaded', () => {
});