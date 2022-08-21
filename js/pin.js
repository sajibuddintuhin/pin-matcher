
function rndomPin(){
const rndomPinFilde =  Math.round(Math.random()*10000);

    return rndomPinFilde 
}
function getPin(){
    const pin = rndomPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}






document.getElementById('btn-pin').addEventListener('click', function(){
    const pin = getPin();
    const inputeFilde = document.getElementById('input-get-pin');
     inputeFilde.value = pin 
    
})

document.getElementById('calculator').addEventListener('click', function(event){
    const nambar = event.target.innerText;
     const nambarInputField = document.getElementById('number-field');
      const nambarInputStirme = nambarInputField.value;
     if(isNaN(nambar)){
        if(nambar === 'C'){
            nambarInputField.value = '';
        }
        else if (nambar === '<'){
            const digits = nambarInputStirme.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            nambarInputField.value = remainingDigits
        }
    }
    else{
      
      
       const newType = nambarInputStirme + nambar;
       nambarInputField.value = newType
    }
})


document.getElementById('btn-submit').addEventListener('click', function(){

    const inputeFilde = document.getElementById('input-get-pin');
    const typeNmar = inputeFilde.value;

    const pinString = document.getElementById('number-field');
    const pinAcces = pinString.value;
    
    const macpin =  document.getElementById('pin-acces');
     const pinFailurMass = document.getElementById('pin-failure')
    if( typeNmar === pinAcces){
     macpin.style.display = 'block'
    pinFailurMass.style.display = 'none'
    }

    else{
       
        pinFailurMass.style.display = 'block'
        macpin.style.display = 'none'
    }
})