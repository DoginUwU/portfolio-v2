/* eslint-disable class-methods-use-this */
interface IStar {
    radius: number;
    xPos: number;
    yPos: number;
    xVelocity: number;
    yVelocity: number;
    color: string;
}

class Stars {
    color: string = 'rgba(255, 255, 255, 1)';

    minRadius: number = 0.5;

    maxRadius: number = 1.5;

    minSpeed: number = 0.05;

    maxSpeed: number = 0.1;

    fps: number = 60;

    numStars: number = 100;

    canvas: HTMLCanvasElement;

    ctx: CanvasRenderingContext2D | null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        window.addEventListener('resize', this.render);
    }

    init() {
        this.render();
        this.createCircle();
    }

    rand(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    render() {
        const self = this;
        const wHeight = window.innerHeight;
        const wWidth = window.innerWidth;
        if (!self.canvas) return;

        self.canvas.height = wHeight;
        self.canvas.width = wWidth;
    }

    createCircle() {
        const self = this;
        const stars: IStar[] = [];

        for (let i = 0; i < this.numStars; i += 1) {
            const star = {
                radius: self.rand(self.minRadius, self.maxRadius),
                xPos: self.rand(0, self.canvas.width),
                yPos: self.rand(0, self.canvas.height),
                xVelocity: self.rand(self.minSpeed, self.maxSpeed),
                yVelocity: self.rand(self.minSpeed, self.maxSpeed),
                color: self.color,
            };

            stars.push(star);
            self.draw(star);
        }

        self.animate(stars);
    }

    draw(star: IStar) {
        const self = this;
        const { ctx } = self;
        if (!ctx) return;

        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.xPos, star.yPos, star.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    animate(stars: IStar[]) {
        const self = this;
        const { ctx } = self;
        if (!ctx) return;

        setInterval(() => {
            self.clearCanvas();

            for (let i = 0; i < stars.length; i += 1) {
                const star = stars[i];
                star.xPos -= star.xVelocity;

                if (star.xPos < 0) {
                    star.xPos += self.canvas.width + star.radius;
                    star.yPos = self.rand(0, self.canvas.height);
                }

                self.draw(star);
            }
        }, 100 / self.fps);
    }

    clearCanvas() {
        const self = this;
        const { ctx } = self;
        if (!ctx) return;

        ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    }
}

export { Stars };
