let gameseq=[];
let userseq=[];
let btns=["purple","blackblue","orange","blue"];
let level=0;
let started=false;
let h2=document.querySelector("h2");
document.addEventListener('keypress',()=>{
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
    })
function btnflash(btn) {
    
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash"); ;
    }, 200);
    
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random btn chose
    let randindex=Math.floor(Math.random()*3);
    let randcolor=btns[randindex];
    let randBtn=document.querySelector(`.${randcolor}`);
    //
    gameseq.push(randcolor);
    btnflash(randBtn);
    console.log(gameseq);
    
}
function checkans(idx){
    // console.log("curr level:",level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerText=`game over! press any key to start`
    }
}
function btnpress(){
    console.log(this);
    let btn=this;
    btnflash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}