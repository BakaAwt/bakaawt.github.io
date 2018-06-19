var texts=[
'[gravityWall] I'm screaming something to you<br>Whatever,something to me<br>But everybody can't hear.Pay attention to me!',
'[gravityWall] Now I don't know what I really want<br>I still don't know how to escape from this beautiful trap',
'[gravityWall] Don't know what I really want<br>I still don't know how to escape from this dangerous trap',
'[shØut] Time has come to listen to the crying of their puppet souls<br>Words are strong,heart is dropped,scatter around and falls',
'[shØut] Yeah get started breaking the row<br>See how it spreads out.It's beyond full real-ization',
'[shØut] Yeah get started re-creating the world<br>Take my hands till the end,feel this raw emotion'
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