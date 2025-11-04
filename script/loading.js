const loading_screen = document.createElement('div')
loading_screen.id = 'loading-screen';
(() => {
    const title = document.createElement('p')
    title.className = 'loading-title'
    title.textContent = 'Loading Editor'
    loading_screen.appendChild(title)
})()
document.body.appendChild(loading_screen)

function hideLoading() {
    loading_screen.setAttribute('done', 'true')
    setInterval(() => {
        loading_screen.remove()
    }, 200)
}