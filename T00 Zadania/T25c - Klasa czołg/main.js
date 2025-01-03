class Czolg {
    nazwa = "Bombi";
    kolor = "Pomarańczowy";
    ammo = 5;

    info = function ()
    {
        document.write(`Ten czołg to: ${this.nazwa} i jest koloru: ${this.kolor}. Aktualnie ma ${this.ammo} amunicji!<br>`);
    }

    strzal = function ()
    {
        if (this.ammo >=1) {
            document.write(`Czołg wystrzelił pocisk! <br>`)
            this.ammo--;
        } else {
            document.write(`Czołg nie wykonał polecenia! Brak ammunicji!<br>`)
        }
    }
    doladowanie = function (ile) {
        this.ammo += ile;
        document.write(`Ilość ammunicji w czołgu wzrosła: ${this.ammo}<br>`);
    }
    kolorr = function (newColor) {
        document.write(`Czołg został przemalowany na kolor ${newColor} z ${this.kolor} <br>`);
        this.kolor = newColor;
    }
}

let czolg = new Czolg();
czolg.info();
czolg.kolorr("Biały");
czolg.doladowanie(3);
czolg.strzal();
czolg.info();