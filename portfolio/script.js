var toggle = document.querySelector('i');
var body = document.querySelector('body');
var sub_head = document.querySelectorAll('#sub_head');
var bgimg = document.getElementById('bgimg');
bgimg.style.backgroundImage='url("https://images.pexels.com/photos/2681631/pexels-photo-2681631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
body.style.background=' rgba(255, 228, 196, 0.684)';

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background=' rgba(255, 228, 196, 0.684)';
        body.style.color='black';
        toggle.style.color='white';
        for(let i=0;i<sub_head.length;i++){
            sub_head[i].style.background=" burlywood"
        };
        bgimg.style.backgroundImage='url("https://images.pexels.com/photos/2681631/pexels-photo-2681631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
    }
    else{
        body.style.background='linear-gradient(45deg,rgb(255, 255, 0), rgb(255, 0, 195))';
        body.style.color='white';
        toggle.style.color='white';
        for(let i=0;i<sub_head.length;i++){
            sub_head[i].style.background="pink"
        };
        bgimg.style.backgroundImage='url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg")';
    }
});