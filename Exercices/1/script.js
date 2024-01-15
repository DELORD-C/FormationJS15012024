let hover = document.getElementsByClassName('fill')[0];
hover.addEventListener('mouseenter',() => {
    hover.classList.add('filled');
})
hover.addEventListener('mouseleave',() => {
    hover.classList.remove('filled');
})


// function mouseEnter (event) {
//     event.target.classList.add('filled');
// }

// function mouseLeave () {
//     event.target.classList.remove('filled');
// }