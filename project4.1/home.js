
let body = document.body
let profile = document.querySelector("#profile");

document.querySelector("#profile-btn").onclick = () => {
    profile.classList.toggle("active-c");
}

 window.onscroll = () => {
     profile.classList.remove("active-c");
}

let searchForm = document.querySelector("#search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}

 window.onscroll = () => {
     searchForm.classList.remove("active");
}


let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
    sideBar.classList.toggle("active");
    body.classList.toggle("active");
}
document.querySelector(".side-bar .close-menu").onclick = () => {
    sideBar.classList.remove("active");
    body.classList.remove("active");
}
/*
window.onscroll = () => {
    sideBar.classList.add("active");
    if (window.innerWidth < 1200) {
        sideBar.classList.add("active");
        body.classList.add("active");
    }
     
}*/
    function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
/*
let toggleBtn = document.querySelector("#toggle-btn");
let darkMood = localStorage.getItem("darkMood");

const enableDarkMood = () => {
    toggleBtn.classList.replace('bx bxs-toggle-left', 'bx bxs-toggle-right');
    body.classList.add('dark');
    localStorage.setItem("dark", "enable");
}

const disableDarkMood = () => {
    toggleBtn.classList.replace('bx bxs-toggle-right', 'bx bxs-toggle-left');
    body.classList.remove('dark');
    localStorage.setItem("dark", "disable");
}

if (darkMood === 'enable') {
    enableDarkMood(); 
}
toggleBtn.onclick = (e) => {
    let darkMood = localStorage.getItem("darkMood");
    if (darkMood === 'disable') {
        enableDarkMood();
    }
    else {
        disableDarkMood();
    }
}
}*/