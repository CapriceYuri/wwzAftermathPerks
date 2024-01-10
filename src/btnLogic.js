const gsPerk = document.querySelector('#c1');
const hrPerk = document.querySelector('#c2');
const medPerk = document.querySelector('#c3');
const fixPerk = document.querySelector('#c4');
const slashPerk = document.querySelector('#c5');
const exPerk = document.querySelector('#c6');
const dmPerk = document.querySelector('#c7');
const vPerk = document.querySelector('#c8');

const gsSection = document.querySelector('#gs')
const hrSection = document.querySelector('#hr')
const medSection = document.querySelector('#med')
const fixSection = document.querySelector('#fix')
const slashSection = document.querySelector('#slash')
const exSection = document.querySelector('#ex')
const dmSection = document.querySelector('#dm')
const vSection = document.querySelector('#v')

const btn8 = document.querySelectorAll('.class8');
const section8 = document.querySelectorAll('.section8')

gsPerk.addEventListener('click', () => {
    gsPerk.checked = true;
    hrPerk.checked = false;
    medPerk.checked = false;
    fixPerk.checked = false;
    slashPerk.checked = false;
    exPerk.checked = false;
    dmPerk.checked = false;
    vPerk.checked = false;
    gsSection.style.display = 'block';
    hrSection.style.display = 'none';
    medSection.style.display = 'none';
    fixSection.style.display = 'none';
    slashSection.style.display = 'none';
    exSection.style.display = 'none';
    dmSection.style.display = 'none';
    vSection.style.display = 'none';
})

hrPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = true;
    medPerk.checked = false;
    fixPerk.checked = false;
    slashPerk.checked = false;
    exPerk.checked = false;
    dmPerk.checked = false;
    vPerk.checked = false;
    gsSection.style.display = 'none';
    hrSection.style.display = 'block';
    medSection.style.display = 'none';
    fixSection.style.display = 'none';
    slashSection.style.display = 'none';
    exSection.style.display = 'none';
    dmSection.style.display = 'none';
    vSection.style.display = 'none';
})

medPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = false;
    medPerk.checked = true;
    fixPerk.checked = false;
    slashPerk.checked = false;
    exPerk.checked = false;
    dmPerk.checked = false;
    vPerk.checked = false;
    gsSection.style.display = 'none';
    hrSection.style.display = 'none';
    medSection.style.display = 'block';
    fixSection.style.display = 'none';
    slashSection.style.display = 'none';
    exSection.style.display = 'none';
    dmSection.style.display = 'none';
    vSection.style.display = 'none';
})

fixPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = false;
    medPerk.checked = false;
    fixPerk.checked = true;
    slashPerk.checked = false;
    exPerk.checked = false;
    dmPerk.checked = false;
    vPerk.checked = false;
    gsSection.style.display = 'none';
    hrSection.style.display = 'none';
    medSection.style.display = 'none';
    fixSection.style.display = 'block';
    slashSection.style.display = 'none';
    exSection.style.display = 'none';
    dmSection.style.display = 'none';
    vSection.style.display = 'none';
})

slashPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = false;
    medPerk.checked = false;
    fixPerk.checked = false;
    slashPerk.checked = true;
    exPerk.checked = false;
    dmPerk.checked = false;
    vPerk.checked = false;
    gsSection.style.display = 'none';
    hrSection.style.display = 'none';
    medSection.style.display = 'none';
    fixSection.style.display = 'none';
    slashSection.style.display = 'block';
    exSection.style.display = 'none';
    dmSection.style.display = 'none';
    vSection.style.display = 'none';
})

exPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = false;
    medPerk.checked = false;
    fixPerk.checked = false;
    slashPerk.checked = false;
    exPerk.checked = true;
    dmPerk.checked = false;
    vPerk.checked = false;
    gsSection.style.display = 'none';
    hrSection.style.display = 'none';
    medSection.style.display = 'none';
    fixSection.style.display = 'none';
    slashSection.style.display = 'none';
    exSection.style.display = 'block';
    dmSection.style.display = 'none';
    vSection.style.display = 'none';
})

dmPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = false;
    medPerk.checked = false;
    fixPerk.checked = false;
    slashPerk.checked = false;
    exPerk.checked = false;
    dmPerk.checked = true;
    vPerk.checked = false;
    gsSection.style.display = 'none';
    hrSection.style.display = 'none';
    medSection.style.display = 'none';
    fixSection.style.display = 'none';
    slashSection.style.display = 'none';
    exSection.style.display = 'none';
    dmSection.style.display = 'block';
    vSection.style.display = 'none';
})

vPerk.addEventListener('click', () => {
    gsPerk.checked = false;
    hrPerk.checked = false;
    medPerk.checked = false;
    fixPerk.checked = false;
    slashPerk.checked = false;
    exPerk.checked = false;
    dmPerk.checked = false;
    vPerk.checked = true;
    gsSection.style.display = 'none';
    hrSection.style.display = 'none';
    medSection.style.display = 'none';
    fixSection.style.display = 'none';
    slashSection.style.display = 'none';
    exSection.style.display = 'none';
    dmSection.style.display = 'none';
    vSection.style.display = 'block';
})

const adminColor = document.querySelector('.admin-color');



function changeColor() {
    let colorR = Math.ceil(Math.random() * 255)
    let colorG = Math.ceil(Math.random() * 255)
    let colorB = Math.ceil(Math.random() * 255)
    let color = `rgb(${colorR},${colorG},${colorB})`
    adminColor.style.color = color;
}

setInterval(changeColor, 500)
