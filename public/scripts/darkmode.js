/*
 * Script to handle the theme switching
 */

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// dark-mode media query matched or not
if(localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	themeToggleDarkIcon.classList.remove('hidden');
    document.body.classList.add('body-dark');
} else {
    themeToggleLightIcon.classList.remove('hidden');
    document.body.classList.add('body-light');
}

var themeButton = document.getElementById('theme-toggle')

function setDark() {
    document.body.classList.remove('body-light');
    document.body.classList.add('body-dark');
    localStorage.setItem('color-theme', 'dark');
}

function setLight() {
    document.body.classList.remove('body-dark');
    document.body.classList.add('body-light');
    localStorage.setItem('color-theme', 'light');
}

themeButton.addEventListener('click', function() {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            setDark()
        } else {
            setLight()
        }
    // if NOT set via local storage previously
    } else {
        if (document.body.classList.contains('body-dark')) {
            setLight()
        } else {
            setDark()
        }
    }
});

