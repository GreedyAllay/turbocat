const modts = [
    'TurboWrap ripoff',
    'TurboWarp but JavaScript!',
    'Turbocat is made from scratch in vanilla HTML, CSS and JS!',
    "let's get coding",
    'When the turbo is warp',
    '(not) The first ever scratch recode',
    "Javascript was originally called ECMAscript but later renamed to JavaScript to rise on Java's success",
    'me when rarry',
    ''
    
]

const loading_screen = document.createElement('div')
loading_screen.id = 'loading-screen';
(() => {
    const error = document.createElement('p')
    const title = document.createElement('p')
    title.className = 'loading-title'
    title.textContent = 'Loading Editor'
    error.textContent = modts[Math.round(random(0, modts.length-1))]
    error.id = 'loading-error'
    title.id = 'loading-title'
    loading_screen.appendChild(title)
    loading_screen.appendChild(error)
})()
document.body.appendChild(loading_screen)

function hideLoading() {
    loading_screen.setAttribute('done', 'true')
    setInterval(() => {
        loading_screen.remove()
    }, 200)
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

if(false)
window.onerror = function(message, source, lineno, colno, error) {
    document.getElementById('loading-error').textContent = `${error}, ${message}, ${source}`
    document.getElementById('loading-title').textContent = `Loading Error`
};