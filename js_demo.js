let helloBtn=document.querySelector('button');
helloBtn.addEventListener('click',showMsg);

function showMsg(){
    alert("Hello World");
}

let helloBtn1=document.querySelector('.Btn1');
helloBtn1.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('Enter Name Of Student');
    helloBtn1.textContent='Roll no. 1:'+name;
}