
console.log(data);

function createCard(pokemon) {

    let liEl = document.createElement('li')
    liEl.className = 'card'

    let h2El = document.createElement('h2')
    h2El.className = 'card--title'
    h2El.textContent = pokemon.name

    let imgEl = document.createElement('img')
    imgEl.width = '256'
    imgEl.className = 'card--img'
    imgEl.src = pokemon.sprites.front_default

    let ulEl = document.createElement('ul')
    ulEl.className = 'card--text'
    let li2El = document.createElement('li')
    li2El.textContent = pokemon.stats[0].stat.name + ': ' + pokemon.stats[0].base_stat 

    let li3El = document.createElement('li')
    li3El.textContent = pokemon.stats[1].stat.name + ': ' + pokemon.stats[1].base_stat

    let li4El = document.createElement('li')
    li4El.textContent = pokemon.stats[2].stat.name + ': ' + pokemon.stats[2].base_stat

    let li5El = document.createElement('li')
    li5El.textContent = pokemon.stats[3].stat.name + ': ' + pokemon.stats[3].base_stat

    let li6El = document.createElement('li')
    li6El.textContent = pokemon.stats[4].stat.name + ': ' + pokemon.stats[4].base_stat

    let li7El = document.createElement('li')
    li7El.textContent = pokemon.stats[5].stat.name + ': ' + pokemon.stats[5].base_stat

    let theul = document.querySelector('.cards')
    theul.append(liEl)
    liEl.append(h2El, imgEl, ulEl)
    ulEl.append(li2El, li3El, li4El, li5El, li6El, li7El)
}


 for (let pokemon of data) {
    createCard(pokemon)
 }