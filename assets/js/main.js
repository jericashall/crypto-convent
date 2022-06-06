import {key} from "./apikey.js"
console.log(key)
let crypto = {}
document.querySelector('#convert').addEventListener('click', runConversion)

function fetchNamesandRates() {
   fetch(`https://api.coinlayer.com/api/live?access_key=${key}`)
        .then(res => res.json())
        .then(data => {
            let rates = data.rates
            let displayRates = ''
            fetch(`https://api.coinlayer.com/api/list?access_key=${key}`)
                .then(res => res.json())
                .then(data => {
                    crypto = data.crypto
                    let listItems = ''
                    for(const coin in crypto) {
                            listItems += `<option>${crypto[coin].name}</option>`
                    }
                    document.querySelector('#coinList').innerHTML = listItems

                    for(const rate in rates) {
                        if(crypto[rate].name !== 'AdvancedInternetBlock'){
                            displayRates += `<div class="rates">
                            <p class="abbrev">${rate}</p>
                            <p class="name">${crypto[rate].name}</p>
                            <p class="rate">$${rates[rate]}</p>
                            </div>`
                        }
                    }
                    document.querySelector('.coins').innerHTML = displayRates
                })
                .catch(err => `error ${err}`)

        })
        .catch(err => `error ${err}`)
    }

fetchNamesandRates()

function runConversion(){
    let coinFrom = document.querySelector('.fromCoin').value
    let coinTo = document.querySelector('.toCoin').value
    let amountConverted = document.querySelector('.amountCon').value
    document.querySelector('.conversion').classList.remove('hidden')
    document.querySelector('.from').innerText = coinFrom
    document.querySelector('.to').innerText = coinTo
    
    fetch(`https://api.coinlayer.com/api/list?access_key=${key}`)
    .then(res => res.json())
    .then(data => {
        crypto = data.crypto
        console.log(Object.keys(crypto))
        let fromAbr = Object.keys(crypto).find(x => crypto[x].name == coinFrom)
        let toAbr = Object.keys(crypto).find(x => crypto[x].name == coinTo)


        fetch(`https://api.coinlayer.com/api/convert?access_key=${key}&from=${fromAbr}&to=${toAbr}&amount=${amountConverted}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.querySelector('.dollars').innerText = `$${data.result}`
        
            })
            .catch(err => `error ${err}`)
    
    })
    .catch(err => `error ${err}`)
    
}

