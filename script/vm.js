const transform = {
    move(x, y) {
        sprites[selected].transform.pos.x = x
        sprites[selected].transform.pos.y = y
    },
    shift(x, y) {
        sprites[selected].transform.pos.x += x
        sprites[selected].transform.pos.y += y
    },
    dir(d) {
        sprites[selected].transform.rotation = d
    },
    spin(d) {
        sprites[selected].transform.rotation += d
    }
}

const display = {
    size(s) {
        sprites[selected].transform.size = s
    },
    texture(name) {
        sprites[selected].texture = name
    }
}

const audio = {
    play(id, name) {
        alert('pretend as if sound ' + name + ' is playing now with the id ' + id)
    }
}

async function execute(code) {
    try {
       eval(code) 
    } catch (e) {
        console_pane.innerHTML += `${e}<br>`
    }
    updateCanvas()
    updateSpriteInputs()
}

function runAll() {
    const s = Object.keys(sprites)
    s.forEach(sprite => {
        
    })
    execute(codeEditor.getValue())
}