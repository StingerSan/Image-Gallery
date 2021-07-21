const buttonClick = document.querySelector('.ButtonAnimation')
const DivMove = document.querySelector('.DivAnimation')

function animation() {
    buttonClick.classList.add('.ButtonAnimation')
}
buttonClick.addEventListener('click', animation, false)