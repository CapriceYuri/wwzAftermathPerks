const colB = document.querySelectorAll('.col-b')
let countB = 0;
const colC = document.querySelectorAll('.col-c')
let countC = 0;
const colD = document.querySelectorAll('.col-d')
let countD = 0;
const colF = document.querySelectorAll('.col-f')
let countF = 0;
const colG = document.querySelectorAll('.col-g')
let countG = 0;
const colH = document.querySelectorAll('.col-h')
let countH = 0;
const colJ = document.querySelectorAll('.col-j')
let countJ = 0;
const colK = document.querySelectorAll('.col-k')
let countK = 0;
const colL = document.querySelectorAll('.col-l')
let countL = 0;

let optionB = [...colB]
let optionC = [...colC]
let optionD = [...colD]
let optionF = [...colF]
let optionG = [...colG]
let optionH = [...colH]
let optionJ = [...colJ]
let optionK = [...colK]
let optionL = [...colL]

colB.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colB.length; i++) {
            colB[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})
colC.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colC.length; i++) {
            colC[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})
colD.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colD.length; i++) {
            colD[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})

colF.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colF.length; i++) {
            colF[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})
colG.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colG.length; i++) {
            colG[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})

colH.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colH.length; i++) {
            colH[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})

colJ.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colJ.length; i++) {
            colJ[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})

colK.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colK.length; i++) {
            colK[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})

colL.forEach(option => {
    option.addEventListener('click', () => {
        for (let i = 0; i < colL.length; i++) {
            colL[i].classList.remove('pick');
        }
        option.classList.add('pick')
    })
})