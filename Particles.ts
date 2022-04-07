export class Particle{
    x : number; 
    y : number; 
    size : number;
    speedX : number;
    speedY : number;
    color : string;
    hue: number;
    constructor(mouseX:number, mouseY:number){
        this.x = mouseX;
        this.y = mouseY ;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.hue = Math.floor(Math.random()*255);
        this.color = 'white';//'hsl('+this.hue+', 100%, 50%)';
    }
    update(): void{
        this.x = this.x + this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -=0.1;
    }
    draw(ctx : CanvasRenderingContext2D): void{
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white"; 
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2 );
        ctx.fill();
    }
  }