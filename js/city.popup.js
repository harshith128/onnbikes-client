//  //code for popup bnner
//  let banner_onn = 0;
//  if (banner_onn === 0) {
//      togglePopupBanner(0);
//  }

//  function togglePopupBanner(banner_val) {
//      if (banner_val === 0) {
//          document.getElementById("popup-1-Banner").classList.toggle("activeBanner");
//      } else {
//          document.getElementById("popup-1-Banner").classList.toggle("activeBanner");
//      }

//  }
 //code for city popup
 var cityPopVar = "";

 function togglePopupcity() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");
     cityPopVar = "";
 }

 function cityAhmed() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `AHMEDABAD`;
     cityPopVar = "ahmedabad";

 }

 function cityBeng() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `BENGALURU`;
     cityPopVar = "bengaluru";
 }

 function cityGuru() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `GURUGRAM`;
     cityPopVar = "gurugram";
 }

 function cityHyd() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `HYDERABAD`;
     cityPopVar = "hyderabad";
 }

 function cityJai() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `JAIPUR`;
     cityPopVar = "jaipur";
 }

 function cityMysu() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `MYSURU`;
     cityPopVar = "mysuru";
 }

 function cityPun() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `PUNE`;
     cityPopVar = "pune";
 }

 function cityUdai() {
     document.getElementById("popup-1-city").classList.toggle("activeCity");

     document.getElementById('select_c').innerHTML = `UDAIPUR`;
     cityPopVar = "udaipur";
 }
 //code for go to next page/popup page
