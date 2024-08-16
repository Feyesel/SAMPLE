let display = document.getElementById('display');
let buttons = document.querySelectorAll('.box');


function errorMsg(type){
    display.value="";
    display.classList.add("error");
    if(type==1){
        display.value="Please insert an expression!!!";
    }
    else{
        display.value="Error invalid expression!!!";
    }
    
    setTimeout(() => {
        display.classList.remove("error");
        display.value="";
    }, 2500);
}

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        
        if(button.innerText=="ON / OFF"){
            display.classList.toggle('on');
            display.value="";
        }
        if(display.classList.contains('on')){
            if(button.innerText == "AC"){
                display.value="";
            }else if(button.innerText=="DL"){
                display.value = display.value.slice(0,-1);
            }else if(button.innerText == "="){
                if(display.value == ""){
                    errorMsg(1);
                }else{
                    try {
                        let answer = eval(display.value);
                        display.value = answer;
                    } catch (error) {
                        errorMsg(2);
                    }
                }
            }else if(button.innerText=="ON / OFF"){
                 console.log("JUST HAVE FUN HERE");
            }else if(button.innerText=="÷"){
                display.value += "/";
            }else{
                display.value += button.innerText;
            }
        }
    });
})