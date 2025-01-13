function losuj(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function tworzenieTablicy(n) {
    let tab=[];
    for (let i = 1; i < n; i++) {
        tab[i] = [];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tab[i][j] = losuj(0,9);
        }
    }
    return tab;
}

function wyswietlenieTablicyDwuwymiarowej(tablica) {
    let ileWierszy=tablica.length;
    let ileKolumn = tablica[0].length;
    let wynik = "<table>";
    for(let i=0; i<ileWierszy; i++) {
        wynik+="<tr>"
        for(let j=0; j<ileKolumn; j++) {
            wynik+="<td>"+tablica [i] [j]+"</td> ";
            wynik+="</tr>";
            wynik+="</table>"
            return wynik;

        }
    }
}

function przekatneTablicy(tablica) {
    let n = tablica.length;
    let m = n-1;
    let LG_PD = 0;
    let LD_PG = 0;
    for(let i=0; i<n; i++) {
        LG_PD+=tablica[i][i];
        LD_PG+=tablica[m-i][i];
        if (LG_PD == LD_PG) return `Suma przekątnych jest równa i wynosi ${LG_PD}`;
        if (LG_PD>LD_PG) return `Suma LG_PD jest większa i wynosi ${LG_PD} > ${LD_PG}`;
        if (LG_PD<LD_PG) return `Suma LD_PG jest większa i wynosi ${LD_PG} > ${LG_PD}`;

    }

    let tablicaWynikowa = tworzenieTablicy(3);
    console.log(tablicaWynikowa);
    const wynik = document.querySelector('#tabelaTutaj') ;
    const wynik2 = document.querySelector('#analizaPrzekatnych');
    const btn = document.querySelector('button') ;

    btn.addEventListener('click', (e) => {
        wynik.innerHTML=wyswietlenieTablicyDwuwymiarowej(tablicaWynikowa);
        wynik2.innerHTML=przekatneTablicy(tablicaWynikowa);

        })}