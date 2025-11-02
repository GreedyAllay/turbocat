const page = 0
const console_pane = document.getElementById('console')
function switchPage(page) {
    const codeEditor = document.getElementById('code-pane')
    const texturePane = document.getElementById('textures')
    const audioPane = document.getElementById('audio')
    const codeTab = document.getElementById('code-tab')
    const textureTab = document.getElementById('texture-tab')
    const audioTab = document.getElementById('audio-tab')
    codeEditor.style.display = 'none'
    texturePane.style.display = 'none'
    audioPane.style.display = 'none'
    codeTab.setAttribute('selected', 'false')
    textureTab.setAttribute('selected', 'false')
    audioTab.setAttribute('selected', 'false')
    switch (page) {
        case 0:
            codeEditor.style.display = 'block'
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
    download(JSON.stringify(data), 'project.tcp', 'application/json')
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
window.scrollTo(0, 0);