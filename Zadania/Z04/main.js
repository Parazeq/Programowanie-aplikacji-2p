const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)

    let iloraz = a/b

    console.log(iloraz)

    wynik.innerHTML =
        `
        a = ${a}<br>
        b = ${b}<br>
        <strong>Iloraz podanych liczb to: ${iloraz.toFixed(2)}</strong>
        
        `

})