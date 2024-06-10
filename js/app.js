
let main_profile = document.getElementById("main-profile-container");

let portfolio_img = document.querySelector(".portfolio-img");
let profile_name = document.querySelector(".profile-name");



// About Section Open //

let profile_abt = document.getElementById("profile-about");
let profile_title = document.getElementById("profile-about-title");
let abt_content = document.getElementById("about-content");

function about_demo(){
    let profile_delay = true;

    profile_abt.style.width = "97.5%";
    profile_abt.style.height = "94.5%";
    profile_abt.style.zIndex = "1";
    profile_abt.style.position = "fixed";
    profile_abt.style.right = "20px";
    profile_abt.style.cursor = "context-menu";
    // main_profile.style.display = "none";

    profile_proj.style.display = "none";
    profile_contact.style.display = "none";
    portfolio_img.style.display = "none";
    profile_name.style.display = "none";
    

    
    function profile_delayed(){
        abt_content.style.display = "block";
        
        profile_title.style.display = "none";
        profile_abt.style.display = "none";
    }

    if (profile_delay == 1){
        setTimeout(
            profile_delayed, 500);
    }
}

 
// About Section Close //

let abt_close = document.getElementById("about-content-close");

abt_close.addEventListener("click", ()=>{
    abt_content.style.display = "none";
    profile_name.style.display = "block";
    profile_abt.style.display = "flex";
    profile_abt.style.width = "32.5%";
    profile_abt.style.height = "339px";
    profile_title.style.display = "block";
    portfolio_img.style.display = "block";
    profile_contact.style.display = "flex";
    profile_proj.style.display = "flex";
    profile_proj.style.zIndex = "2";
    profile_proj.style.position = "relative";
    profile_proj.style.bottom = "-360px";    
});




function about_size(){
    let screenWidth = window.innerWidth;

    if(screenWidth < 992){
        profile_abt.classList.add("about-mobile");
        profile_proj.classList.add("project-mobile");
        profile_contact.classList.add("contact-mobile");
        profile_name.classList.add("name-mobile");
        

    } else {
        profile_abt.classList.remove("about-mobile");
        profile_proj.classList.remove("project-mobile");
        profile_contact.classList.remove("contact-mobile");
        profile_name.classList.remove("name-mobile");
        
    }
}

window.onload = about_size;
window.onresize = about_size;




// Projects Section Open //

let profile_proj = document.getElementById("profile-projects");
let profile_proj_title = document.getElementById("profile-proj-title");
let profile_proj_content = document.getElementById("projects-content");

profile_proj.addEventListener("click", ()=>{

    let profile_proj_delay = true;

    profile_proj.style.width = "97.5%";
    profile_proj.style.height = "94.5%";
    profile_proj.style.zIndex = "1";
    profile_proj.style.position = "fixed";
    profile_proj.style.bottom = "20px";
    profile_proj.style.right = "20px";
    profile_proj.style.cursor = "context-menu";


    profile_abt.style.display = "none";
    profile_contact.style.display = "none";
    portfolio_img.style.display = "none";
    profile_name.style.display = "none";
    
    
    function profile_proj_delayed(){
        profile_proj_content.style.display = "block";
        profile_proj_title.style.display = "none";
        profile_proj.style.display = "none";
    }

    if (profile_proj_delay == 1){
        setTimeout(
            profile_proj_delayed, 500);
    }
})


// Contact Section Open //

let profile_contact = document.getElementById("profile-contact");
let profile_con_title = document.getElementById("profile-con-title");
let profile_contact_content = document.getElementById("contact-content");

profile_contact.addEventListener("click", ()=>{

    let profile_contact_delay = true;

    profile_contact.style.width = "97.5%";
    profile_contact.style.height = "94.5%";
    profile_contact.style.zIndex = "1";
    profile_contact.style.position = "fixed";
    profile_contact.style.bottom = "20px";
    profile_contact.style.right = "20px";
    profile_contact.style.zIndex = "1";
    profile_contact.style.cursor = "context-menu";


    profile_proj.style.display = "none";
    profile_abt.style.display = "none";
    portfolio_img.style.display = "none";
    profile_name.style.display = "none";
    
    
    function profile_contact_delayed(){
        profile_contact_content.style.display = "block";
        profile_con_title.style.display = "none";
        profile_contact.style.display = "none";
    }

    if (profile_contact_delay == 1){
        setTimeout(
            profile_contact_delayed, 500);
    }
})



// Experience , Education , Skills Section //

let abt_exp1 = document.querySelector(".about-exp1");
let abt_exp2 = document.querySelector(".about-exp2");
let abt_exp3 = document.querySelector(".about-exp3");
let abt_briefcase = document.querySelector(".abt-briefcase");
let abt_cap = document.querySelector(".abt-cap");
let abt_star = document.querySelector(".abt-star");
let abt_exp4 = document.getElementById("about-experience1");
let abt_exp5 = document.getElementById("about-experience2");
let abt_exp6 = document.getElementById("about-experience3");
function abt_Expe(){
    abt_exp4.style.backgroundColor = "orange";
    abt_exp4.style.color = "#fff";
    abt_briefcase.style.color = "#fff";
    abt_exp5.style.backgroundColor = "#1c1c1c";
    abt_exp5.style.color = "gray";
    abt_cap.style.color = "gray";
    abt_exp6.style.backgroundColor = "#1c1c1c";
    abt_exp6.style.color = "gray";
    abt_star.style.color = "gray";
    abt_exp1.style.display = "block";
    abt_exp2.style.display = "none";
    abt_exp3.style.display = "none";
}

function abt_Edu(){
    abt_exp5.style.backgroundColor = "orange";
    abt_exp5.style.color = "#fff";
    abt_cap.style.color = "#fff";
    abt_exp4.style.backgroundColor = "#1c1c1c";
    abt_exp4.style.color = "gray";
    abt_briefcase.style.color = "gray";
    abt_exp6.style.backgroundColor = "#1c1c1c";
    abt_exp6.style.color = "gray";
    abt_star.style.color = "gray";
    abt_exp2.style.display = "block";
    abt_exp1.style.display = "none";
    abt_exp3.style.display = "none";
}

function abt_skill(){
    abt_exp6.style.backgroundColor = "orange";
    abt_exp6.style.color = "#fff";
    abt_star.style.color = "#fff";
    abt_exp5.style.backgroundColor = "#1c1c1c";
    abt_exp5.style.color = "gray";
    abt_cap.style.color = "gray";
    abt_exp4.style.backgroundColor = "#1c1c1c";
    abt_exp4.style.color = "gray";
    abt_briefcase.style.color = "gray";
    abt_exp3.style.display = "block";
    abt_exp1.style.display = "none";
    abt_exp2.style.display = "none";
}