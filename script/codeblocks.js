const blocks = {}

defineBlock('test block', 'transform.shift(20, 20)', 'sex')


(() => {
    const codeblocks = document.getElementById('codeblocks')
    const b = Object.keys(blocks)
    b.forEach(block => {
        const el = document.createElement('p')
        el.textContent = block
        codeblocks.appendChild(el)
    })
})()


function defineBlock(text, call, id) {
    blocks[id] = {
        text: text,
        call: call
    }
}