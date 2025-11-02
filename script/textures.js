let textures = {}
let selectedTexture

function loadTextures() {
    const image = document.createElement('img')
    image.src = 'assets/project/cat.svg'

    addTexture('turbocat', 'assets/project/turbocat.svg')
    addTexture('cat', 'assets/project/cat.svg')
    addTexture('cat1', 'assets/project/cat1.svg')
    addTexture('dango', 'assets/project/dango.svg')
    addTexture('penguin', 'assets/project/penguin.svg')
}

function addTexture(name, url) {
    const img = new Image()
    img.src = url
    textures[name] = {}
    textures[name].src = url
}

loadTextures()

function renderTexturesList() {
    const pane = document.getElementById('texture-list')
    const t = Object.keys(textures)
    document.querySelectorAll('.texture-card').forEach(element => { element.remove()})
    t.forEach(element => {
        const img = document.createElement('img')
        img.src = textures[element].src
        const card = document.createElement('div')
        const title = document.createElement('p')
        img.className = 'texture-image'
        card.className = 'texture-card'
        title.className = 'texture-title'
        title.textContent = element
        card.appendChild(img)
        card.appendChild(title)
        pane.appendChild(card)
//        if(element == sprites[selected].texture) {card.setAttribute('selected', 'true')}
        
    });

    addTextureListListeners()
}