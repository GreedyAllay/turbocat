const vm = {
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


async function execute(code) {
    try {
       eval(code) 
    } catch (e) {
        console_pane.innerHTML += `${e}<br>`
    }
    updateCanvas()
    updateSpriteInputs()
}
