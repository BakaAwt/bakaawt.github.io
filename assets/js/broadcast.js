var texts=[
'中考加油！'
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