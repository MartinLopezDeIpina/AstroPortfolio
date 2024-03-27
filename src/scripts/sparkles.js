import {Particle} from './Particula.js';

const numParticulas = 600;
const particulas = [];

let canvas = document.getElementById('lienzo');
let ctx;

let colorOnSurface = getComputedStyle(canvas).getPropertyValue('--md-sys-color-on-surface').trim();
console.log(colorOnSurface);

canvas.addEventListener('canvasResized', () => {
    ctx = canvas.getContext('2d');

    for (let i = 0; i < numParticulas; i++) {
        particulas.push(new Particle(canvas));
    }

    setInterval(() => {
        particulas.forEach(p => p.move());
        dibujarParticulas();
    }, 30);
});

function dibujarParticulas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particulas.length; i++) {
        let rgbaColor = colorOnSurface.replace(/ /g, ',').replace('rgb', 'rgba').replace(')', `, ${particulas[i].opacity.toString()})`);
        ctx.fillStyle = rgbaColor;
        ctx.beginPath();
        ctx.arc(particulas[i].x, particulas[i].y, particulas[i].size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

document.addEventListener('colorChanged', () =>{
    colorOnSurface = getComputedStyle(canvas).getPropertyValue('--md-sys-color-on-surface').trim();
    console.log(colorOnSurface);
});

    