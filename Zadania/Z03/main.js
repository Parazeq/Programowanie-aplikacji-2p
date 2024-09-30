const a =document.querySelector('#a')
const b =document.querySelector('#b')
const c =document.querySelector('#c')
const d =document.querySelector('#d')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let liczba_a = parseFloat(a.value)
    let liczba_b = parseFloat(b.value)
    let liczba_c = parseFloat(c.value)
    let liczba_d = parseFloat(d.value)

    let srednia_geometryczna =Math.pow((liczba_a*liczba_c*liczba_b*liczba_d),0.25)
    console.log(srednia_geometryczna)
    wynik.innerHTML =

        `

        a =<b> ${liczba_a}</b><br>
        b =<b> ${liczba_b}</b><br>
        c =<b> ${liczba_c}</b><br>
        d =<b> ${liczba_d}</b><br>
        Średnia geometryczna = <b>${srednia_geometryczna}</b><br>
        Średnia geometryczna zaokrąglona = <b>${srednia_geometryczna.toFixed(3)}</b><br>
        
        `


        })