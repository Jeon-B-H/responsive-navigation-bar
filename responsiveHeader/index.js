// show navigator element
const naviContents = document.querySelector('#navi-medium ul');
const socialMediaIcons = document.querySelector('#navi-right > ul');
const responsiveMenu = document.querySelector('#navi-right span');
const sideBarIcon = document.querySelector('#navi-right > span');
const sideBarMenu = document.querySelector('#navi-contents');
const width = window.innerWidth;
const HIDDEN = 'hidden';

if(width <= 620){
    naviContents.classList.add(HIDDEN);
    socialMediaIcons.classList.add(HIDDEN);
    responsiveMenu.classList.remove(HIDDEN);
}else {
    naviContents.classList.remove(HIDDEN);
    socialMediaIcons.classList.remove(HIDDEN);
    responsiveMenu.classList.add(HIDDEN);
}

// addEventListener of window
window.addEventListener('resize', handleInnerWidth);

// handler : handleInnerWidth
function handleInnerWidth(){
    const innerWidth = window.innerWidth;

    if(innerWidth <= 620){
        naviContents.classList.add(HIDDEN);
        socialMediaIcons.classList.add(HIDDEN);
        responsiveMenu.classList.remove(HIDDEN);
        sideBarMenu.classList.remove(HIDDEN);
    }else{
        naviContents.classList.remove(HIDDEN);
        socialMediaIcons.classList.remove(HIDDEN);
        responsiveMenu.classList.add(HIDDEN);
        sideBarMenu.classList.add(HIDDEN);
    }
}

// addEvenetListener of sidebar menu
sideBarIcon.addEventListener('click', handleShowSideBar);

// handler : handleShowSideBar
function handleShowSideBar(){
    // sideBarMenu.classList.toggle(HIDDEN);
    sideBarMenu.classList.toggle('active-side-bar');
}