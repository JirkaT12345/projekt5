export class Zombie {
    constructor(name, hp, dmg, speed, type) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        this.img = new Image();
        this.setType(type);
        this.img.src = this.path;
        this.ratio = 0.3;
        this.size = {
            width: 100 * this.ratio,
            height: 180 * this.ratio,
        };

        this.position = {
            x:600,
            y:180,
        };
this.velocity={
    x:1,
    y:1,
    ratio: 0.005
};

    }
    draw(ctx) {
        ctx.drawImage(this.img,  this.position.x, this.position.y, this.size.width, this.size.height,);
        
            };
            //metoda sluzi pro chozeni
    walk() {
        //pozici x posouvame o ulozenou silu ( velocitu )
        this.position.x-=this.velocity.ratio * 30;
        this.position.y+= this.velocity.y;
        //prenastavujeme vetsi ratio - opticka zmena pro zombika - vypada vetsi
        this.ratio+=this.velocity.ratio
        //prenastavujeme rozmer podle noveho ratia
        this.size = {
            width: 100 * this.ratio,
            height: 200 * this.ratio,
        };
    }
    //metoda ktera slouzi pro aktualizace zombika
    update(){
        this.walk();
    }
    //metoda ktera nastavi obrazek pro zombika
    setType(type){
        //pole ktere obsahuje vsechny cesty k obrazkum zombiku
        const paths = [
            "./res/img/zombies/zombie1.png",
            "./res/img/zombies/zombie2.png",
            "./res/img/zombies/zombie3.png",
            "./res/img/zombies/zombie4.png",
            "./res/img/zombies/zombie5.png",
            "./res/img/zombies/zombie6.png",
            "./res/img/zombies/zombie7.png",
            "./res/img/zombies/zombie9.png",
            "./res/img/zombies/zombie10.png",
            "./res/img/zombies/zombie11.png",
            "./res/img/zombies/zombie12.png",
            "./res/img/zombies/zombie13.png",
        ];
        //nastavime atribut path - vybere cestu z pole paths podle indexu(parametru type)
this.path = paths[type];
    }
}





