function Particle(x, y, m){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;

    this.applyForce = function(force){
        var f = force.copy();
        f.div(this.mass);
        this.acc.add(f);
    }


    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);

    }

    this.display = function(){
        fill(255, 150);
        stroke(255);
        ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*9);
    }

this.edges = function(){
    if (this.pos.y > height) {
        this.vel.y *= -0.9;
        this.pos.y = height - 24;
    }

    if (this.pos.x > width) {
        this.vel.x *= -0.9;
        this.pos.x = width - 24;
    }
}




}
