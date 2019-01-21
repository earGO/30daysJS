
let sounds={
    boom: '../_courseFiles/'
}

window.addEventListener('keydown',(evt => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if(!audio) return; //break the execution of a function
    audio.currentTime = 0; //restarts an audio
    audio.play();
    key.classList.add('playing');
}))

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend',evt => {
        key.classList.remove('playing')
    })
})