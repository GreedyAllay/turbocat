const modts = [
    'TurboWrap ripoff',
    'TurboWarp but JavaScript!',
    'Turbocat is made from scratch in vanilla HTML, CSS and JS!',
    "let's get coding",
    'When the turbo is warp',
    '(not) The first ever scratch recode',
    "Javascript was originally called ECMAscript but later renamed to JavaScript to rise on Java's success",
    'me when I use https://rarry.vercel.app/',
    'Do people read these?',
    "The mascot is based off of the main character in my game Cattie's World!",
    'Loading scripts...',
    'Loading textures...',
    'Loading sounds...',
    'Loading turbocats...',
    'Loading catties...',
    'Loading axolays...',
    'Loading ecmas...',
    'Loading code palette...',
    'Loading the entire javascript engine...',
    'turbocar',
    'CurboTat',
    'Loading the main character...',
    'Loading the matrix...',
    'I forgot',
    '21',
    '69',
    "67 (it's funny because it's overdone)",
    `"By the maker of Cattie's World"`,
    "I still can't believe I coded this all on my own without actual use of AI",
    "Scratch, but for the cool kids",
    'ddededodediamante',
    "Crazy? I was crazy once. They put me in a rubber room. A rubber room filled with rats. And rats make me crazy. Crazy?...",
    "cord lat",
    'Welcome to SnailCat',
    `"I suck at coding"`
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