
const canvas = document.getElementById("canvas")

const c = canvas.getContext(`2d`)
canvas.height = innerHeight
canvas.width = innerWidth
const gravity = 0.5

class Wizard{
    constructor(){
        this.axis = {
            x:300,
            y:160
        }
        this.width = 50
        this.height = 50

        this.velocity = {
            x:0,
            y:0
        }
    }

    draw(){
        c.fillStyle = 'green'
        c.fillRect(this.axis.x,this.axis.y,this.width,this.height)
    }

    playerChange(){
        this.axis.y += this.velocity.y
        this.draw()
        if(this.axis.y + this.height + this.velocity.y <= canvas.height)

        this.velocity.y += gravity
        else
        this.velocity.y = 0
    }
}

const player = new Wizard();

player.playerChange()



fallAnimation = () => {
    requestAnimationFrame(fallAnimation)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.playerChange()
}

fallAnimation()
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