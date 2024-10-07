const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {


    let czas = liczba_a.value
    let godziny = Math.floor(czas/3600)
    let reszta_g = Math.floor(czas%3600)
    let minuty = Math.floor(reszta_g/60)
    let sekundy = Math.floor(czas%3600)%60


    wynik.innerHTML =
        `
        wynik:
        ${godziny}g
        ${minuty}m
        ${sekundy}s
        
        `

})