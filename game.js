const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const coin = document.querySelector('.coin')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump') 
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')    
    const coinPosition = coin.offsetLeft
    const points = document.getElementById('points')
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` 
        mario.src = './images/game-over.png'

        mario.style.width = '80px'
        mario.style.marginLeft = '45px'

        coin.style.left = `${coinPosition}px`

        clearInterval(loop);
    }   

     if (coinPosition <= 120) {
         var score = 0;
        ++score
         points.innerText = `Score: ${score}`
         console.log('coletou')
    } 

}, 10)

document.addEventListener('keydown', jump);
