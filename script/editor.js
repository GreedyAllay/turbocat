const page = 0
const console_pane = document.getElementById('console')
function switchPage(page) {
    const codeEditor0 = document.getElementById('code-pane')
    const texturePane = document.getElementById('textures')
    const audioPane = document.getElementById('audio')
    const codeTab = document.getElementById('code-tab')
    const textureTab = document.getElementById('texture-tab')
    const audioTab = document.getElementById('audio-tab')
    codeEditor0.style.display = 'none'
    texturePane.style.display = 'none'
    audioPane.style.display = 'none'
    codeTab.setAttribute('selected', 'false')
    textureTab.setAttribute('selected', 'false')
    audioTab.setAttribute('selected', 'false')
    switch (page) {
        case 0:
            codeEditor0.style.display = 'block'
    codeTab.setAttribute('selected', 'true')
            break
        case 1:
            texturePane.style.display = 'flex'
            renderTexturesList()
    textureTab.setAttribute('selected', 'true')
            break
        case 2:
            audioPane.style.display = 'block'
    audioTab.setAttribute('selected', 'true')
            break
    }

}

function exportProject() {
    const data = {}
    data.sprites = sprites
    data.textures = textures
    download(JSON.stringify(data), 'project.json', 'application/json')
}

function importProject() {
    const fp = document.createElement('input')
    fp.type = 'file'
    fp.accept = '.tcp'
    let data

    fp.addEventListener('change', () => {
        const file = fp.files[0]
        const r = new FileReader()

        r.onload = (e) => {
            if(!confirm("Are you sure you want to replace the contents of the current project? They'll be gone forever! (a long time)")) {return}
            data = JSON.parse(e.target.result)
            sprites = data.sprites
            textures = data.textures
            renderSpritesPane()
            updateCanvas()
        }

        r.readAsText(file)
    })
    fp.click()


}

switchPage(0)

function importAsset() {
    const fp = document.createElement('input')
    let file
    fp.type = 'file'
    fp.click()

    fp.onchange = () => {
        file = fp.files[0]
        if(!file) {return}
        const r = new FileReader()
    r.onload = (e) => {
        addTexture(file.name, e.target.result)
        renderTexturesList()
    }

    r.readAsDataURL(file)
    }
}

function loadDefaults() {
    const c = document.getElementById('code')
    c.textContent = `
    transform.shift(5, 5);
    transform.spin(5)
    `
}


function waitForPage() {
    const i = setInterval(() => {
        if(document.readyState === 'complete') {
            codeEditor.focus()
            loadSprite('sprite1')
            window.scrollTo(0, 0)
            clearInterval(i);
        }
    }, 100);
}

waitForPage()