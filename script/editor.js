const page = 0
function switchPage(page) {
    const codeEditor = document.getElementById('code')
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
            texturePane.style.display = 'block'
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
    //javascript bullshit making me have to turn the img elements in textures into actual saveable crap grr
    const data = {}
    data.sprites = sprites
    data.textures = textures
    console.log(data)
    download(JSON.stringify(data), 'project.tcp', 'application/json')
}

switchPage(1)