
function nightMod(){
    let a = document.querySelector('#nightmod');
    let b = document.querySelector('body');
    if(a.value == 'Night'){
        b.style.backgroundColor ='black';
        b.style.color = 'white';
        a.value = 'Day';
    }else{
        b.style.backgroundColor = 'white';
        b.style.color = 'black';
        a.value = 'Night';
    }
}