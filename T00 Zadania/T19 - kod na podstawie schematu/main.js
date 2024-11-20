const a = parseInt(prompt('Podaj liczbe a'))
const b = parseInt(prompt('Podaj liczbe b'))
    let Y

    if (a<=0 && b<=0){
        document.write('I = 1 ')
        Y = 0
    } else if (a<=0 && b>=0){
        document.write('I = 2 ')
        Y = 1
    } else if (a>0 && b<=0){
        document.write('I = 3 ')
        Y = 2
    } else {
        document.write('I = 4 ')
        Y = 3
    }

    document.write('liczba Y wynosi ', Y)