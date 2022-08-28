function hideMenu(id){
    var menu = document.getElementById(id);
    if(menu.className.indexOf('open') ==-1){
        menu.className += 'open';
        menu.style.padding='0 16px';
        
    
    } else{
        menu.className = menu.className.replace('open',"");
    }
}

var model =document.getElementById('mod');
var news = document.getElementById('new');
news.onclick =function(){
    model.classList.add('open');
    model.style.zIndex =2
}
var btn = document.getElementById('btn');
btn.onclick = function(){
    model.classList.remove('open');
}

var side = document.getElementById('sidebar');
var btnMob = document.getElementById('btn-tl-mob');
btnMob.onclick = function(){

    side.style.display = 'flex';
    side.style.zIndex = 1;
}

