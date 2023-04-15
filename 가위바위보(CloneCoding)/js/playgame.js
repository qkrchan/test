const msg = document.querySelector("#msg");
const WLD = document.getElementsByClassName("WLD");

function playGame(user){
    const computer = Math.floor((Math.random()*3) + 1); 
    let comChoice;
    if(computer == 1) comChoice = "바위";
    if(computer == 2) comChoice = "보";
    if(computer == 3) comChoice = "가위";
    msg.value = '컴퓨터는 ' + comChoice + '. ';

    if((user - computer) === 0){
      WLD[0].value++; msg.value += '이번엔 무승부.';
    }else if((user - computer) === -2 || (user - computer) === 1){
      WLD[2].value++;  msg.value += '당신이 이겼어요!';
    }else{
      WLD[1].value++; msg.value += '하하! 당신이 졌죠?';
    }
      msg.value += '   ^_^';    
  }


