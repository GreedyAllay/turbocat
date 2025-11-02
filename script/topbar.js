function createTopBar () {
    const items = ['new', 'save', 'load']
    const ids = ['new-button', 'save-button', 'load-button']

    const topbar = document.getElementById('top-bar')
    for(let i = 0; i < items.length; i++) {
        const item = document.createElement('div')
        item.textContent = items[i]
        item.className = 'topbar-item'
        item.id = ids[i]
        topbar.appendChild(item)
    }

    addTopBarListeners()
}

createTopBar()