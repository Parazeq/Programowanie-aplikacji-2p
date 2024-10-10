const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = Math.floor(liczba_a.value)
    let b = a * Math.PI / 180

    wynik.innerHTML =
        `
        Wynik dla podanej wartości kątowej: <strong>${a}<sup>o</sup> = ${b} radianów</strong><br></br>
        
        `


})