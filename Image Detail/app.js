let wrapper = document.querySelector('.op');
let toggle = document.querySelector('.navbar');


window.onload=function(){
    
    toggle.onclick=function(){
    toggle.classList.toggle('active'); 
    wrapper.classList.toggle('open')
    }
    
}


