// ***** Beginning of the front page animation *****
const ButtonClick = document.querySelector('button')
const DivOne = document.querySelector('div:nth-of-type(1)')
const DivTwo = document.querySelector('div:nth-of-type(2)')
const DivThree = document.querySelector('div:nth-of-type(3)')
const DivFour = document.querySelector('div:nth-of-type(4)')

function animation() {
    ButtonClick.classList.add('BtnAnimation')
    DivOne.classList.add('DivAnimationOne')
    DivTwo.classList.add('DivAnimationTwo')
    DivThree.classList.add('DivAnimationThree')
    DivFour.classList.add('DivAnimationFour')
}
ButtonClick.addEventListener('click', animation)
//  ***** End of the front page animation *****