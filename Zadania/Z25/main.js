const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')
const liczba_aa = document.querySelector('#aa')
const liczba_bb = document.querySelector('#bb')
const liczba_cc = document.querySelector('#cc')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)
    let aa = parseFloat(liczba_aa.value)
    let bb = parseFloat(liczba_bb.value)
    let cc = parseFloat(liczba_cc.value)
    let y = ((cc*a) - (c*aa))/((bb*a) - (aa*b))
    let x = (c - (b*y))/a

    wynik.innerHTML =
        `
        
        a<sub>1</sub> = ${a}<br>
        b<sub>1</sub> = ${b}<br>
        c<sub>1</sub> = ${c}<br>
        a<sub>2</sub> = ${aa}<br>
        b<sub>2</sub> = ${bb}<br>
        c<sub>2</sub> = ${cc}<br>
        <strong>x = ${x}</strong><br>
        <strong>y = ${y}</strong><br>
        
        `


})