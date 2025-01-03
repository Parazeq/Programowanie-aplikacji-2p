const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const wynik = document.querySelector('#wynik');
btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(a%b===0 && b!==0){
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            <strong>Tak</strong>
            
            `
    }
    if(a%b!==0 && b!==0){
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            <strong>Nie</strong>
            
            `
    }
    else{
        wynik.innerHTML =
            `
            A = ${a}<br>
            B = ${b}<br>
            <strong>Zero</strong>
            
            `
    }

})