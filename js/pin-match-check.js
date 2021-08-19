function generatePin(){
    const randomNumber = Math.round(Math.random()*10000);
    const randomNumberToString = ''+randomNumber;
    const numberLength = randomNumberToString.length;
    if(numberLength == 4){
        document.getElementById('display-pin').value = randomNumber;
    } 
}

document.getElementById('key-pad').addEventListener('click', function(event){
    //console.log(event.target.innerText);
    if(event.target.innerText != 'C' &&  event.target.innerText != '<' && event.target.innerText !='Submit'){
        setInput(event.target.innerText);
    }else if(event.target.innerText == 'C'){
        document.getElementById('typed-numbers').value ='';
    }else if(event.target.innerText == '<'){
        const typedF =document.getElementById('typed-numbers');
        let typedNumbers = typedF.value;
        typedF.value = typedNumbers.slice(0, typedNumbers.length-1);
        
    }
    
})

function setInput(input){
    const typedField = document.getElementById('typed-numbers');
    const typedInput = typedField.value;
    let typedNumber = typedField.value+input;
    typedField.value = typedNumber;
}

function verifyPin(){
    const randomNumber = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    document.getElementById('notify-success').style.display='none';
    document.getElementById('notify-fail').style.display='none';
    if(randomNumber!='' && typedNumber !=''){
        if(randomNumber == typedNumber){
            document.getElementById('notify-success').style.display='inline';
            
        }else{
            document.getElementById('notify-fail').style.display='inline';
            const actionLeft = document.getElementById('action');
            let action = parseInt(actionLeft.innerText);
            if(action>0)
            {
                action = action-1;
                actionLeft.innerText = action;
            }
           
        }
    }
}