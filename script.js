const button1s = document.getElementsByClassName('button1');
const button2s = document.getElementsByClassName('button2');
const popUp1 = document.querySelector('.pop-up1');
const popUp2 = document.querySelector('.pop-up2');
const body = document.querySelector('body');
const message = document.querySelector('.pop-up-message');

for(var i = 0; i < button1s.length; i++){
    var button1 = button1s[i];
    button1.onclick = function(){
        popUp1.className = 'pop-up pop-up1 active';
        message.className = 'pop-up-message active';
        body.className = 'active';
    }
    
}
for(var i = 0; i < button2s.length; i++){
    var button2 = button2s[i];
    button2.onclick = function(){
        message.className = 'pop-up-message active';
        popUp2.className = 'pop-up pop-up2 active';
        body.className = 'active';
    }
}

message.onclick = function(){
        popUp1.className = 'pop-up pop-up1';
        popUp2.className = 'pop-up pop-up2';
        message.className = 'pop-up-message';
        body.className = '';
}