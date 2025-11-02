framerate = 1

frametime = 1000/framerate

async function execute(c) {
    const code = c.split(";")
    code.forEach(cmd => {
        if(cmd[0] == "(") {
            
        }
    });
    console.log(code)
    for(const e of code) {
        await run(e, "sprite1")
    }
    updateCanvas()
    updateSpriteInputs()
}


async function run(command, sprite) {
    const code = command.split(" ")
    switch (code[0]) {
        case "goto":
            sprites[sprite].transform.pos.x = Number(code[1])
            sprites[sprite].transform.pos.y = Number(code[2])
            console.log(sprites[sprite].pos)
            updateCanvas()
            break
        case "change":
            sprites[sprite].transform.pos.x += Number(code[1])
            sprites[sprite].transform.pos.y += Number(code[2])
            updateCanvas()
            break
        case "setdir":
            sprites[sprite].transform.rotation = Number(code[1])
            updateCanvas()
            break
        case "rotate":
            sprites[sprite].transform.rotation += Number(code[1])
            updateCanvas()
            break
        case "log":
            console.log(code[1])
            break
        case "loop":
            forever(code[1], sprite)
            break
        case "wait":
            await new Promise(resolve => setTimeout((resolve), Number(code[1])));
            break;
        case "repeat":
            repeatFor(code[1], code[2])
            break
    }
}

function forever(command, sprite) {
    setInterval
    const id = setInterval(() => {
        run('rotate 20;', sprite)
        console.log(command)
    }, frametime);
}

function repeatFor(command, amount, sprite) {
    for(let i = 0; i < amount; i++) {
        console.log('pp')
    }
}


//    code.forEach(e => {
//        await run(e, "sprite1")
//    });