//                   loader            //
const loader = document.querySelector('.loader-div');
window.addEventListener('load', () => {
    loader.classList.add('hidden')
})




//                  product          //


let containerProductLapTop = document.querySelector('#containerProductLapTop')
let containerProductRefrigerator = document.querySelector('#containerProductRefrigerator')
let containerProductCleaner = document.querySelector('#containerProductCleaner')
const yes = 'icofont-check-alt'
const no = 'icofont-error'
let listProduct = [
    {
        id: 1,
        name: 'لپ تاپ  1 ',
        price: 10,
        srcImg: 'productImg/kala1.jpg',
        details: 'Ram 16 Cpu i7  Gpu 2G',
        grouping: 'LapTop',
        existence: yes,
        discount: '5%'
    },
    {
        id: 2,
        name: 'لپ تاپ  2 ',
        price: 15,
        srcImg: 'productImg/kala2.jfif',
        details: 'Ram 8 Cpu i5  Gpu 2G',
        grouping: 'LapTop',
        existence: yes,
        discount: '5%'
    },
    {
        id: 3,
        name: 'لپ تاپ  3 ',
        price: 20,
        srcImg: 'productImg/kala3.jfif',
        details: 'Ram 4 Cpu i3  Gpu 2G',
        grouping: 'LapTop',
        existence: no,
        discount: '0%'
    },
    {
        id: 4,
        name: 'لپ تاپ  4 ',
        price: 25,
        srcImg: 'productImg/kala1.jpg',
        details: 'Ram 2 Cpu i2  Gpu 2G ',
        grouping: 'LapTop',
        existence: yes,
        discount: '5%'
    },
    {
        id: 5,
        name: 'لپ تاپ  5 ',
        price: 30,
        srcImg: 'productImg/kala2.jfif',
        details: 'Ram 4 Cpu i5  Gpu 2G',
        grouping: 'LapTop',
        existence: no,
        discount: '0%'
    },
    {
        id: 6,
        name: 'لپ تاپ  6 ',
        price: 40,
        srcImg: 'productImg/kala3.jfif',
        details: 'Ram 16 Cpu i9  Gpu 2G',
        grouping: 'LapTop',
        existence: yes,
        discount: '5%'
    },
    {
        id: 7,
        name: 'لپ تاپ  7 ',
        price: 45,
        srcImg: 'productImg/kala1.jpg',
        details: 'Ram 8 Cpu i11  Gpu 2G ',
        grouping: 'LapTop',
        existence: yes,
        discount: '5%'
    },
    {
        id: 8,
        name: 'لپ تاپ  8 ',
        price: 50,
        srcImg: 'productImg/kala2.jfif',
        details: 'Ram 4 Cpu i7  Gpu 2G',
        grouping: 'LapTop',
        existence: no,
        discount: '0%'
    },
    // {id :9   ,  name : 'لپ تاپ  9 '  , price : 55 , srcImg :  'productImg/kala3.jfif'  , details :    'Ram 4 Cpu i5  Gpu 2G' , grouping : 'LapTop'   ,existence : yes ,  discount : '5%' },
    // {id :10   ,  name :'لپ تاپ  10 '  , price :  60, srcImg :  'productImg/kala3.jfif'   ,  details :    'Ram 4 Cpu i5  Gpu 2G' ,grouping : 'LapTop'   ,existence :yes  ,  discount : '5%' },
    {
        id: 11,
        name: 'یخچال 1',
        price: 70,
        srcImg: 'productImg/kala4.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: yes,
        discount: '5%'
    },
    {
        id: 12,
        name: 'یخچال 2',
        price: 75,
        srcImg: 'productImg/kala5.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: yes,
        discount: '5%'
    },
    {
        id: 13,
        name: 'یخچال 3',
        price: 85,
        srcImg: 'productImg/kala6.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: yes,
        discount: '5%'
    },
    {
        id: 14,
        name: 'یخچال 4',
        price: 90,
        srcImg: 'productImg/kala4.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: no,
        discount: '5%'
    },
    {
        id: 15,
        name: 'یخچال 5',
        price: 95,
        srcImg: 'productImg/kala5.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: yes,
        discount: '5%'
    },
    {
        id: 16,
        name: 'یخچال 6',
        price: 100,
        srcImg: 'productImg/kala6.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: yes,
        discount: '5%'
    },
    {
        id: 17,
        name: 'یخچال 7',
        price: 110,
        srcImg: 'productImg/kala4.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: no,
        discount: '5%'
    },
    {
        id: 18,
        name: 'یخچال 8',
        price: 115,
        srcImg: 'productImg/kala5.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'refrigerator',
        existence: no,
        discount: '5%'
    },
    // {id :19   ,  name :'یخچال 9'   , price :  120, srcImg :   'productImg/kala6.jfif'  , details :    'محصول خوب و قوی ' , grouping :  'refrigerator'  ,existence :true  ,  discount : '5%' },
    // {id :20   ,  name :'یخچال 10'   , price :  125, srcImg :  'productImg/kala6.jfif'  , details :    'محصول خوب و قوی ' , grouping : 'refrigerator'   ,existence :true  ,  discount : '5%' },
    {
        id: 21,
        name: 'جارو برقی 1',
        price: 15,
        srcImg: 'productImg/kala7.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: no,
        discount: '5%'
    },
    {
        id: 22,
        name: 'جارو برقی 2',
        price: 15,
        srcImg: 'productImg/kala8.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: yes,
        discount: '5%'
    },
    {
        id: 23,
        name: 'جارو برقی 3',
        price: 15,
        srcImg: 'productImg/kala9.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: yes,
        discount: '5%'
    },
    {
        id: 24,
        name: 'جارو برقی 4',
        price: 15,
        srcImg: 'productImg/kala7.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: yes,
        discount: '5%'
    },
    {
        id: 25,
        name: 'جارو برقی 5',
        price: 15,
        srcImg: 'productImg/kala8.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: no,
        discount: '5%'
    },
    {
        id: 26,
        name: 'جارو برقی 6',
        price: 15,
        srcImg: 'productImg/kala9.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: yes,
        discount: '5%'
    },
    {
        id: 27,
        name: 'جارو برقی 7',
        price: 15,
        srcImg: 'productImg/kala7.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: yes,
        discount: '5%'
    },
    {
        id: 28,
        name: 'جارو برقی 8',
        price: 15,
        srcImg: 'productImg/kala8.jfif',
        details: 'محصول خوب و قوی ',
        grouping: 'cleaner',
        existence: yes,
        discount: '5%'
    },
    // {id :29   ,  name :  'جارو برقی 9' , price : 15 , srcImg : 'productImg/kala9.jfif'   , details :    'محصول خوب و قوی ' , grouping : 'cleaner'   ,existence :yes  ,  discount : '5%' },
    // {id :30   ,  name :  'جارو برقی 10' , price :15  , srcImg : 'productImg/kala9.jfif'   , details :    'محصول خوب و قوی ' , grouping :'cleaner'    ,existence : yes ,  discount : '5%' },
]
let productLapTop = listProduct.filter(function (product) {
    return product.grouping === "LapTop"
})
productLapTop.forEach(function (laptop) {
    templateProduct(containerProductLapTop, laptop)
})
let productRefrigerator  = listProduct.filter(function (product){
    return product.grouping === 'refrigerator'
})
let productCleaner  = listProduct.filter(function (product){
    return product.grouping === 'cleaner'
})
productRefrigerator.forEach(function (refrigerator){
    templateProduct(containerProductRefrigerator , refrigerator)
})
productCleaner.forEach(function (cleaner){
    templateProduct(containerProductCleaner , cleaner)
})
function templateProduct(container, product) {
    container.insertAdjacentHTML('beforeend', '            <div class="product">\n' +
        '                <div class="existence-discount">\n' +
        '                    <div class="existence"><span><i class="' + product.existence + '"></i></span></div>\n' +
        '                    <div class="discount"><span>' + product.discount + '</span></div>\n' +
        '                    <div class="like"><span><i class="icofont-heart"></i></span></div>\n' +
        '                </div>\n' +
        '                <div class="img-price">\n' +
        '                    <div class="img">\n' +
        '                        <img src="' + product.srcImg + '" alt="laptop">\n' +
        '                    </div>\n' +
        '                    <div class="details"><span>' + product.details + '</span></div>\n' +
        '                    <div class="price">\n' +
        '                       <h3>' + product.price + 'میلیون</h3><h3>' + product.name + '</h3>\n' +
        '                    </div>\n' +
        '                    <div class="btn">\n' +
        '                        <button class="btn-details" onclick="informationProduct(' + product.id + ')">مشخصات</button>\n' +
        '                        <button class="btn-addCart" onclick="addCartHandler()" >افزودن به سبد خرید</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>')

}

function informationProduct(productId) {
    location.href = 'productInfo.html?id=' + productId + ''
}


//             modal                      //

modal = document.querySelector('.modal-parent')
divContainer = document.querySelector('#container')
btnClosedModal = document.querySelector('.X')
body = document.querySelector('body')

function addCartHandler() {
    modal.style.display = 'block'
    divContainer.style.filter = 'blur(10px)'
}

function btnClosed() {
    modal.style.display = 'none'
    divContainer.style.filter = 'blur(0)'
}

function btnBodyClos(e) {
    if (e.key === 'Escape')
        modal.style.display = 'none'
    divContainer.style.filter = 'blur(0)'
}

btnClosedModal.addEventListener('click', btnClosed)
body.addEventListener('keyup', btnBodyClos)