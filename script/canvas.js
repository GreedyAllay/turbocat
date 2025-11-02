const canvas = document.getElementById('stage')
const context = canvas.getContext("2d")

const image = document.createElement('img')
image.src = 'assets/project/cat.svg'

function updateCanvas() {
    setTimeout(() => {
        const s = Object.keys(sprites)
        context.clearRect(0, 0, canvas.width, canvas.height);
        s.forEach(sprite => {
            const {x, y} = sprites[sprite].transform.pos
            const size = sprites[sprite].transform.size
            const w = sprites[sprite].transform.width
            const h = sprites[sprite].transform.height
            const r = sprites[sprite].transform.rotation
            const img = document.createElement('img')
            img.src = textures[sprites[sprite].texture].src
            context.save();
            context.translate((canvas.width/2),(canvas.height/2));
            context.rotate(r*Math.PI/180)
            context.drawImage(img, x, y, ((-img.width/2)*size)*w, ((-img.height/2)*size)*h)
            context.restore();
        })  
    }, 10);
}