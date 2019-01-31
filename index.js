const buttonArray = document.querySelectorAll('button')

// buttonArray.forEach((button) => {
//     button.addEventListener('click', handleClick)
// })

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', handleClick)
}

function handleClick() {
    console.log('I got clicked!');

}