let qtdLinhas = 8
let qtdColunas = 8

let linhasBombas = []
let colunasBombas = []

let linhasNavios = []
let colunasNavios = []

let podepuxar = true

let dificuldade = 1

if (dificuldade == 1) {
    for (i = 0; i < 17; i++) {
        var num = Math.floor(Math.random() * 9)
        var num2 = Math.floor(Math.random() * 9)
        console.log('teste');
        if (linhasBombas.length > 1) {
            for (a = 0; a < linhasBombas.length; a++) {

                if (linhasBombas[a] == num && colunasBombas[a] == num2) {
                    console.log('sla');
                    i -= 1
                    podepuxar = false
                    break
                }
                else {
                    podepuxar = true
                }

            }
        }
        if (podepuxar == true) {
            colunasBombas.push(num)
            linhasBombas.push(num)


        }


    }
}

else if (dificuldade == 2) {
    for (i = 0; i < 33; i++) {
        var num = Math.floor(Math.random() * 9)
        var num2 = Math.floor(Math.random() * 9)
        console.log('teste');
        if (linhasBombas.length > 1) {
            for (a = 0; a < linhasBombas.length; a++) {

                if (linhasBombas[a] == num && colunasBombas[a] == num2) {
                    console.log('sla');
                    i -= 1
                    podepuxar = false
                    break
                }
                else {
                    podepuxar = true
                }

            }
        }
        if (podepuxar == true) {
            colunasBombas.push(num)
            linhasBombas.push(num)


        }


    }
}

if (dificuldade == 3) {
    for (i = 0; i < 41; i++) {
        var num = Math.floor(Math.random() * 9)
        var num2 = Math.floor(Math.random() * 9)
        console.log('teste');
        if (linhasBombas.length > 1) {
            for (a = 0; a < linhasBombas.length; a++) {

                if (linhasBombas[a] == num && colunasBombas[a] == num2) {
                    console.log('sla');
                    i -= 1
                    podepuxar = false
                    break
                }
                else {
                    podepuxar = true
                }

            }
        }
        if (podepuxar == true) {
            colunasBombas.push(num)
            linhasBombas.push(num)


        }


    }

}

for (i = 0; i < 21; i++) {
    var num = Math.floor(Math.random() * 9)
    var num2 = Math.floor(Math.random() * 9)
    console.log('teste');
    if (linhasNavios.length > 1) {
        for (a = 0; a < linhasNavios.length; a++) {

            if (linhasNavios[a] == num && colunasNavios[a] == num2) {
                console.log('pa');
                i -= 1
                podepuxar = false
                break
            }
            else {
                podepuxar = true
            }

        }
    }
    if (podepuxar == true) {
        for (p = 0; p < linhasBombas.length; p++) {
            if (linhasBombas[a] == num && colunasBombas[a] == num2) {
                console.log('sla');
                i -= 1
                podepuxar = false
                break
            }
            else {
                podepuxar = true
            }
        }
        if (podepuxar == true) {
            colunasBombas.push(num)
            linhasBombas.push(num)
        }



    }


}

console.log(linhasNavios);
console.log(linhasBombas);
