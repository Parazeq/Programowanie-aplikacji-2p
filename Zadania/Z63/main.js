const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let miesiac = parseFloat(liczba_a.value)
    let dzien


    switch (miesiac) {
        case 1:
            dzien = "31"
            break
        case 2:
            dzien = "28"
            break
        case 3:
            dzien = "31"
            break
        case 4:
            dzien = "30"
            break
        case 5:
            dzien = "31"
            break
        case 6:
            dzien = "30"
            break
        case 7:
            dzien = "31"
            break
        case 8:
            dzien = "31"
            break
        case 9:
            dzien = "30"
            break
        case 10:
            dzien = "31"
            break
        case 11:
            dzien = "30"
            break
        case 12:
            dzien = "31"
            break
        default:
            dzien = "Liczba nie mieści się w przedziale"

    }


    wynik.innerHTML =
            `
            Podana liczba:<strong> ${miesiac}</strong><br>
            Ilość dni w miesiącu:<strong> ${dzien}</strong><br>
        
            `

})