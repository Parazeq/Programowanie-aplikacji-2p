const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)

    if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
        wynik.innerHTML =
            `
        
            Rok <strong>${a} jest przestępny</strong>
        
            `

    }
    else{
        wynik.innerHTML =
            `
        
            Rok <strong>${a} nie jest przestępny</strong>
        
            `

    }
})