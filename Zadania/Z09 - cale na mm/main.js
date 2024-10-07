const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let cale = liczba_a.value
    let mm = cale * 25.3995

    wynik.innerHTML =
        `
        ${cale} Cali to ${mm}mm
        `


})