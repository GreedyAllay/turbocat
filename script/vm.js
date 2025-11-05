const transform = {
    move(x, y) {
        sprites[runID].transform.pos.x = x
        sprites[runID].transform.pos.y = y
    },
    shift(x, y) {
        sprites[runID].transform.pos.x += x
        sprites[runID].transform.pos.y += y
    },
    rotate(d) {
        sprites[runID].transform.rotation = d
    },
    spin(d) {
        sprites[runID].transform.rotation += d
    }
}

const display = {
    size(s) {
        sprites[runID].transform.size = s
    },
    texture(name) {
        sprites[runID].texture = name
    },
    text(txt) {
        drawText(
            sprites[runID].transform.pos.x,
            sprites[runID].transform.pos.y,
            txt
        )
    },
    show() {
        sprites[runID].hidden = false
    },
    hide() {
        sprites[runID].hidden = true
    }
}

const audio = {
    play(id, name) {
        alert('pretend as if sound ' + name + ' is playing now with the id ' + id)
    }
}

async function execute(code, spriteID) {
    try {
        const id = spriteID
        eval(code) 
    } catch (e) {
        console_pane.innerHTML += `${e}<br>`
    }
    updateCanvas()
    updateSpriteInputs()
}

let runID

function runAll() {
    const s = Object.keys(sprites)
    s.forEach(sprite => {
        runID = sprite
        execute(sprites[sprite].code)
    })
}

const fps = 60

const ft = 1/fps*1000