const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    
    let minhaimg = document.querySelector('img#Trocarimg');
    let meusrc = Trocarimg.getAttribute('src');
    
    if(meusrc === './img/menu-buguer-open.svg') {
        minhaimg.setAttribute('src', './img/menu-buguer-close.svg')
    } else {
        minhaimg.setAttribute('src', './img/menu-buguer-open.svg');
    }
    
}

btnMobile.addEventListener('click',toggleMenu);

