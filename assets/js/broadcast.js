var texts=[
'「秋深し　隣はなにも　しない人」<br>「晨意微寒秋渐深　侧伴无事俏佳人」',
'「秋深し　情けは人の　ためならず」<br>「梦里不觉秋已深　余情岂是为何人」',
'「雪が解け、そして　雪が降るまで」<br>「蓦然雪化　且静候　飞雪再临之时」',
'「恋してた、君といた、夏は終わり」<br>「与你　共度的夏季　已迎来结束」',
'「戻れない、君といた、秋を想う」<br>「深秋与君伴　一去不复返　只留回忆泛滥」',
'「君と出会わなければ　つらくないのに」<br>「若未曾与你相见　又何来这份痛楚」'
];
var text_ptr=-1;
/*
function fadeIn(el,time){  
    if(el.style.opacity === ""){  
        el.style.opacity = 0;  
    }  
    if(el.style.display === "" || el.style.display === 'none'){  
        el.style.display = 'block';  
    }  
  
    var t = setInterval(function(){  
        if(el.style.opacity < 1){  
            el.style.opacity = parseFloat(el.style.opacity)+0.01;  
        }  
        else{  
            clearInterval(t);  
        }  
    },time/100);  
}  
  
function fadeOut(el,time){  
    if(el.style.opacity === ""){  
        el.style.opacity = 1;  
    }  
    if(el.style.display === "" || el.style.display === 'none'){  
        el.style.display = 'block';  
    }  
  
    var t = setInterval(function(){  
        if(el.style.opacity > 0){  
            el.style.opacity = parseFloat(el.style.opacity)-0.01;  
        }  
        else{  
            clearInterval(t);  
            el.style.display = 'none'  
        }  
    },time/100);  
}  */

function next_text(){
  text_ptr=(text_ptr+1)%texts.length;
  document.getElementById('broadcast').innerHTML=texts[text_ptr];
  setTimeout(next_text,8000);

}