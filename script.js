const canvas = document.getElementById("canvas")
const c = canvas.getContext(`2d`)
canvas.height = innerHeight
canvas.width = innerWidth
const gravity = 0.4 



let tileImage = new Image()
tileImage.src="./pics/tileexample.png"

let tallImage = new Image()
tallImage.src="./pics/tilebackup.png"

let wizardImage = new Image()
wizardImage.src="./pics/steven2.png"

class Wizard{
    constructor(){
        this.axis = {
            x:50,
            y:200
        }
        this.width =40
        this.height = 40

        this.velocity = {
            x:0,
            y:0
        }
        this.image = wizardImage
    }

    draw(){
        c.drawImage(wizardImage,this.axis.x,this.axis.y,this.width,this.height)
    }

    playerChanges(){
        this.axis.y += this.velocity.y
        this.axis.x += this.velocity.x
        this.draw()
        if(this.axis.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity

    }
}


class Platform{
    constructor({x,y}){
        this.axis = {
            x,
            y
        }
        this.width = 500,
        this.height = 30
        this.image = tileImage
    }
    draw(){
        
        c.drawImage(tileImage,this.axis.x,this.axis.y,this.width,this.height)
    }
}

const platforms =[
    new Platform({x:0,y:525,tileImage}),
    new Platform({x:400,y:525, tileImage}),
new Platform({x:800,y:325,tallImage})]


const player = new Wizard();
const movement = {
    right: {
        pressed:false
    },
    left:{
        pressed:false
    }
} 


fallAnimation = () => {
    requestAnimationFrame(fallAnimation)
    c.clearRect(0,0,canvas.width,canvas.height)
    platforms.forEach(platform =>{
        platform.draw()
    })
    player.playerChanges()


let scroll = 0


    if(movement.right.pressed && player.axis.x <500){
        player.velocity.x = 4
    }else if((movement.left.pressed && player.axis.x > 10)||(movement.left.pressed && player.axis.x < 0)){
        player.velocity.x = -4
    }
    else
    player.velocity.x = 0

    if(movement.right.pressed){
        scroll += 4
        platforms.forEach(platform =>{
        platform.axis.x -= 4
        })}else if (movement.left.pressed && scroll > 0){
        scroll = -4
        platforms.forEach(platform =>{
        platform.axis.x += 4
    }
    )}
    

    if(scroll > 2000){
        console.log(`you win`)
    }
  
    


    //how cell lands on platform. Not my work
    platforms.forEach(platform =>{
        if(player.axis.y + player.height <= platform.axis.y && player.axis.y + player.height + player.velocity.y >= platform.axis.y && player.axis.x + player.width >= platform.axis.x && player.axis.x <= platform.axis.x + platform.width){
    player.velocity.y = 0
}


    })}

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
            player.velocity.y -= 6
        break;
        case 83:
            console.log(`down`)
        break;
        case 68:
            console.log(`right`)
            player.velocity.x = 0
            movement.right.pressed = true
            
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