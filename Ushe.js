var items = document.getElementsByClassName('item');
var goNextBtn = document.getElementById('goNext');
var goFrontBtn = document.getElementById('goFront');

var index = 0;

var clearActive = function(){
    for(var i = 0;i < items.length;i++){
        items[i].className = 'item'
    }
}

var goIndex = function(){
    clearActive();
    items[index].className = 'item active'
}
var goNext = function(){
    if (index < 2){
        index++;
    }else{
        index = 0;
    }
    goIndex()
}
var goFront = function(){
    if (index == 0){
        index = 2;
    }else{
        index--;
    }
    goIndex()
}
goNextBtn.addEventListener('click',function(){
    goNext();

})
goFrontBtn.addEventListener('click',function(){
    goFront();
})


setInterval(function(){
    goNext();
},2000)


let varNavi = document.getElementsByClassName('middle0');
let clickNavi = document.getElementById('navbtn1');
let clickNavi2 = document.getElementById('navbtn2');
clickNavi.addEventListener('click',function(){
    for(var i = 0;i<1000;i++){
        if(i%2==1){
            clickNavi.style.zIndex = '-10';
        }
    }
})
clickNavi2.addEventListener('click',function(){
    for(var i = 0;i<1000;i++){
        if(i%2==1){
            clickNavi2.style.zIndex = '-20';
        }
    }
})





const title1 = document.getElementById("title1").innerText;
const xhr2 = new XMLHttpRequest()
xhr2.open("POST","http://39.107.142.107:3000/mock/25/testPost")
xhr2.setRequestHeader("Content-type","application/json")
xhr2.send(JSON.stringify({
  "name":'string',
  "id":'number',
})) 
xhr2.onreadystatechange = function(){
    if(this.readyState === 4){
        if(this.status === 200){
            console.log(this.responseText)
        }
    }
}
let msg = {
    title:'「疫」地恋，愿你与温暖重逢'
}
console.log(JSON.stringify(msg))


window.onload=function getTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    let today = year+"年"+month+"月"+day+"日";
    console.log(today)
    document.getElementById('time').innerText=today
    return(today)
}
