const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = (liczba_a.value)/10
    let w = Math.floor(a)
    let ocena


    switch (w) {
        case 5:
            ocena = 3
            break
        case 6:
            ocena = 3.5
            break
        case 7:
            ocena = 4
            break
        case 8:
            ocena = 4.5
            break
        case 9:
            ocena = 5
            break
        case 10:
            ocena = 5
            break
        default:
            ocena = 2

    }


    wynik.innerHTML =
            `
        
            Ocena studenta to: ${ocena}
        
            `

})