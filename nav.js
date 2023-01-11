const openmenu = document.querySelector('#show-menu');
const hidemenuicon = document.querySelector('#hide-menu');
const sidemenu = document.querySelector('#nav-menu');

openmenu.addEventListener('click', function(){
    sidemenu.classList.add('active');
})

hidemenuicon.addEventListener('click', function(){
    sidemenu.classList.remove('active')
})