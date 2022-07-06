
const canvas = document.getElementById("canvas")

const c = canvas.getContext(`2d`)
canvas.height = innerHeight
canvas.width = innerWidth


class Player{
    constructor(){
        this.position = {
            x:300,
            y:160
        }
        this.width = 50
        this.height = 50
    }

    draw(){
        c.fillStyle = 'green'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

const player = new Player();

player.draw()

//Player

//this.position = {
//    x:
//    y:
//}


//this.width
//this.height

//Gravity

//velocity
//implementing x and y axis to velocity and positioning


//Player Movement
//WAD movement