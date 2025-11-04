const blocks = {}

defineBlock('move x y', 'transform.shift(20, 20)', '#215dcc', 'motion-shift')
defineBlock('goto x y', 'transform.move(20, 20)', '#215dcc', 'motion-move')

function defineBlock(t, c, clr, id) {
    blocks[id] = {
        text: t,
        call: c,
        color: clr,
    }
}

function generateCodeblocks() {
    const codeblocks = document.getElementById('codeblocks')
    const b = Object.keys(blocks)
    let i = 0
    b.forEach(block => {
        const el = document.createElement('p')
        el.textContent = blocks[block].text
        el.className = 'codeblock'
        el.style.color = blocks[block].color
        codeblocks.appendChild(el)
        i++
    })    
}

generateCodeblocks()

