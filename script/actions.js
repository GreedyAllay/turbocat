document.getElementById('run').addEventListener('click', () => { saveCode(); runAll() })

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
    importAsset()
  })

function addTopBarListeners() { 
    document.getElementById('save-button').addEventListener('click', () => { exportProject() })
    document.getElementById('load-button').addEventListener('click', () => { importProject() })
    document.getElementById('new-button').addEventListener('click', () => { if(confirm('Are you sure?')) location.reload(); })
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

//codeEditor.addEventListener('change', () => {
//    saveCode()
//})

let cursor = {}
function initStageCursor() {
    const stage = document.getElementById('stage')
        stage.addEventListener('mousemove', (e) => {
    })
}

let codeBlocksOpened = false

function setToggleCodeBlocksEventListener () {
    const toggle = document.getElementById('toggle-codeblocks')
    const pane = document.getElementById('codeblocks')
    const code = document.getElementById('code')
    toggle.addEventListener('click', () => {
        if(codeBlocksOpened) {
            pane.setAttribute('hide', 'true')
            toggle.setAttribute('hide', 'true')
            code.setAttribute('hide', 'true')
            codeBlocksOpened = false
        } else {
            pane.setAttribute('hide', 'false')
            toggle.setAttribute('hide', 'false')
            code.setAttribute('hide', 'false')
            codeBlocksOpened = true
        }
    })
}

setToggleCodeBlocksEventListener()

let dragging = null

function addCodeBlocksEventListeners() {
    const b = Object.keys(blocks)
    b.forEach(block => {
        if(document.getElementById(`block-${block}`)) {
            const thisEl = document.getElementById(`block-${block}`)
            thisEl.addEventListener('click', () => {
                insertCode(blocks[block].call + '\n')
            })
            if(false) {
                thisEl.addEventListener('mousedown', () => {
                    dragging = thisEl
                    thisEl.style.filter = 'brightness(1.2)'
                })            
            }
        }


    })
}

addEventListener('mouseup', (e) => {
    dragging = null
})


addEventListener('mousemove', (e) => {
    if(dragging) {
        dragging.style.position = "fixed";
        dragging.style.left = e.clientX
        dragging.style.top = e.clientY
    }    
    
    if(false) {
        dragging.style.transform = `translateX(${e.clientX - Number(getComputedStyle(dragging).width.replace('px', '')/2)}px)
        translateY(${e.clientY - Number(getComputedStyle(dragging).height.replace('px', '')/2)}px)`
    }
})