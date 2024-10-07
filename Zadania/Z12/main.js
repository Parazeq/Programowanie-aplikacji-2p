const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = Math.floor(Math.random() * (b - a) + a)
    let d = Math.floor(Math.random() * (b - a) + a)
    let e = Math.floor(Math.random() * (b - a) + a)
    let f = Math.floor(Math.random() * (b - a) + a)
    let g = Math.floor(Math.random() * (b - a) + a)
    let suma = (c+d+e+f+g)
    let iloczyn = (c*d*e*f*g)
    let srednia = (c+d+e+f+g)/5

    wynik.innerHTML =
        `
        Min = ${a}<br>
        Max = ${b}<br>
        Wylosowane liczby: <br>
        <ul>
        <li>P<sub>1</sub>: ${c}</li>
        <li>P<sub>2</sub>: ${d}</li>
        <li>P<sub>3</sub>: ${e}</li>
        <li>P<sub>4</sub>: ${f}</li>
        <li>P<sub>5</sub>: ${g}</li>
        </ul><br>
        <strong>Suma liczb: ${c} + ${d} + ${e} + ${f} + ${g} = ${suma}</strong><br>
        <strong>Iloczyn liczb: ${c} * ${d} * ${e} * ${f} * ${g} = ${iloczyn}</strong><br>
        <strong>Średnia liczb: ${srednia}</strong><br>
        
        `


})