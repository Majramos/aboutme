import Link from 'next/link';


export function ButtonBase({ id, extra="px-4 py-2", children }) {
    return (
        <button id={ id } type="button"
            aria-label={ id }
            className={`rounded-full text-xs sm:text-sm ${extra}`}>
            { children }
        </button>
    )
}


export function ThemeSwitch() {
    return (
        <ButtonBase id="theme-toggle" extra="p-2 flex justify-center">
            <p id="theme-text" className="hidden px-2">Switch theme</p>
            <svg id="theme-toggle-dark-icon" className="w-4 h-4" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" className="w-4 h-4" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
        </ButtonBase>
    )
}


export function HomeButtons() {
    return (
        <>
            <Link id="aboutme-button" href="#target-cv">
                <ButtonBase extra="w-28 sm:w-32 h-10 sm:h-12 mx-4"> About Me </ButtonBase>
            </Link>
            <Link id="download-cv-button" href="/marco_ramos_cv.pdf" target="_blank" rel="noopener noreferrer">
                <ButtonBase extra="w-28 sm:w-32 h-10 sm:h-12 mx-4"> Download CV </ButtonBase>
            </Link>
        </>
    )
}


export function SelectButton({ type }) {
    if (type == "/") {
        return (
            <Link id="download-cv-button2" href="/marco_ramos_cv.pdf" target="_blank" rel="noopener noreferrer">
                <ButtonBase extra="w-32 h-8"> Download CV </ButtonBase>
            </Link>
        )
    } else {
        return (
            <Link href="/">
                <ButtonBase id="go-home" extra="w-32 h-8"> Go Back </ButtonBase>
            </Link>
        )
    }
}
