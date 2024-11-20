const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let ocena


    switch (a) {
        case 0:
            ocena = "nieklasyfikowany"
            break
        case 1:
            ocena = "poprawny"
            break
        case 2:
            ocena = "poprawny"
            break
        case 3:
            ocena = "poprawny"
            break
        case 4:
            ocena = "dobry"
            break
        case 5:
            ocena = "dobry"
            break
        case 6:
            ocena = "wyróżniający"
            break
        default:
            ocena = "niewłaściwa liczba"

    }


    wynik.innerHTML =
            `
            Podana liczba:<strong> ${a}</strong><br>
            Nazwa oceny:<strong> ${ocena}</strong>
        
            `

})