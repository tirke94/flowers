let divIspis = document.getElementById('ispis')


let brRuza = document.getElementById('inputRuza')
let brLjiljana = document.getElementById('inputLjiljan')
let brGerbera = document.getElementById('inputGerber')

let pokloni = document.querySelectorAll('input[name="pokloni"]')
let placanje = document.querySelectorAll('input[name="placanje"]')

let btnIzracunaj = document.getElementById('izracunaj')
let btnResetuj = document.getElementById('resetuj')

let suma = 0;
let dodatniPoklon = 0;
let pBombonjera = ''
let pCokolada = ''
let pSampanjac = ''


let plusBombonjera = document.createElement('p')
plusBombonjera.classList.add('plusBombonjera')
let plusCokolada = document.createElement('p')
plusCokolada.classList.add('plusCokolada')
let plusSampanjac = document.createElement('p')
plusSampanjac.classList.add('plusSampanjac')
let cena = document.createElement('p')
cena.classList.add('cena')
let imgGerber = document.createElement('div')
imgGerber.classList.add('ispisGerber')
let imgLjiljan = document.createElement('div')
imgLjiljan.classList.add('ispisLjiljan')
let imgRuze = document.createElement('div')
imgRuze.classList.add('ispisRuza')

btnIzracunaj.addEventListener('click', () => {
    suma = 0;
    dodatniPoklon = 0
    pokloni.forEach(poklon => {
        if (poklon.checked) {
            dodatniPoklon += 500;
            if (poklon.value == 'bombonjera') {
                pBombonjera.innerHTML = '+ Bombonjera'
            }
            if (poklon.value == 'cokolada') {
                pCokolada.innerHTML = '+ Čokolada'
            }
            if (poklon.value == 'sampanjac') {
                pSampanjac.innerHTML = '+ Šampanjac'
            }
        }
    })
    placanje.forEach(nacin => {
        if (nacin.checked) {
            if (nacin.value == 'kes') {
                suma = Math.round(brRuza.value) * 150 + Math.round(brLjiljana.value) * 120 + Math.round(brGerbera.value) * 70 + dodatniPoklon
            } else {
                suma = Math.round(brRuza.value) * 150 + Math.round(brLjiljana.value) * 120 + Math.round(brGerbera.value) * 70 + dodatniPoklon
                if (suma > 2000) {
                    suma = (suma - (suma * 10 / 100))
                }
            }
        }
    })
    for (let i = 0; i < brRuza.value; i++) {
        imgRuze.innerHTML += '<img src="slike/ruza.png">'
    }
    for (let i = 0; i < brLjiljana.value; i++) {
        imgLjiljan.innerHTML += '<img src="slike/ljiljan.png">'
    }
    for (let i = 0; i < brGerbera.value; i++) {
        imgGerber.innerHTML += '<img src="slike/gerber.png">'
    }

    cena.textContent = "Cena vase porudžbine iznosi " + suma + " dinara."
    pokloni.forEach(poklon => {
        if (poklon.checked) {
            dodatniPoklon += 500;
            if (poklon.value == 'bombonjera') {
                plusBombonjera.innerHTML = '+ Bombonjera'
            }
            if (poklon.value == 'cokolada') {
                plusCokolada.innerHTML = '+ Čokolada'
            }
            if (poklon.value == 'sampanjac') {
                plusSampanjac.innerHTML = '+ Šampanjac'
            }
        }
    })
    divIspis.append(imgRuze, imgLjiljan, imgGerber, plusBombonjera, plusCokolada, plusSampanjac, cena)
    
})

btnResetuj.addEventListener('click', () => {
    imgRuze.innerHTML = ''
    imgLjiljan.innerHTML = ''
    imgGerber.innerHTML = ''
    plusBombonjera.innerHTML = ''
    plusCokolada.innerHTML = ''
    plusSampanjac.innerHTML = ''
    divIspis.textContent = ''
})