class Punkt {
    nazwa;
    x;
    y;
    constructor(nazwa, x, y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
    }

    info = function () {
        document.write(`Punkt "${this.nazwa}" ma współrzędne [${this.x},${this.y}]<br>`);
    }
}

class Odcinek {
    nazwa;
    punkt1;
    punkt2;

    constructor(nazwa, punkt_1, punkt_2) {
        this.nazwa = nazwa;
        this.punkt1 = new Punkt(punkt_1);
        this.punkt2 = new Punkt(punkt_2);
    }

    dlugosc_odcinka = function () {
        document.write(`${Math.sqrt(Math.pow(punkt2.x - punkt1.x, 2) + Math.pow(punkt2.y - punkt1.y, 2))}<br>`);
    }

    info = function () {
        document.write(`Odcinek ${odc.nazwa} o punktach "${punkt1.nazwa}" oraz "${punkt2.nazwa}" ma długość: `);
    }
}

let punkt1 = new Punkt("Dom", 50, 100);
let punkt2 = new Punkt("Szkoła", 70, 150);
punkt1.info()
punkt2.info()

let odc = new Odcinek('"Długość trasy do skoły', punkt1, punkt2);
odc.info()
odc.dlugosc_odcinka();