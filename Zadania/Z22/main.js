const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)**2
    let b = parseFloat(liczba_b.value)**2
    let w = a+b
    let w2 = Math.sqrt(w)

    wynik.innerHTML =
        `
        
        a = ${a}<br>
        b = ${b}<br>
        <strong>Wynik: ${w2}</strong><br>
        
        
        `


})