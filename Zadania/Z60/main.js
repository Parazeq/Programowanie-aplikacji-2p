const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let dzien


    switch (a) {
        case 1:
            dzien = "poniedziałek"
            break
        case 2:
            dzien = "wtorek"
            break
        case 3:
            dzien = "środa"
            break
        case 4:
            dzien = "czwartek"
            break
        case 5:
            dzien = "piatek"
            break
        case 6:
            dzien = "sobota"
            break
        case 7:
            dzien = "niedziela"
            break
        default:
            dzien = "błąd"

    }


    wynik.innerHTML =
            `
            Podana liczba:<strong> ${a}</strong><br>
            Dzisiaj jest:<strong> ${dzien}</strong>
        
            `

})