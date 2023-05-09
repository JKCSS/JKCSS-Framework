const header = document.querySelector('header');
fetch('/content/docs/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})