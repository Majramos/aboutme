/*
 * Script to handle the theme switching
 */

const OtherTheme = { 'dark': 'light', 'light': 'dark' }

function setTheme( theme ) {
    var other_theme = OtherTheme[theme]

    document.body.classList.remove('body-' + other_theme);
    document.body.classList.add('body-' + theme);

    localStorage.setItem('color-theme', theme);

    document.getElementById('theme-toggle-' + theme + '-icon').style.display = 'inherit'; 
    document.getElementById('theme-toggle-' + other_theme + '-icon').style.display = 'none'; 

    document.getElementById('theme-text').innerText = 'Switch to ' + other_theme + ' mode';
}

function themeChecker() {
    // dark-mode media query matched or not
    if(localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

function changeTheme() {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    // if NOT set via local storage previously, keep as fallback option
    } else {
        if (document.body.classList.contains('body-dark')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
}
