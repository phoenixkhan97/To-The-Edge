

const canvas = document.getElementById("canvas")
const restartGame = document.getElementById("restart")
const c = canvas.getContext(`2d`)
import wizard from '/pics/steven2.png'
canvas.height = 600
canvas.width = 1024
const gravity = 0.4

// preload = () =>{
// this.load.image(`ground`, link.png)
// }



class Wizard{
    constructor(){
        this.axis = {
            x:50,
            y:200
        }
        this.width = 40
        this.height = 40

        this.velocity = {
            x:0,
            y:0
        }
        this.image = createImage(wizard)
       
    }

    draw(){
        c.drawImage(this.image, this.axis.x, this.axis.y)
        
    }

    playerChanges(){
        this.axis.y += this.velocity.y
        this.axis.x += this.velocity.x
        this.draw()
        if(this.axis.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity

    
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
    constructor({x,y}){
        this.axis = {
            x,
            y
        }
        //this.image = image
        this.width = 500,//image.width
        this.height = 50//image.height
    }
    draw(){
        c.fillStyle = `black`
        c.fillRect(this.axis.x, this.axis.y, this.width, this.height)
    }
}

const platforms =[
    new Platform({x:0,y:550}),
    new Platform({x:500,y:550}),
    new Platform({x:1600,y:550}),
    new Platform({x:1500,y:550})]
    


fallAnimation = () => {
    requestAnimationFrame(fallAnimation)
    c.clearRect(0,0,canvas.width,canvas.height)
    platforms.forEach(platform =>{
        platform.draw()
    })
    player.playerChanges()


    if(movement.right.pressed && player.axis.x <500){
        player.velocity.x = 5
    }else if(movement.left.pressed && player.axis.x > 50){
        player.velocity.x = -5
    }
    else
    player.velocity.x = 0

    if(movement.right.pressed){
        scroll += 5
        platforms.forEach(platform =>{
        platform.axis.x -= 5
        })}else if (movement.left.pressed){
        scroll = -4
        platforms.forEach(platform =>{
        platform.axis.x += 5
    }
    )}

    if(player.axis.x >= 2000){
        console.log(`you win`)}
    
        if(player.axis.y > canvas.height){
            console.log(`you lose`)
        }
    
    //how cell lands on platform. Not my work. Credit in md
    platforms.forEach(platform =>{
        if(player.axis.y + player.height <= platform.axis.y && player.axis.y + player.height + player.velocity.y >= platform.axis.y && player.axis.x + player.width >= platform.axis.x && player.axis.x <= platform.axis.x + platform.width){
    player.velocity.y = 0
}
    })
}

    
    fallAnimation()




addEventListener(`keydown`,({ keyCode }) =>{
    switch(keyCode){
        case 65:
            console.log(`left`)
            player.velocity.x = 0
            movement.left.pressed = true
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
            movement.right.pressed = true
            player.velocity.x = 0
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