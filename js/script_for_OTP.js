const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


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
            generateVerifyOTP();
        }
        //console.log(i)
    }, 10);
}

function generateVerifyOTP() {
    let num = Math.floor(Math.random() * 999999) + 100000;
    console.log(num);

    let countDown = document.getElementById("countDown");
    document.getElementById("again").addEventListener("click", resendOTP);

    //resend OTP function

    function resendOTP() {
        // clearInterval(count);
        // countDown.remove();
        //  showPopup();
        location.href = "";
    }

    let i = 60;

    let count = setInterval(countDownTimer, 1000);
    let set = document.getElementById("ot").value;

    function countDownTimer() {
        countDown.innerText = `${i} seconds`;
        i--;
        // let set = document.getElementById("inBox").value;
        // if(set == num){
        //   clearInterval(count);
        //   countDown.remove();
        //   alert("Payment Succesfull");
        //   window.location = "home.html"
        // }
        if (i == -1) {
            clearInterval(count);
            countDown.remove();
            alert("Payment Unsuccesfull");
            window.location = "payment.html"
        }
    }

    document.getElementById("otpBtn").addEventListener("click", verified);

    function verified() {
        let set = document.getElementById("ot").value;
        if (set == num) {
            clearInterval(count);
            countDown.remove();
            alert("Payment Succesfull");
            window.location = "../index.html"
        } else {
            alert("Invalied OTP");
        }
    }
}


close.addEventListener("click", function() {
    loginPopup.classList.remove("show");
    window.location = "cardPay.html";
})