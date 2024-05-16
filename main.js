const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}

function contact(){
    window.location.href = "https://web.whatsapp.com/";
}

function products(){
  window.location.href = "ear.html";
}

function home(){
  window.location.href = "index.html";
}