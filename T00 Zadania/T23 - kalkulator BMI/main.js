const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)/100
    let wyniki
    let bmi = parseFloat(a/(b*b))

    function obliczanie(bmi) {
        switch (bmi) {
            case bmi < 16:
                wyniki = "Wygłodzenie"
                break
            case bmi < 16.99 && bmi > 16:
                wyniki = "Wychudzenie"
                break
            case bmi < 18.49 && bmi > 17:
                wyniki = "Niedowaga"
                break
            case bmi < 24.99 && bmi > 18.5:
                wyniki = "Optimum"
                break
            case bmi < 29.99 && bmi > 25:
                wyniki = "Nadwaga"
                break
            case bmi < 34.99 && bmi > 30:
                wyniki = "Otyłość I stopnia"
                break
            case bmi < 39.99 && bmi > 35:
                wyniki = "Otyłość II stopnia"
                break
            case bmi >= 40:
                wyniki = "Otyłość III stopnia"
                break
        }
    }

    wynik.innerHTML =
        `
        <strong>Waga: ${a} kg</strong><br>
        <strong>Wzrost: ${b} m</strong><br>
        <strong>Twoje BMI wynosi: ${bmi}</strong><br>
        <strong>Oznacza to że masz: </strong><br>
        
        `

    obliczanie(wyniki)

})
