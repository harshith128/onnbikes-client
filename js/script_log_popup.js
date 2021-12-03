const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");
const hidp = document.querySelector(".login-popup");

window.addEventListener("load", function() {

    showPopup();
    // setTimeout(function(){
    //   loginPopup.classList.add("show");
    // },1000)

})

function showPopup() {
    const timeLimit = 1 // seconds;
    let i = 0;
    const timer = setInterval(function() {
        i++;
        if (i == timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
        }
        // console.log(i)
    }, 100);
}


// function hidPop(e2) {


//     e2.preventDefault();
//     let Email = document.getElementById('Email').value;
//     let pass = document.getElementById('pass').value;
//     // console.log(Email, pass);

//     let dt = JSON.parse(localStorage.getItem('formData'));
//     // console.log('dt:', dt[0]);

//     let email2 = dt[0].email;

//     // console.log('email2:', email2);
//     let pass2 = dt[0].pwd;
//     // console.log('pass2:', pass2);

//     if (Email == email2 && pass == pass2) {
//         alert('Log in successfully');
//         // console.log("success");
//         loginPopup.classList.remove("show");
        
//         // Below code for storing login information
//         var obj = {
//             isLogin : true,
//             userid:Email,
//             pass:pass,
//         }
//         localStorage.setItem("loginData",JSON.stringify(obj));
        
//         document.location.href = "second_page.html";
//     } else {
//         alert('Wrong email id or password');
//         // console.log("Access denied");
//     }

// }

close.addEventListener("click", function() {

    loginPopup.classList.remove("show");
    document.location.href = "../index.html";
})