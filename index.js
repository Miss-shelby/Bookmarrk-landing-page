let openBtn = document.querySelector('.hamburger-menu')
let closeBtn = document.querySelector('.close-btn')
let menu= document.querySelector('.nav-mobile')

openBtn.addEventListener("click",function openMenu() {
    menu.style.display ='block';
    
})

closeBtn.addEventListener("click",function openMenu() {
    menu.style.display ='none';
    
})


let faqs = document.querySelectorAll('.faqs-content');

for (let i = 0;i< faqs.length; i++){
    let faq = faqs[i]
    console.log(faq)
    faq.addEventListener('click',function(){
        faq.classList.toggle('active')
        console.log('im here')
    })
}