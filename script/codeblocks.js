const blocks = {}

defineLabel('Transformation', '#215dcc', 'motion-label')
defineBlock('move {x}, {y}', 'transform.shift(20, 20)', '#215dcc', 'motion-shift')
defineBlock('goto {x}, {y}', 'transform.move(20, 20)', '#215dcc', 'motion-move')
defineBlock('rotate {d}', 'transform.rotate(45)', '#215dcc', 'motion-rotate')
defineBlock('spin {d}', 'transform.spin(45)', '#215dcc', 'motion-spin')

defineLabel('Display', '#7f21cc', 'display-label')
defineBlock('set size {%}', 'display.size(200)', '#7f21cc', 'display-size')
defineBlock('set texture {id}', 'display.texture("cat")', '#7f21cc', 'display-texture')
defineBlock('display text {txt}', 'display.text("hello, world!")', '#7f21cc', 'display-text')


defineLabel('Control', '#cc9021ff', 'control-label')
defineBlock('if, then', 'if(true) { \n//do something\n}', '#cc9021ff', 'control-if')
defineBlock('if, then, else', 'if(true) { \n//do something\n} else { \n//do something else\n}', '#cc9021ff', 'control-ifelse')
defineBlock('forever', 'setInterval(() => {\n    //do something\n}, ft)', '#cc9021ff', 'control-loop')

defineLabel('Logic', '#3ecc21ff', 'logic-label')
defineBlock('compare a to b', '("a" == "b")', '#3ecc21ff', 'logic-compare')

defineLabel('Variables', '#b4ac3eff', 'var-label')
defineBlock('set {var} to {value}', 'var hello = "world"', '#b4ac3eff', 'var-set')
defineBlock('force {var} to {value}', 'const hello = "world"', '#b4ac3eff', 'var-const')
defineBlock('get value of {var}', '(hello)', '#b4ac3eff', 'var-get')


defineLabel('Browser', '#21c08bff', 'browser-label')
defineBlock('alert {message}', 'alert("hello, world!")', '#21c08bff', 'browser-alert')
defineBlock('confirm {message}', 'confirm("destroy the world?")', '#21c08bff', 'browser-confirm')
defineBlock('prompt {message}', 'prompt("what cat breed is your favourite?")', '#21c08bff', 'browser-prompt')
defineBlock('log {message}', 'console.log("Hello!")', '#21c08bff', 'browser-log')
defineBlock('trow {error}', 'throw ("error!")', '#21c08bff', 'browser-error')

defineLabel('Miscellaneous', '#8a8a8aff', 'misc-label')
defineBlock('//comment', '//', '#8a8a8aff', 'misc-comment')


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
    const codeblocks = document.getElementById('codeblocks-list')
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


