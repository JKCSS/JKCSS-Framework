const header = document.querySelector('header');
fetch('header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})