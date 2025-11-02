//sprite pane goodies
const spritepane = document.getElementById('sprites')

let first = true
function renderSpritesPane() {
    document.querySelectorAll('.sprite').forEach(element => { element.remove() })
    Object.keys(sprites).forEach(sprite => {
        const el = document.createElement('div')
        const img = document.createElement('img')
        img.src = textures[sprites[sprite].texture].src
        const title = document.createElement('p')
        title.textContent = sprite
        el.className = 'sprite'
        img.className = 'sprite-image'
        el.appendChild(img)
        el.appendChild(title)
        spritepane.appendChild(el)
        if(selected === sprite) { el.setAttribute('selected', 'true') } else { el.setAttribute('selected', 'false') }
        if(first) { first = false; el.setAttribute('selected', 'true') }
    })
    addSpritesPaneEventListener()
}

//sprite management
const sprites = {}
let selected

createSprite('sprite1', 'cat')

function createSprite(id, t) {
    const s = Object.keys(sprites)
    let allow = true
    s.forEach(sprite => {
        if(sprite === id) {
            alert('a sprite with this name already exists, silly!')
            allow = false
        }
    })
    if(allow) {
        if(!t) {const k = Object.keys(textures); t = k[0]}
    sprites[id] = {
        transform: {
            pos: {
                x: 69,
                y: 21
            },
            size: 1,
            rotation: 0,
            width: 1,
            height: 1
        },
        texture: t,
    }
    selected = s[s.length - 1]
    renderSpritesPane()
    updateCanvas()
}
}

function loadSprite(id) {
    const c = document.getElementById('code')
    if(c.textContent) {sprites[selected].code = c.textContent}
    if(sprites[id].code) {c.textContent = sprites[id].code } else {c.textContent = ""}
    selected = id
    updateSpriteInputs()
}

function deleteSprite(id) {
    sprites[id].delete()
    updateCanvas()
}

function updateSpriteInputs() {
    const id = selected
    size_input.value = sprites[id].transform.size*100
    rotation_input.value = sprites[id].transform.rotation
    x_input.value = sprites[id].transform.pos.x
    y_input.value = sprites[id].transform.pos.y    
}