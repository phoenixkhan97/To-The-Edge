
const canvas = document.getElementById("canvas")

const c = canvas.getContext(`2d`)
canvas.height = innerHeight
canvas.width = innerWidth
const gravity = 0.5

// preload = () =>{
// this.load.image(`ground`, link.png)
// }



class Wizard{
    constructor(){
        this.axis = {
            x:50,
            y:200
        }
        this.width =40
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

    playerChanges(){
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
const movement = {
    right: {
        pressed:false
    },
    left:{
        pressed:false
    }
}




class Platform{
    constructor(){
        this.axis = {
            x:200,
            y:550
        }
        this.width = 100,
        this.height = 50
    }
    draw(){
        c.fillStyle = `blue`
        c.fillRect(this.axis.x, this.axis.y, this.width, this.height)
    }
}

const platform = new Platform()
platform.draw();



fallAnimation = () => {
    requestAnimationFrame(fallAnimation)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.playerChanges()
    platform.draw()

    if(movement.right.pressed){
        player.velocity.x = 4
    }else if(movement.left.pressed){
        player.velocity.x = -4
    }
    else
    player.velocity.x = 0


    //how cell lands on platform. Not my work

        if(player.axis.y + player.height <= platform.axis.y && player.axis.y + player.height + player.velocity.y >= platform.axis.y && player.axis.x + player.width >= platform.axis.x && player.axis.x <= platform.axis.x + platform.width){
    player.velocity.y = 0
}
}
    fallAnimation()




addEventListener(`keydown`,({ keyCode }) =>{
    switch(keyCode){
        case 65:
            console.log(`left`)
            player.velocity.x = -4
            movement.left.pressed = true
        break;
        case 87:
            console.log(`up`)
            player.velocity.y -= 15
        break;
        case 83:
            console.log(`down`)
        break;
        case 68:
            console.log(`right`)
            movement.right.pressed = true
            player.velocity.x = 4
        break;
    }
})

addEventListener(`keyup`,({ keyCode }) =>{
    switch(keyCode){
        case 65:
            console.log(`left`)
            player.velocity.x = 0
            movement.left.pressed = false
        break;
        case 87:
            console.log(`up`)
            player.velocity.y -= 2
        break;
        case 83:
            console.log(`down`)
        break;
        case 68:
            console.log(`right`)
            player.velocity.x = 0
            movement.right.pressed = false
        break;
    }
})



//50,105,116,127,139 this is monitoring my movement
//addEventListeners help with moving character using WAD
//88-94 making sure theres movement on both sides at the same velocity