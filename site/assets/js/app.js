const nav = document.querySelector('.navbar')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});


const head = document.querySelector('.head-content')
fetch('header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});