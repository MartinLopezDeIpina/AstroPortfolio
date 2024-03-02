
export class Particle {
    constructor(canvas){
        this.canvas = canvas;
        this.circleRadius = canvas.width / 2 ;
        this.limiteY = this.canvas.height -50;
        this.disapearing = false;
        this.opacity = 0;

        this.initPositions();

        this.size = this.getRandomSize();
        this.speedX = this.getRandomSpeed();
        this.speedY = this.getRandomSpeed();
        this.opacityChange = this.getRandomOpacityChange();
        this.opacityChangePositive = Math.random() > 0.5;
    }

    initPositions(){
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.disapearing = false;

        if(this.particulaFueraDelCirculo() || this.particulaFueraDelLimiteY()){
            this.disapearing = true;
        }
    }

    move(){
        this.changeOpacity();

        this.x += this.speedX;
        this.y += this.speedY;

        if(this.particulaFueraDelCirculo() || this.particulaFueraDelLimiteY()){
            this.disapearing = true;
        }

        if(this.particulaFueraDelCanvas()){
            this.respawnSparkle();
        }
    }

    particulaFueraDelCanvas(){
        return this.x > this.canvas.width || this.y > this.canvas.height || this.x < 0 || this.y < 0
    }

    particulaFueraDelCirculo(){
        //Distancia respecto al centro del círculo, el centro de X es canvas.width / 2
        const distanceX = this.x - this.canvas.width / 2;
        //Distancia respecto al centro que será 0 pq el el medio circulo está mirando pa abajo
        const distanceY = this.y;
        //Teorema de pitágoras pa sacar la distancia
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        //Si la distancia es mayor que el radio del círculo (width/2), la particula está fuera
        return distance > this.circleRadius;
    }

    particulaFueraDelLimiteY(){
        return this.y > this.limiteY;
    }

    respawnSparkle(){
        this.x = this.getRandomX();
        this.y = this.getRandomY();
        this.disapearing = false;
    }

    getRandomX(){
        // Genera una distancia aleatoria dentro del radio del círculo
        const radius = (Math.random()-0.5) * this.circleRadius;
        // Calcula la coordenada x dentro del círculo
        return this.canvas.width / 2 + radius;
    }
    getRandomY(){
        // Genera una distancia aleatoria dentro del límite en el eje Y
        return Math.random() * this.limiteY;
    }
    getRandomSpeed(){
        const min = 0.1;
        const max = 1;
        const random = min + (Math.random() * (max - min));
        return random > 0.5 ? random : -random;
    }
    getRandomSize(){
        return Math.random();
    }


    getRandomOpacityChange(){
        return Math.random() * 0.05;
    }
    changeOpacity(){
        if(this.disapearing){
            if(this.opacity > 0){
                this.opacity -= this.opacityChange;
            }else{
                this.respawnSparkle();
            }
            return;
        }
        if(this.opacityChangePositive){
            this.opacity += this.opacityChange;
            this.changeOpacityDirection();
        }else{
            this.opacity -= this.opacityChange;
            this.changeOpacityDirection();
        }
    }
    changeOpacityDirection(){
        if(this.opacity > 1){
            this.opacityChangePositive = false;
        }
        if(this.opacity < 0){
            this.opacityChangePositive = true;
        }
    }
}
