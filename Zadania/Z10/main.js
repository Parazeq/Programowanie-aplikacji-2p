const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let x = liczba_a.value
    let wartosc = (x**2)/((1+Math.abs(x))**2)

    wynik.innerHTML =
        `
        x = ${x}<br>
        <strong>Wartość wyrażenia: ${wartosc}</strong>
        
        `


})