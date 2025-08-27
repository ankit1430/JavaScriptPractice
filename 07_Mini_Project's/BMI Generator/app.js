const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results')
    if(height == '' || height < 0 || isNaN(height) )
    {
        results.innerHTML = `Pls give a valid height ${height}`
    }else if(weight == '' || weight < 0 || isNaN(weight) )
    {
        results.innerHTML = `Pls give a valid weight ${weight}`
    }
    else
    {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        // results.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6)
        {
            results.innerHTML = `<span>You are Under Weight and your bmi value ${bmi}</span>`;
        }else if(bmi<24.9)
        {
            results.innerHTML = `<span>You are Normal Weight and your bmi value ${bmi}</span>`;
        }
        else
        {
            results.innerHTML = `<span>You are Over Weight and your bmi value ${bmi}</span>`;
        }
    }
})