
const menuBtn = document.getElementById('navicon');
const nav = document.getElementById('navigation');
const xNav = document.getElementsByClassName('btn-close')[0];
const icon = document.getElementsByClassName('icon');

let modShown = false;
const imgModal = document.getElementById('imgModal');
const img = document.getElementById('modImg');
const caption = document.getElementById('caption');
const xImg = document.getElementById('closeImage');

menuBtn.onclick = () => { openNav() }
xNav.onclick = () => { closeNav() }

const openNav = () => {
    nav.style.padding = "20px";
    nav.style.width = "30%";
    menuBtn.className = "d-none";
}

const closeNav = () => {
    nav.style.width = "0";
    nav.style.padding = "0";
    menuBtn.className = "block";
}

for (let index of icon) {
    let clickedImg = index.getElementsByTagName('img')[0];
    
    index.onclick = function() {
        let imgSrc = clickedImg.getAttribute("src");
        let imgAlt = clickedImg.getAttribute("alt");

        imgModal.style.display = "flex";
        img.src = imgSrc;
        img.alt = imgAlt;
        modShown = true;


    }
}

xImg.onclick = () => {
    imgModal.style.display = "none";
    modShown = false;
}

window.onclick = (e) => {
    if (e.target === imgModal) {
        imgModal.style.display = 'none';
    }
}

//icon.forEach(element => {
//});
