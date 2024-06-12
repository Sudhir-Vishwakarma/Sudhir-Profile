
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
        profile_proj_content.style.display = "flex";
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
        profile_contact_content.style.display = "flex";
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



// About Section Close //

let abt_close = document.getElementById("about-content-close");

abt_close.addEventListener("click", ()=>{
    abt_content.style.display = "none";
    profile_name.style.display = "block";
    profile_name.style.height = "339px";
    profile_abt.style.display = "flex";
    profile_abt.style.width = "32.5%";
    profile_abt.style.height = "339px";
    profile_title.style.display = "block";
    portfolio_img.style.display = "block";
    profile_contact.style.display = "flex";
    profile_proj.style.display = "flex";
    profile_proj.style.width = "100%";
    profile_proj.style.zIndex = "2";
    profile_proj.style.position = "relative";
    profile_proj.style.bottom = "-360px"; 
});


// Project Section Close //
let closeProject = document.getElementById("project-close1");

closeProject.addEventListener("click", ()=>{
    profile_proj_content.style.display = "none";
    profile_name.style.display = "block";
    // profile_name.style.position = "fixed";
    // profile_name.style.top = "20px";
    profile_name.style.height = "339px";
    portfolio_img.style.display = "block";
    profile_proj.style.position = "fixed";
    profile_proj.style.right = "20px";
    profile_proj.style.display = "flex";
    profile_proj.style.width = "32.5%";
    profile_proj.style.height = "339px";
    profile_proj_title.style.display = "block";
    profile_abt.style.display = "flex";
    profile_title.style.display = "block";
    profile_contact.style.display = "flex";
    profile_contact.style.position = "fixed";
    profile_contact.style.bottom = "20px";
    profile_contact.style.right = "540px";
    profile_contact.style.width = "32.5%";
    profile_contact.style.height = "339px";
});


// Contact Section Close //
let contactClose = document.getElementById("contact-close1");
contactClose.addEventListener("click",()=>{
    profile_contact_content.style.display = "none";
    profile_name.style.display = "block";
    profile_name.style.height = "339px";
    portfolio_img.style.display = "block";
    profile_abt.style.display = "flex";
    profile_contact.style.display = "flex";
    profile_contact.style.width = "32.5%";
    profile_contact.style.height = "339px";
    profile_con_title.style.display = "block";
    profile_proj.style.display = "flex";
    profile_proj.style.width = "32.5%";
    profile_proj.style.height = "339px";
    profile_proj.style.position = "fixed";
    profile_proj.style.right = "540px";
    profile_proj.style.bottom = "20px";
    profile_proj_title.style.display = "block";
});





// Auto Typing //
var typed = new Typed(".name-para3",{
    strings: ["Front-End", "Web-Developer","React/Redux"],
    typeSpeed: 120,
    backSpeed: 120,
    showCursor: false,
    loop: true
});



// Form Validation //


let submit = document.getElementById("submit");

let nameSpan = document.getElementById("name-span");
let emailSpan = document.getElementById("email-span");
let numberSpan = document.getElementById("number-span");
let messageSpan = document.getElementById("message-span");

const isValidEmail = (para) =>{
    const val = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return val.test(String(para).toLowerCase());
}


function submitForm(){
    // e.preventDefault();
    

    // Name Section //
    let name = document.getElementById("name").value;
    
    if(name === ""){
        nameSpan.innerHTML = "Name is Required.";
    } else if (name.length <= 2){
        nameSpan.innerHTML = "Enter Full Name.";
    } else {
        nameSpan.innerHTML = "";
    }


    // Email Section //
    let email = document.getElementById("email").value;
    if(email === ""){
        emailSpan.innerHTML = "E-mail is Required.";
    } else if(!isValidEmail(email)){
        emailSpan.innerHTML = "Enter Valid Email.";
    } else {
        emailSpan.innerHTML = "";
    }


    // Number Section //
    let number = document.getElementById("number").value;
    if(number === ""){
        numberSpan.innerHTML = "Number is Required.";
    } else if(number.length < 10){
        numberSpan.innerHTML = "Enter Valid Number One.";
    } else if(number.length > 10){
        numberSpan.innerHTML = "Enter Valid Number.";
    } else {
        numberSpan.innerHTML = "";
    }


    //Message Section 
    let message = document.getElementById("message").value;
    if(message === ""){
        messageSpan.innerHTML = "Message is Required.";
    } else {
        messageSpan.innerHTML = "";
    }




};



// Mail Sending Using Website using Smtp Server //

function sendEmail(){
    Email.send({
        SecureToken: "340e486b-ef6b-4b6c-a7fd-7da9f06be3fe",
        To : 'karmasudhir48@gmmail.com',
        From : document.getElementById("email").value,
        Subject : "New Enquiry Mr.Sudhir",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone No: " + document.getElementById("number").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Send Successfully")
    );
}