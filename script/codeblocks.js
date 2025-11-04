const blocks = {}

defineBlock('test block', 'transform.shift(20, 20)', 'sex')

function defineBlock(t, c, id) {
    blocks[id] = {
        text: t,
        call: c
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
        codeblocks.appendChild(el)
        i++
    })    
}

generateCodeblocks()

