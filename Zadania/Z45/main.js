const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)
    let prosto = (a*a)+(b*b)

    while(c>=b>=a>0){
        if(prosto=(c*c)){
            wynik.innerHTML =
                `
                A = ${a}<br>
                B = ${b}<br>
                C = ${c}<br>
                Trójąt jest prostokątny<br>
        
                `
        }
        else if(a===b & a===c & b===c){
            wynik.innerHTML =
                `
                A = ${a}<br>
                B = ${b}<br>
                C = ${c}<br>
                Trójąt jest równoboczny<br>
        
                `

        }
        else if(a===b || a===c || b===c){
            wynik.innerHTML =
                `
                A = ${a}<br>
                B = ${b}<br>
                C = ${c}<br>
                Trójąt jest równoramienny<br>
        
                `

        }
        else{
            wynik.innerHTML =
                `
                A = ${a}<br>
                B = ${b}<br>
                C = ${c}<br>
                Trójąt jest dowolny<br>
        
                `

        }
    }})