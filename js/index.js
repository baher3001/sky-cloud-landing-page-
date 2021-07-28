AOS.init();

let burger = document.querySelector(".burger"),
navContent = document.querySelector(".nav-content");


burger.addEventListener("click",()=>{

    if(navContent.classList.contains("active"))
    {
        navContent.classList.remove("active");
        burger.innerHTML = "<i class='fas fa-bars'></i>";
    }
    else
    {
        navContent.classList.add("active");
        burger.innerHTML = "<i class='fas fa-times'></i>"; 
    }

})