let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 2;
    function Show(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;    
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${500*stt}px) scale(${1 - 0.4*stt}) perspective(180px) rotateY(-5deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(1px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.5;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-500*stt}px) scale(${1 - 0.4*stt}) perspective(180px) rotateY(5deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(1px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.5;
        }
    }
    Show();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        Show();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        Show();
    }