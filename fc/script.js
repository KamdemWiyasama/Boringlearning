const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btns button')

let reset= false;
buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.textContent==='AC'){
            screen.textContent = '';
            reset =false;
        }

        else if(btn.textContent==='='){
            try{
                screen.textContent = eval(screen.textContent);
            }
            catch(e){
                screen.textContent = 'Error';
            }
            reset= true;
        }

        else if(btn.textContent==='C'){
            if(reset){
                screen.textContent = '';
                reset= false;
            }            
            else{
                screen.textContent = screen.textContent.slice(0,-1);
            }
        }

        else{
            if(reset){
                screen.textContent = '';
                reset= false;
            }
            screen.textContent += btn.textContent;
        }
    });
});