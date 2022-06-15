
const menuBtn = document.getElementById('navtoggle');
const nav = document.getElementById('navigation');
const xNav = document.getElementsByClassName('btn-close')[0];
const navSocials = document.getElementsByClassName('fix-bottom')[0];
const icon = document.getElementsByClassName('icon');

let modShown = false;
const imgModal = document.getElementById('imgModal');
const img = document.getElementById('modImg');
const xImg = document.getElementById('closeImage');

menuBtn.onclick = () => { openNav() }
xNav.onclick = () => { closeNav() }

const openNav = () => {
    nav.style.padding = "40px";
    nav.style.width = "100%";
    menuBtn.className = "d-none";
    navSocials.style.display = 'block';
}

const closeNav = () => {
    nav.style.width = "0";
    nav.style.padding = "0";
    menuBtn.className = "block";
    navSocials.style.display = 'none';
}

for (let index of icon) {
    let clickedImg = index.getElementsByTagName('img')[0];
    
    index.onclick = function() {
        let imgSrc = clickedImg.getAttribute("src");
        let imgAlt = clickedImg.getAttribute("alt");

        imgModal.style.display = "block";
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

AOS.init({
    duration: 1500,
})

//icon.forEach(element => {
//});
