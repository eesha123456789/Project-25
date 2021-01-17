class Paper
{
    constructor(x,y,radius)
    {
        var paper_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.8
        }
        this.body=Bodies.circle(x,y,radius,paper_options);
        this.radius=radius;
        this.image=loadImage('paper.png')
        World.add(world,this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
    }
}