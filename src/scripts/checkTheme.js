function getLocalStorageTheme(){
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    return 'dark';
} 

let theme = getLocalStorageTheme();
let htmlElement;

if(theme === 'light'){
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
}