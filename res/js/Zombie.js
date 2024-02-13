export class Zombie {
//static - dana vec patri tride - volame pomoci - NazevTridy.neco - Zombie.zombiesData
static zombiesData;
//v tomto atributu se budou ukladat vsechny zombies
static zombies = [];
    constructor(name, hp, speed, path) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.img = new Image();
        this.path = path;
        this.img.src = this.path;
        this.ratio = 0.3;
        this.size = {
            width: 100 * this.ratio,
            height: 200 * this.ratio,
        };

        this.position = {
            x: this.generateRandomInteger(0,1100),
            y:180,
        };
this.velocity={
    x:1,
    y:1,
    ratio: this.speed,
    };
    this.counter = 0;
}

respawn(){
    this.position = {
        x: this.generateRandomInteger(0,1100),
        y:180,
    };
    this.ratio = 0.3;
}


    generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
      }


    draw(ctx) {
        ctx.drawImage(this.img,  this.position.x, this.position.y, this.size.width, this.size.height,);
        
            };
            //metoda sluzi pro chozeni
    walk() {
        this.counter++;
        if(this.counter>=10){
            this.counter = 0;
            this.ratio +=0.01
        }
        //pozici x posouvame o ulozenou silu ( velocitu )
        this.position.x-=this.velocity.ratio * 0.05;
        this.position.y+= this.speed;
        //prenastavujeme vetsi ratio - opticka zmena pro zombika - vypada vetsi
       // this.ratio+=this.velocity.ratio
        //prenastavujeme rozmer podle noveho ratia
        this.size = {
            width: 100 * this.ratio,
            height: 200 * this.ratio,
        };
    }
    //metoda ktera slouzi pro aktualizace zombika
    update(healthbar){
        if (this.position.y > 720){
            healthbar.hp -=10;
            this.respawn();
        }
        this.walk();
    }
    //metoda ktera nastavi obrazek pro zombika
   /*  setType(type){
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
    }*/
    static genZombies() {
        Zombie.zombiesData.map((zombie) => {
            Zombie.zombies.push(
                new Zombie(
                    zombie.name,
                    zombie.hp,
                    zombie.speed,
                    zombie.path));

         });
    }
}





