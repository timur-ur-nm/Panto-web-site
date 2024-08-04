// drop down menu 
const dropdownMenu = document.getElementById('dropdownMenu')
const dropdownBtn = document.getElementById('dropdownBtn')
const dropdownMenuItems = document.querySelectorAll('#dropdownMenu li')
let dropdownMenuStyles = getComputedStyle(dropdownMenu)

dropdownBtn.addEventListener('click',()=>{
    if (dropdownMenuStyles.display == 'none'){
        dropdownMenu.style.display = 'block'
    }else{
        dropdownMenu.style.display = 'none'
    }
})


// number of purchases (the Icon)
const numberOfPurchases = document.getElementById('numberOfPurchases')
let count = 0

dropdownBtn.addEventListener('click',()=>{
    // console.log(numberOfPurchases.innerHTML++)
})


// tumbler
const tumblerItems = document.querySelectorAll('.switchProd button')

let state = 0;

// initsialization first element
tumblerItems[state].classList.add('switchOn')

// switch clasess function
function updateSwitchOnClases(index) {
    tumblerItems.forEach((item, i) => item.classList.toggle('switchOn', i === index));
}

tumblerItems.forEach((e,index)=>{
    e.addEventListener('click',()=>{
        updateSwitchOnClases(index)
    })
})




// slider

import {data} from './data.js'

const chairs = document.getElementById('chairs')

data.forEach((e) => {
    
    // creating chaitItem elements
    var chairItem = document.createElement('div')
    chairItem.id = 'chairItem'
    
    const img = document.createElement('img')
    
    const chairsTitle = document.createElement('div')
    const chairsTitleH3 =  document.createElement('h3')
    const chairsTitleH2 = document.createElement('h2')
    const chairsTitleSpan = document.createElement('span')
    
    const chairsSubtitle = document.createElement('div')
    const chairsSubtitleSpan = document.createElement('span')
    const chairsSubtitleImg = document.createElement('img')
    
    chairsTitle.classList.add('chairs_title')
    chairsSubtitle.classList.add('chairs_subtitle')
    
    // adding infotmation to elements from data.js
    img.src = `./images/slider/${e.img}`

    chairsTitleH3.textContent = e.title
    chairsTitleH2.textContent = e.subtitle
    chairsTitleSpan.textContent = e.rating
    
    
    chairsSubtitleSpan.textContent = `$ ${e.price}`
    chairsSubtitleImg.src = `./images/icons/${e.btn}`
    
    
    chairsTitle.append(chairsTitleH3,chairsTitleH2,chairsTitleSpan)
    chairsSubtitle.append(chairsSubtitleSpan,chairsSubtitleImg)
    chairItem.append(img,chairsTitle,chairsSubtitle)
    chairs.appendChild(chairItem)
});



// slider 

import {testimonals} from './data.js'


const feedback = document.getElementById('feedback')
testimonals.forEach(e=>{

    // creating a feedbackItem container
    const feedbackItem = document.createElement('div')
    feedbackItem.classList.add('feedbackItem')

    // creaing a feedbackItemContent container
    const feedbackItemContent = document.createElement('feedbackItem_content')
    feedbackItemContent.classList.add('feedbackItem_content')

    const img = document.createElement('img')
    img.src = `./images/icons/${e.iconImg}`

    const h1 = document.createElement('h1')
    h1.textContent = e.title

    const h3 = document.createElement('h3')
    h3.textContent = e.subtitle

    const p = document.createElement('p')
    p.textContent = e.paragraph

    const span = document.createElement('span')
    span.textContent = e.rating


    feedbackItemContent.append(img,h1,h3,p,span)
    feedbackItem.appendChild(feedbackItemContent)
    feedback.appendChild(feedbackItem)
})




// adding functionalaty to left-right arrows
let offset = 0

// Обработчик клика для левой стрелки
leftArrow.addEventListener('click', () => {
    offset -= 339 
    if (offset <= 0) {
        offset = 0
    }
    chairs.style.right = offset + 'px'
});

// Обработчик клика для правой стрелки
rightArrow.addEventListener('click', () => {
    offset += 339 
    if (offset > 1017) {
        offset = 0
    }
    chairs.style.right = offset + 'px'
});


// ----------------------------------------------------------


let offsetTestim = 0

testimLeftArrow.addEventListener('click', () => {
    offsetTestim -= 339 
    if (offsetTestim <= 0) {
        offsetTestim = 0
    }
    feedback.style.right = offsetTestim + 'px'
});

testimRightArrow.addEventListener('click', () => {
    offsetTestim += 455 
    if (offsetTestim > 1365) {
        offsetTestim = 0
    }
    feedback.style.right = offsetTestim + 'px'
});


