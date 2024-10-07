const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = liczba_a.value
    let b = liczba_b.value
    let d = b/100
    let c = (d*a)

    wynik.innerHTML =
        `
        a = ${a}<br>
        b = ${b}%<br>
        <strong>${b}% z ${a} to ${c}</strong>
        
        `


})