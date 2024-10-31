const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = Math.floor(a/b)
    let d = a%b

    if (a%b == 0) {


        wynik.innerHTML =
            `
        
        Licznik = ${a}<br>
        Mianownik = ${b}<br>
        ${c}
        
        `
    } else if (a%b !== 0) {
        wynik.innerHTML =
            `
            Licznik = ${a}<br>
            Mianownik = ${b}<br>
            ${c} = <sup>${d}</sup>/<sub>${b}</sub>
            
            `


    }


})