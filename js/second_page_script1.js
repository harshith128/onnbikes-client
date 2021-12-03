//console.log("In script 1");
    
// // This script is used for ride bar

function checkStartDate(){
    let start_div = document.querySelector(".startDate");
    let start_dateAt = start_div.querySelector("input").value;
    let startYear = start_dateAt.substring(0, 4);
    let startMonth = start_dateAt.substring(5, 7);
    let startDate = start_dateAt.substring(8, 10);
    let startHour = start_dateAt.substring(11, 13);
    let startMin = start_dateAt.substring(14, 16);

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let min = today.getMinutes();

    if(startYear > year){
        return true;
    } else if(startYear == year && startMonth > month){
        return true;
    } else if(startYear == year && startMonth == month && startDate > date){
        return true;
    } else if(startYear == year && startMonth == month && startDate == date && startHour > hour){
        return true;
    } else if(startYear == year && startMonth == month && startDate == date && startHour == hour && startMin > min){
        return true;
    } else {
        return false;
    }
}

function callStart(){
    if(!checkStartDate()){
        alert("Please select Valid Starting Date and Time")
    }
}
// document.querySelector(".endDate").querySelector("input").addEventListener("click", callStart);

function checkEndDate(){
    let start_div = document.querySelector(".startDate");
    let start_dateAt = start_div.querySelector("input").value;
    let startYear = start_dateAt.substring(0, 4);
    let startMonth = start_dateAt.substring(5, 7);
    let startDate = start_dateAt.substring(8, 10);
    let startHour = start_dateAt.substring(11, 13);
    let startMin = start_dateAt.substring(14, 16);

    let end_div = document.querySelector(".endDate");
    let end_dateAt = end_div.querySelector("input").value;
    let endYear = end_dateAt.substring(0, 4);
    let endMonth = end_dateAt.substring(5, 7);
    let endDate = end_dateAt.substring(8, 10);
    let endHour = end_dateAt.substring(11, 13);
    let endMin = end_dateAt.substring(14, 16);

    if(endYear > startYear){
        return true;
    } else if(endYear == startYear && endMonth > startMonth){
        return true;
    } else if(endYear == startYear && endMonth == startMonth && endDate > startDate){
        return true;
    } else if(endYear == startYear && endMonth == startMonth && endDate == startDate && endHour > startHour){
        return true;
    } else if(endYear == startYear && endMonth == startMonth && endDate == startDate && endHour == startHour && endMin > startMin){
        return true;
    } else {
        return false;
    }
}





//

function rideNow(){
        
    let select_city = document.getElementById("select_c");
    let city = select_city.innerText;
    city = city.toLowerCase()
    //console.log(city)

    let select_plan = document.querySelector(".booking");
    let plan = select_plan.querySelector("select").value;

    let start_div = document.querySelector(".startDate");
    let start_date = start_div.querySelector("input").value;

    let end_div = document.querySelector(".endDate");
    let end_date = end_div.querySelector("input").value;

    if(start_date === ""){
        alert("Please Select the start date");
    } else if(end_date === "") {
        alert("Please Select the end date")
    } else if(!checkStartDate()){
        alert("Please select Valid Start Date and Time"); 
    } else if(!checkEndDate()){            
        alert("Please select Valid End Date and Time");
    } else {
        localStorage.setItem("Date", JSON.stringify({city:city, plan:plan, startDate:start_date, endDate:end_date}));
    }
}

// document.querySelector(".rideBtn").addEventListener("click", rideNow);



//this is working
function rideNowAuto(){
    let date =JSON.parse(localStorage.getItem("Date"));
    //console.log(date)
    
    if(date == null){
        console.log("null")
    }else{
        
        //console.log(date);
        let cityname = date.city;
        cityname = cityname.toUpperCase()
        var element = document.getElementById("select_c");
        element.innerText = cityname;

        let second_select2 = date.plan;
        var second_select = document.querySelector(".booking").querySelector("select");
        second_select.value = second_select2;

        let stdate = date.startDate;
        var startDate = document.querySelector(".startDate").querySelector("input");
        startDate.value = stdate;

        let endate = date.endDate;
        var endDate = document.querySelector(".endDate").querySelector("input");
        endDate.value = endate;

    }
}
