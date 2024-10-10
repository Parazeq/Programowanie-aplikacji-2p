const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = liczba_a.value
    let b = a * a
    let c = a * a * a

    wynik.innerHTML =
        `
        
        a = ${a}<br>
        <strong>${a}<sup>2 to: ${b}<br></strong>
        <strong>${a}<sup>3 to: ${c}<br></strong>
        
        `


})