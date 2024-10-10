const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = Math.floor(liczba_a.value)
    let b = (0*a)
    let c = (1*a)
    let d = (2*a)
    let e = (3*a)
    let f = (4*a)
    let g = (5*a)
    let h = (6*a)
    let i = (7*a)
    let j = (8*a)
    let k = (9*a)
    let l = (10*a)

    wynik.innerHTML =
        `
        X = ${a}<br>
        0*${a} = ${b}<br>
        1*${a} = ${c}<br>
        2*${a} = ${d}<br>
        3*${a} = ${e}<br>
        4*${a} = ${f}<br>
        5*${a} = ${g}<br>
        6*${a} = ${h}<br>
        7*${a} = ${i}<br>
        8*${a} = ${j}<br>
        9*${a} = ${k}<br>
        10*${a} = ${l}<br>
        
        `


})