const nav = document.querySelector('.navbar')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});

const footer = document.querySelector('.footerbar')
fetch('footerbar.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
});

const othernav = document.querySelector('.other-nav')
fetch('nav.html')
.then(res=>res.text())
.then(data=>{
    othernav.innerHTML=data
});

const get_nav = document.querySelector('.get-nav')
fetch('get_nav.html')
.then(res=>res.text())
.then(data=>{
    get_nav.innerHTML=data
});

const exmaple_nav = document.querySelector('.example-nav')
fetch('example_nav.html')
.then(res=>res.text())
.then(data=>{
    exmaple_nav.innerHTML=data
});


