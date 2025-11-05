const blocks = {}

defineLabel('Transformation', '#215dcc', 'motion-label')
defineBlock('move {x}, {y}', 'transform.shift(20, 20)', '#215dcc', 'motion-shift')
defineBlock('goto {x}, {y}', 'transform.move(20, 20)', '#215dcc', 'motion-move')
defineBlock('rotate {d}', 'transform.setdir(45)', '#215dcc', 'motion-rotate')
defineBlock('spin {d}', 'transform.spin(45)', '#215dcc', 'motion-spin')

defineLabel('Display', '#7f21cc', 'display-label')
defineBlock('set size {%}', 'display.size(200)', '#7f21cc', 'display-size')
defineBlock('set texture {id}', 'display.texture("cat")', '#7f21cc', 'display-texture')
defineBlock('display text {txt}', 'display.text("hello, world!")', '#7f21cc', 'display-text')


defineLabel('Control', '#cc9021ff', 'logic-label')
defineBlock('if, then', 'if(true) { \n//do something\n}', '#cc9021ff', 'logic-if')
defineBlock('if, then, else', 'if(true) { \n//do something\n} else { \n//do something else\n}', '#cc9021ff', 'logic-ifelse')

function defineBlock(t, c, clr, id) {
    blocks[id] = {
        text: t,
        call: c,
        color: clr,
        type: 'block'
    }
}

function defineLabel(t, clr, id) {
    blocks[id] = {
        text: t,
        color: clr,
        type: 'label'
    }
}


function generateCodeblocks() {
    const codeblocks = document.getElementById('codeblocks')
    const b = Object.keys(blocks)
    let i = 0
    b.forEach(block => {
        const el = document.createElement('p')
        el.textContent = blocks[block].text

        if(blocks[block].type === 'block') {
            el.className = 'codeblock'
            el.id = `block-${block}`
            el.style.backgroundColor = blocks[block].color
        } else {
            el.style.color = blocks[block].color
            el.className = 'codeblocklabel'
            el.id = `label-${block}`
        }



        codeblocks.appendChild(el)
        i++
    })
    addCodeBlocksEventListeners()
}

generateCodeblocks()


