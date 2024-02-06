import { Zombie } from "./Zombie.js";
import { Background,Crosshair } from "./ui/basic-utils.js";

const background = new Background();
const crosshair = new Crosshair();







/*const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "./res/img/background.png";
const image = new Image();
image.src = "./res/img/zombies/zombie5.png";


canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(200,100,150,100);

ctx.strokeStyle = "red";
ctx.strokeRect(200,300,150,100);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(100,50)
ctx.lineTo(150,70)
ctx.lineTo(200,20)
ctx.lineTo(50,50)
ctx.fill();

let x = 850;
let y = 300;
let width = 60;
let height = 100;

window.onload = () => {
    ctx.drawImage(background, 0,0,1280,720);
    ctx.drawImage(image, x,y,60,100);
    setInterval(() => {
        y *=1;
        x -=0.5;
        width++;
        height++;
        ctx.drawImage(background, 0,0,1280,720);
        ctx.drawImage(image, x,y,width,height);
        console.log(x)
    } ,100);
}

*/










/*
// []  - pole
// index - poradove cislo prvku pocita od 0
//            0  1
const foo = [5, 6]

// index        0          1        2       3
const names = ["radek", "tomas", "petr", "radim"]
names[3]="jan"
console.log(names[3]);
*/

/*const background = new Background();*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")


/*
// promenna - vymezene misto v pameti
// {} - objekt - promenna, ktera ma ruzne vlastnosti
// [] - array - pole - skupina vicero hodnot - soubor prvku
const zombie = {
    name: "Tomas",
    hp: 100,
    dmg: 6,
    drop: 15
}
console.log(zombie.dmg); //6
zombie.hp -= 50;
*/


//promenna pro ukladani vstupu z klavesnice
//Space: true
//Space: false
const keys = {};


//funkce ktera posloucha na nejakou akci (event)
document.addEventListener("keydown", (e) => {
    keys[e.code] = true; // Space: true

});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false; // Space: false

});

let mouseX;
let mouseY;


document.addEventListener("mousemove",(e)=>{
    const rect = canvas.getBoundingClientRect();
    mouseX= (e.clientX - rect.left)/(rect.right - rect.left) * canvas.width;
    mouseY= (e.clientY - rect.top)/(rect.bottom - rect.top) * canvas.height;
    console.log(mouseX);
    console.log(mouseY);
   
})






//herni smycka
const gameLoop = () => {
  // console.log(keys);
    //resizeCanvas
resizeCanvas();

    //clearCanvas
clearCanvas();

   //update
   update();
   
    //render
    render();

    //fps
    getFps();
    window.requestAnimationFrame(gameLoop);

}
const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
}
const clearCanvas = () => {
    //premaluje cele platno pozadim hry
 background.draw(ctx)
}
const update = () => {
    Zombie.zombies.map((zombie) => {
        zombie.update();
    });
}
const render = () => {
    Zombie.zombies.map((zombie) => {
        zombie.draw(ctx);
    });
    crosshair.draw(ctx,mouseX,mouseY);
}
const getFps = () => {}

//funkce pro nacitani dat
const loadData = async () => {
    //nacteme soubor s daty pro zombies
    //pokud v nejake funkci pouzivame await tak funkci musime oznacit slovem async
    const zombieFile= await fetch("./res/data/zombies.json")
    //prekonvertuje soubor na json
    const zombiesData = await zombieFile.json();
//nastavime tride Zombies zombiesData
Zombie.zombiesData = zombiesData;

};


//když se načte stranka, tak se provede funkce
window.onload = async () => {
  await loadData();
  Zombie.genZombies();

    //jakmile se stranka nacte, vyzadame si prvni snimek herni smycky
    window.requestAnimationFrame(gameLoop);
};