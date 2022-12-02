let r=document.getElementById('answer')
let fnum;
let snum;
let summ;
let mall;
let slash;
let subtrac;
let brake;
let exp;
let sinc;
let cosc
let tine;
let sage;


function mac(params){
  r.value+=params
}
function sum(add){
   summ = add
   fnum=r.value
   r.value=""
}
function multiply(times){
   mall=times
   fnum=r.value
   r.value=""
}
function divide(divs){
  slash=divs
  fnum=r.value
  r.value=""
}
function minus(min){
  subtrac=min
  fnum=r.value
  r.value=""
}
function del(){
  r.value=""
}
function clr(){
  r.value=r.value.slice(0,-1)
}

function raise(expo){
  exp=expo
  fnum=r.value
  r.value=""
}
function sin(sine){
sinc=sine
}
function cos(cost){
  cosc=cost
}
function tan(tanc){
tine=tanc
}
function tom(loc){
  sage=loc
}
function equal(){
  snum=r.value
  if(summ==="+"){
    r.value=Number(fnum) + Number(snum)
  }else if(subtrac==="-"){
    r.value=Number(fnum) - Number(snum)
  }else if(mall==="*"){
    r.value=Number(fnum) * Number(snum)
  }else if(slash==="/"){
    r.value=Number(fnum) / Number(snum)
  }else if(exp==="**"){
    r.value=Math.pow(Number(fnum),Number(snum))
  }else if(sinc=="sin"){
  r.value=Math.sin(Number(snum))
  }else if(cosc=="cos"){
    r.value=Math.cos(Number(snum))
  }else if(tine=="tan"){
    r.value=Math.tan(Number(snum))
  }else if(sage=="log"){
r.value=Math.log(Number(snum))
  }
}







