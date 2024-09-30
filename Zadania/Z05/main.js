const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)


    let suma = a+b
    let roznica = a-b
    let iloczyn = a*b
    let iloraz = a/b
    let reszta = a%b

    console.log(suma)
    console.log(roznica)
    console.log(iloczyn)
    console.log(iloraz)
    console.log(reszta)

    wynik.innerHTML =
        `
        a = ${a}<br>
        b = ${b}<br>
        <strong>Suma: ${suma}</strong><br>
        <strong>Roznica: ${roznica}</strong><br>
        <strong>Iloczyn: ${iloczyn.toFixed(2)}</strong><br>
        <strong>Iloraz: ${iloraz.toFixed(2)}</strong><br>
        <strong>Reszta dzielenia: ${reszta.toFixed(2)}</strong>
        
        `

})