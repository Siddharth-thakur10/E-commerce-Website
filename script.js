// this is fro clicking on hamburger menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('Navbar');

// now when i click the menu it will show nav bar but before taht i have to check whether navbar is opened or not, if its already opened then on clicking it should close
if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
    
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
    
}

