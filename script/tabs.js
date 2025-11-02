function createTabs () {
    const items = ['Code', 'Textures', 'Audio']
    const ids = ['code-tab', 'texture-tab', 'audio-tab']

    const tabs = document.getElementById('tabs')
        for(let i = 0; i < items.length; i++) {
            const item = document.createElement('div')
            item.textContent = items[i]
            item.className = 'tab'
            item.id = ids[i]
            tabs.appendChild(item)
        }

    addTabListeners()
}

createTabs()