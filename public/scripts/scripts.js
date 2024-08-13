/*
 * Script to handle the theme switching
 */
function setTheme( theme ) {

    if (theme === 'light') {
       document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
    localStorage.setItem('color-theme', theme);
    var other_theme = { 'dark': 'light', 'light': 'dark' }[theme]
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
        if (document.body.classList.contains('dark')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
}

/*
 * show socials links when hovering over icons
 */
function showlink( link ) {
    let linkshower = document.getElementById('linkshower');
    linkshower.style.display = "inline-block";
    linkshower.textContent = link;
}
