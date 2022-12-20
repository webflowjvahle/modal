const modal = document.querySelector('[data-modal]');

// this syncs the window height
const syncWindowHeight = () => {
    document.documentElement.style.setProperty(
        "--window-inner-height",
        `${window.innerHeight}px`
    );
}

// for iOS 15, prevents re-hiding of footer
document.querySelector('[data-modal]');.addEventListener('pointermove', e => {
   // e.preventDefault()
})
 
// bonus for iOS 14, prevents re-hiding of footer
document.querySelector('[data-modal]');.addEventListener('touchmove', e => {
 //   e.preventDefault()
})

// this locks the body and remembers the scroll position
let scrollY;
document.documentElement.addEventListener('click', (e) => {

    if (e.target.dataset.action==='open') {
        
        syncWindowHeight();

        scrollY = window.scrollY;
        document.documentElement.classList.add('lock');

        window.addEventListener("resize", syncWindowHeight);

    }
    else if (e.target.dataset.action==='close') {

        window.removeEventListener("resize", syncWindowHeight);
        document.documentElement.classList.remove('lock');
        window.scrollTo(0, scrollY);
    }
})