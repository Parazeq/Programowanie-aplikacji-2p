const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value)

    let c = (a + 273)
    let b = (a * 9/5) + 32

    console.log(a)

    wynik.innerHTML =
        `
        T<sub>Celcjusza</sub>: ${a}<br>
        <strong>T<sub>Kelvina</sub>: ${c}</strong><br>
        <strong>T<sub>Fahrenheita</sub>: ${b}</strong><br>
        
        `

})