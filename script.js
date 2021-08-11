// ***** Beginning of the front page animation *****
const ButtonClick = document.querySelector('.Front')
const DivOne = document.querySelector('div:nth-of-type(1)')
const DivTwo = document.querySelector('div:nth-of-type(2)')
const DivThree = document.querySelector('div:nth-of-type(3)')
const DivFour = document.querySelector('div:nth-of-type(4)')
const FrontPage = document.querySelector('.FrontPage')

function animation() {
    ButtonClick.classList.add('BtnAnimation')
    DivOne.classList.add('DivAnimationOne')
    DivTwo.classList.add('DivAnimationTwo')
    DivThree.classList.add('DivAnimationThree')
    DivFour.classList.add('DivAnimationFour')
    FrontPage.classList.add('FrontPageAnimation')
}
ButtonClick.addEventListener('click', animation)
//  ***** End of the front page animation *****
// ******* Back to pront page ***********
const SpanClick = document.querySelector('span')
const BckFrontPage = document.querySelector('.FrontPage')

function animationTwo() {
    BckFrontPage.classList.add('AnimTrigger')
}
SpanClick.addEventListener('click', animationTwo)