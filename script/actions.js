document.getElementById('run').addEventListener('click', () => { execute(document.getElementById('code').textContent) })

function addSpritesPaneEventListener() {
    const s = document.querySelectorAll('.sprite')
    s.forEach(element => {
        element.addEventListener('click', () => {
            s.forEach(element => { if(element.getAttribute('selected') === 'true') {element.setAttribute('selected', 'false')} })
            element.setAttribute('selected', 'true')
            loadSprite(element.textContent)
        })
    });
}

document.getElementById('new-sprite').addEventListener('click', () => { const p = prompt('Enter a new name', 'cat'); if(p) {createSprite(p)}  })
document.getElementById('new-texture').addEventListener('click', () => { 
    const fp = document.createElement('input')
    let file
    fp.type = 'file'
    fp.click()
    if(!file) {return}

    const r = new FileReader()

    r.onload = (e) => {
        file = fp.files[0]
        const data = e.target.result
        alert(data)
    }

    alert(r.readAsDataURL(file))
  })

function addTopBarListeners() { 
    document.getElementById('save-button').addEventListener('click', () => { exportProject() })
    document.getElementById('load-button').addEventListener('click', () => { importProject() })
    document.getElementById('new-button').addEventListener('click', () => { location.reload() })
}

function addTabListeners() {
    const t = document.querySelectorAll('.tab')
    let i = 0
    t.forEach(element => {
        const index = i
        element.addEventListener('click', () => {
            t.forEach(element => { if(element.getAttribute('selected') === 'true') {element.setAttribute('selected', 'false')} })
            element.setAttribute('selected', 'true')
            switchPage(index)
        })
    i++
    })
}

function addTextureListListeners() {
    const t = document.querySelectorAll('.texture-card')
    const t1 = document.querySelectorAll('.texture-title')
    const texture_preview = document.getElementById('texture-preview')
    let i = 0
    t.forEach(element => {
        const index = i
        element.addEventListener('click', () => {
            t.forEach(element => { if(element.getAttribute('selected') === 'true') {element.setAttribute('selected', 'false')} })
            t1.forEach(element => { if(element.getAttribute('selected') === 'true') {element.setAttribute('selected', 'false')} })
            element.setAttribute('selected', 'true')
            sprites[selected].texture = element.textContent
            t1[index].setAttribute('selected', 'true')
            texture_preview.src = textures[sprites[selected].texture].src
            renderSpritesPane()
            updateCanvas()
        })
    i++
    })
}

const size_input = document.getElementById('size-input')
const rotation_input = document.getElementById('rotation-input')
const x_input = document.getElementById('x-input')
const y_input = document.getElementById('y-input')
const name_input = document.getElementById('name-input')
size_input.addEventListener('change', (e) => {
    sprites[selected].transform.size = (size_input.value/100)
    updateCanvas()
})
x_input.addEventListener('change', (e) => {
    sprites[selected].transform.pos.x = (x_input.value)
    updateCanvas()
})
y_input.addEventListener('change', (e) => {
    sprites[selected].transform.pos.y = (y_input.value)
    updateCanvas()
})
rotation_input.addEventListener('change', (e) => {
    if(rotation_input.value > 359) {rotation_input.value = 0}
    if(rotation_input.value < 0) {rotation_input.value = 359}
    sprites[selected].transform.rotation = (rotation_input.value)
    updateCanvas()
})
name_input.addEventListener('change', (e) => {
    const s = Object.keys(sprites)
    let allowed = true
    s.forEach(el => {
        if(el === name_input.value) {
            alert('a sprite with this name already exists, silly!')
            allowed = false
        }
    })
    if (allowed) {
        sprites[name_input.value] = sprites[selected]
        delete sprites[selected]
        selected = name_input.value
        updateCanvas()
        renderSpritesPane()        
    }

})