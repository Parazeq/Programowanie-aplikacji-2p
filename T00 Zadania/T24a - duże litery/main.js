const wynik = document.querySelector('#wynik')
btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let Dane = document.querySelector('#a').value;
    let tekst = Dane.split(" ")
    let imie = tekst[0];
    let nazwisko = tekst[1];

    imie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
    nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();

    wynik.innerHTML =
        `
        Twoje imie to: ${imie}, a nazwisko: ${nazwisko}
     
        
        
        `
})
