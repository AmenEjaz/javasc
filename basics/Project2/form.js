 const form=document.querySelector('form')
    form.addEventListener('submit',function(e){
        e.preventDefault()
        const height=parseInt(document.querySelector('#height').value);
        const weight=parseInt(document.querySelector('#weight').value);
        const result=document.querySelector('#results').innerHTML;
        if(height==0 || height=='' || isNaN(height)){
            results.innerHTML=`Please give a valid height ${height}`
        }
        else if(weight==0 || weight=='' || isNaN(weight)){
            results.innerHTML= `Please give a valid  weight ${weight}`
        }
        else{
           const bmi= (weight/((height*height)/10000)).toFixed(2)
           if(bmi>0 && bmi < 18.6)
           {
            results.innerHTML= `${bmi} : Under Weight`
           }
           else if(bmi>18.6 && bmi < 24.9)
           {
            results.innerHTML= `${bmi} : Normal Weight`
           }
           if(bmi > 24.9)
           {
            results.innerHTML= `${bmi} : Over Weight`
           }

        }
}
)
    
   