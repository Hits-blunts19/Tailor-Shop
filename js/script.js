let navbarDiv = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 400 
    || document.documentElement.scrollTop > 400){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng')
    }
});
