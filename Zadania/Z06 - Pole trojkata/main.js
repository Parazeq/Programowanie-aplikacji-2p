const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)

    if(a+b>c && a+c>b && b+c>a) {
        let p = 0.5 * (a + b + c)
        let S = Math.sqrt(p * (p - a) * (p - b) * (p - c))

        console.log(S)

        wynik.innerHTML =
            `
        a = ${a}<br>
        b = ${b}<br>
        c = ${c}<br></br>
        <strong>Pole trójkąta wynosi: ${S}</strong><br>
        
        `
    } else {
        wynik.innerHTML = "Nie można zbudować takiego trójkąta!!!"
    }

})