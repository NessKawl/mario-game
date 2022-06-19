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
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`



        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` 
        mario.src = './images/game-over.png'

        mario.style.width = '80px'
        mario.style.marginLeft = '45px'

        clearInterval(loop);
    }

    const coinPosition = coin.offsetLeft
    const score = document.getElementById('score')

    console.log('coinPosition')

    if (coinPosition <= 120) {
        console.log('coletou')
    } 
 
}, 10)

document.addEventListener('keydown', jump);