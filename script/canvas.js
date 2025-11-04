const canvas = document.getElementById('stage')
const context = canvas.getContext("2d")

const image = document.createElement('img')
image.src = 'assets/project/cat.svg'

function updateCanvas() {
    const s = Object.keys(sprites)
    context.clearRect(0, 0, canvas.width, canvas.height);
    s.forEach(sprite => {
        const {x, y} = sprites[sprite].transform.pos
        const size = sprites[sprite].transform.size/4
        const w = sprites[sprite].transform.width
        const h = sprites[sprite].transform.height
        const r = sprites[sprite].transform.rotation
        const img = document.createElement('img')
        img.src = textures[sprites[sprite].texture].src

        if(!img.complete) {return};
            context.save();
            context.translate((canvas.width/2),(canvas.height/2));
            context.rotate(r*Math.PI/180)
            context.translate(x, -y)
            context.drawImage(
                img,
                -img.width/2*size*w,
                -img.height/2*size*h,
                img.width*size*w,
                img.height*size*h,
            )
            context.restore();
        })
}

function drawText(x, y, text) {
    setTimeout(() => {
        context.font = "48px serif";
        context.fillText(text, x, y);
    }, 10);
  
}