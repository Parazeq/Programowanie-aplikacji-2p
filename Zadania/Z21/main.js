const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_h = document.querySelector('#h')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let h = parseFloat(liczba_h.value)
    let pole = (a+b) / 2 * h
    let w = Math.round(pole).toFixed(2)

    wynik.innerHTML =
        `
        
        a = ${a}<br>
        b = ${b}<br>
        h = ${h}<br>
        <strong>Pole trapezu: ${w}</strong><br>
        
        
        `


})