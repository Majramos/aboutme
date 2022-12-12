/*
 * Script to handle the theme switching
 */

function themeChecker() {
    // dark-mode media query matched or not
    if(localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	    document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
        document.body.classList.add('body-dark');
    } else {
        document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
        document.body.classList.add('body-light');
    }
}

function setDark() {
    document.body.classList.replace('body-light', 'body-dark');
    localStorage.setItem('color-theme', 'dark');
}

function setLight() {
    document.body.classList.replace('body-dark', 'body-light');
    localStorage.setItem('color-theme', 'light');
}

function changeTheme() {
    // toggle icons inside button    
    document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden');
    document.getElementById('theme-toggle-light-icon').classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            setDark()
        } else {
            setLight()
        }
    // if NOT set via local storage previously, keep as fallback option
    } else {
        if (document.body.classList.contains('body-dark')) {
            setLight()
        } else {
            setDark()
        }
    }
}

