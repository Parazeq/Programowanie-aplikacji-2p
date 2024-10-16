const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let w = Math.sqrt((b**2)-(1/4*a ** 2))

    wynik.innerHTML =
        `
        
        a = ${a}<br>
        b = ${b}<br>
        <strong>Wartość wyrażenia: ${w}</strong><br>
        
        
        `


})