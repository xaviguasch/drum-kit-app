const drumButtons = document.querySelectorAll('.drum')

// drumButtons.forEach((button) => {
//     button.addEventListener('click', handleClick)
// })

const audio = new Audio('./sounds/tom-1.mp3')

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function () {
        audio.play()
        console.log('I got clicked!')

    })
}