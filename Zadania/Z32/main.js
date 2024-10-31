const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = Math.floor(Math.random() * (b - a) + a)
    let d = Math.floor(Math.random() * (b - a) + a)

    if (c>d) {


        wynik.innerHTML =
            `
        
        Liczby losowana z zakresu <strong>od ${a} do ${b}</strong><br>
        Wylosowana liczba1: ${c}<br>
        Wylosowana liczba2: ${d}<br>
        <strong>${c}>${d}</strong><br>
        
        `
    } else if (d>c) {
        wynik.innerHTML =
            `
            Liczby losowana z zakresu <strong>od ${a} do ${b}</strong><br>
            Wylosowana liczba1: ${c}<br>
            Wylosowana liczba2: ${d}<br>
            <strong>${d}>${c}</strong><br>
            
            `


    } else if (d==c) {
        wynik.innerHTML =
            `
            Liczby losowana z zakresu <strong>od ${a} do ${b}</strong><br>
            Wylosowana liczba1: ${c}<br>
            Wylosowana liczba2: ${d}<br>
            <strong>${d}=${c}</strong><br>
            
            `


    }


})