const liczba_a = document.querySelector('#a')
const wynik = document.querySelector('#wynik')
btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseFloat(liczba_a.value)

        for (let i = 1; i <= 15; ++i) {
            if (i === a) {
                wynik.innerHTML += `{-}, `
                continue;
            }
            wynik.innerHTML += `${i}, `
        }
})
