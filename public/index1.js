
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".allLinks");

hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        links.classList.toggle("active");
    });


    const login = document.querySelector(".logPopUp");
    const activeLogin = document.querySelector(".formFlex")

    login.addEventListener("click", ()=>{
        activeLogin.classList.toggle("active");
        document.querySelector("body").classList.toggle("inactive");
        document.querySelector("header").classList.toggle("inactive");
        document.querySelector(".firstContent").classList.toggle("inactive");
    })

const signUP = document.querySelector(".signPopUp");
const activeSignUP= document.querySelector(".formForSignUP")
signUP.addEventListener("click", ()=>{
    document.querySelector(".formForSignUP").classList.toggle("active");
    document.querySelector("body").classList.toggle("inactive");
    document.querySelector("header").classList.toggle("inactive");
    document.querySelector(".firstContent").classList.toggle("inactive");
})
    // document.querySelector(".signPopUp").addEventListener("click", ()=>{
    //     activeLogin.classList.toggle("active");
    //     document.querySelector(".details h1").innerHTML="Sign up";
    //     document.querySelector("#login button").innerHTML="Register";
    //     document.querySelector(".reenter").classList.add("active");
    //     document.querySelector("#repassword").classList.add("active");
    //     document.querySelector("form span a").style.display="none";
    //     document.querySelector(".register p").innerHTML="Already a member?";
    //     document.querySelector("#signinn").innerHTML="Sign in";
    //     document.querySelector("body").classList.toggle("inactive");
    //     document.querySelector("header").classList.toggle("inactive");
    //     document.querySelector(".firstContent").classList.toggle("inactive");
        
    // })



    document.querySelector(".cancel").addEventListener("click", ()=>{
        activeLogin.classList.remove("active");
        document.querySelector("body").classList.toggle("active");
        document.querySelector("header").classList.toggle("inactive");
        document.querySelector(".firstContent").classList.toggle("inactive");
    })

    document.querySelector(".canceller").addEventListener("click", ()=>{
        activeSignUP.classList.remove("active");
        document.querySelector("body").classList.toggle("active");
        document.querySelector("header").classList.toggle("inactive");
        document.querySelector(".firstContent").classList.toggle("inactive");
    })

    // document.querySelector(".register").addEventListener("click", ()=>{
    //     document.querySelector(".details h1").innerHTML="Sign up";
    //     document.querySelector("#login button").innerHTML="Register";
    //     document.querySelector(".reenter").classList.add("active");
    //     document.querySelector("#repassword").classList.add("active");
    //     document.querySelector("form span a").style.display="none";
    //     document.querySelector(".register p").innerHTML="Already a member?";
    //     document.querySelector("#signinn").innerHTML="Sign in";
        
    // })