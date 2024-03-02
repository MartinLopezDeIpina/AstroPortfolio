import {Particle} from './Particula.js';

const numParticulas = 400;


let canvas = document.getElementById('lienzo');

canvas.addEventListener('canvasResized', () => {
    let ctx = canvas.getContext('2d');


    console.log("ejecutando script");

    const particulas = [];

    for (let i = 0; i < numParticulas; i++) {
        particulas.push(new Particle(canvas));
    }

    function dibujarParticulas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particulas.length; i++) {
            ctx.fillStyle = 'rgba(255, 255, 255, ' + particulas[i].opacity + ')';
            ctx.beginPath();
            ctx.arc(particulas[i].x, particulas[i].y, particulas[i].size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    setInterval(() => {
        particulas.forEach(p => p.move());
        dibujarParticulas();
    }, 30);
});