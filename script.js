
const canvas = document.getElementById("canvas")

const c = canvas.getContext(`2d`)
canvas.height = innerHeight
canvas.width = innerWidth
const gravity = 0.5

class Wizard{
    constructor(){
        this.axis = {
            x:200,
            y:200
        }
        this.width = 50
        this.height = 60

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
        this.axis.x += this.velocity.x
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



addEventListener(`keydown`,({ keyCode }) =>{
    switch(keyCode){
        case 65:
            console.log(`left`)
            player.velocity.x = -4
        break;
        case 87:
            console.log(`up`)
            player.velocity.y -= 10
        break;
        case 83:
            console.log(`down`)
        break;
        case 68:
            console.log(`right`)
            player.velocity.x = 4
        break;
    }
})

addEventListener(`keyup`,({ keyCode }) =>{
    switch(keyCode){
        case 65:
            console.log(`left`)
            player.velocity.x = 0
        break;
        case 87:
            console.log(`up`)
            player.velocity.y -= 1
        break;
        case 83:
            console.log(`down`)
        break;
        case 68:
            console.log(`right`)
            player.velocity.x = 0
        break;
    }
})
