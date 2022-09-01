
// Volume of cylinder, sphere and cone

class Parent {

    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }

}

class Cylinder extends Parent {
    getVolume() {
        return (Math.PI * (this.radius**2) * this.height).toFixed(4);

    }
}

class Sphere extends Parent {
    getVolume() {
        return ((4/3)*Math.PI * (this.radius**3)).toFixed(4);

    }
}

class Cone extends Parent {
    getVolume() {
        return ((1/3)*Math.PI * (this.radius**2) * this.height).toFixed(4);

    }
}


let cylinder= new Cylinder(5,10);
console.log(cylinder.getVolume());

let sphere= new Sphere(5,10);
console.log(sphere.getVolume());


let cone= new Cone(5,10);
console.log(cone.getVolume());