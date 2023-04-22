const $ = document
//                slider            //
const imgTagSlider = $.querySelector('.imgSlider')
const btnRight = $.querySelector('.icofont-curved-double-right')
const btnLeft = $.querySelector('.icofont-curved-double-left')
let imgSrcArray = ['image/1.jpg', 'image/2.png', 'image/3.jpg']
let count = 0
let circle = $.querySelectorAll('.circle')
circle[0].classList.add('active')

function preImgSlider() {
    circle[count].classList.remove('active')
    count++
    imgTagSlider.src = imgSrcArray[count]
    if (count > imgSrcArray.length - 1) {
        count = 0
        imgTagSlider.src = imgSrcArray[count]
        circle[count].classList.add('active')
    }
    circle[count].classList.add('active')
}

function nextImgSlider() {
    circle[count].classList.remove('active')
    if (count === 0) {
        count = imgSrcArray.length
        imgTagSlider.src = imgSrcArray[count]
    }
    count--
    circle[count].classList.add('active')
    console.log(count)
    imgTagSlider.src = imgSrcArray[count]
}

// setInterval(preImgSlider, 5000)
btnRight.addEventListener('click', nextImgSlider)
btnLeft.addEventListener('click', preImgSlider)

