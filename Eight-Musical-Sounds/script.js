document.onkeydown = function (e) {
    let sound=e.keyCode;
    console.log(typeof(sound));
    music(sound);
  }
function button(){
    let sound=parseInt(event.target.id); 
    console.log(typeof(sound));
    music(sound);
}
function music(sound){
    if(sound>=49 && sound<=56){
        switch(sound){
            case 49:
                document.getElementById('boom').play();
                break;
            case 50:
                document.getElementById('clap').play();
                break;
            case 51:
                document.getElementById('hihat').play();
                break;
            case 52:
                document.getElementById('kick').play();
                break;
            case 53:
                document.getElementById('openhat').play();
                break;
            case 54:
                document.getElementById('ride').play();
                break;
            case 55:
                document.getElementById('snare').play();
                break;
            default:
                document.getElementById('tom').play();
                break;
        }
        
    }
    else{
        alert("please use only 1 to 8 key for sounds as show")
    }
}