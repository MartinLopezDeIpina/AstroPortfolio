import {Particle} from './Particula.js';

const numParticulas = 100;
let particulas = [];

let canvas = document.getElementById('lienzo');
let ctx;
let interval;

let colorOnSurface = getComputedStyle(canvas).getPropertyValue('--color-sparkles').trim();

canvas.addEventListener('canvasResized', () => {
    if (interval) {
        clearInterval(interval);
    }

    ctx = canvas.getContext('2d');

    for (let i = 0; i < numParticulas; i++) {
        particulas.push(new Particle(canvas));
    }

    interval = setInterval(() => {
        particulas.forEach(p => p.move());
        dibujarParticulas();
    }, 30);
});

window.addEventListener('beforeunload', () => {
    if (interval) {
        clearInterval(interval);
    }
});

function dibujarParticulas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particulas.length; i++) {
        //let rgbaColor = colorOnSurface.replace(/ /g, ',').replace('rgb', 'rgba').replace(')', `, ${particulas[i].opacity.toString()})`);
        let rgbaColor = hexToRgba(colorOnSurface, particulas[i].opacity);
        ctx.fillStyle = rgbaColor;
        ctx.beginPath();
        ctx.arc(particulas[i].x, particulas[i].y, particulas[i].size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function hexToRgba(hex, opacity) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

document.addEventListener('colorChanged', () =>{
    colorOnSurface = getComputedStyle(canvas).getPropertyValue('--color-sparkles').trim();
});

    