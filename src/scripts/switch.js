const switchElement = document.getElementById('switchElement');

switchElement.addEventListener('change', () => {
    updateTheme();
});

function updateTheme(){
    const theme = getLocalStorageTheme();

    if (theme === 'dark') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    }else{
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
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