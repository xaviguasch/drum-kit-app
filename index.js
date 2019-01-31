const drumButtons = document.querySelectorAll('.drum')

// drumButtons.forEach((button) => {
//     button.addEventListener('click', handleClick)
// })

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', handleClick)
}

function handleClick() {
    console.log('I got clicked!');
}