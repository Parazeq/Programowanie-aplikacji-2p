const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value)
    let b


    if(a%5===0 && a%2!==0) {
        wynik.innerHTML =

            `
        <strong>Tak</strong>
        
        
        `
    }
    else{
        wynik.innerHTML =

            `
        <strong>Nie</strong>
        
        
        `
    }

})