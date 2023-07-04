const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const slider = document.querySelector(".slider")

hamburger.addEventListener("click", () =>{
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	slider.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
	hamburger.classList.remove("active")
	navMenu.classList.remove("active")
	slider.classList.remove("active")
}))