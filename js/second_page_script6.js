//console.log("In script 4");


function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    var popup_div = document.getElementById('popup_div');
    popup_div.innerHTML="";
  
    
}

function bookNowClicked(p){
    console.log("Booked now clicke");
    //console.log('p:', p)
    ck_login = check_login();
    
    //storing Data for next page
    var arr7 = [];
    arr7.push(p);
    var tptp = JSON.stringify(arr7);
    localStorage.setItem("bookedBike",tptp);

    if(ck_login){
        function togglePopup() {
            document.getElementById("popup-1").classList.toggle("active");
        }
    
        function showDataOnPopup(){
            var city_data = JSON.parse(localStorage.getItem("Date"));
            

            
            //pickupLocationData(city_data.city);


            newPickupLocationData(city_data.city);
            
            

            
        }
        // function fun123(one,two,three){
        //     console.log("I am fun123");
        //     function createobj(one,two,three){
        //         this.loac =one,
        //         this.lc = two,
        //         this.lk = three
        //     }
        //     var tmp = new createobj(one,two,three);
        //     localStorage.setItem("selectedLocationData",JSON.stringify(tmp));
        
        //     location.href = "tp.html";
        // }
        showDataOnPopup();

        togglePopup();

    }else{

    }
}

function check_login() {
    let checks=JSON.parse(localStorage.getItem("user_login"));
    let status = true;
    return status;
}

function fun1234(cityKey){
    //console.log('cityKey:', cityKey)
    
    // function createobj(one,two,three){
    //     this.loac =one,
    //     this.lc = two,
    //     this.lk = three
    // }
    // var tmp = new createobj(one,two,three);
    // localStorage.setItem("selectedLocationData",JSON.stringify(tmp));

    //location.href = "third.html";

    sendDataToNextPage(cityKey);
}  

function newPickupLocationData(city_datacity){
    var popup_div = document.getElementById('popup_div').value;
    popup_div = null;

    let cityKey;

    if(city_datacity == "hyderabad"){
        cityKey= "6153e8299fe23b6da3228790";
    }

    if(city_datacity == "jaipur"){
        cityKey= "6153e8359fe23b6da3228792";
    }

    if(city_datacity == "gurugram"){
        cityKey= "6153e8439fe23b6da3228794";
    }

    if(city_datacity == "mysuru"){
        cityKey= "6153e84c9fe23b6da3228796";
    }

    if(city_datacity == "udaipur"){
        cityKey= "6153e85e9fe23b6da3228798";
    }

    if(city_datacity == "ahmedabad"){
        cityKey= "6153ef5d9fe23b6da32287a3";
    }

    if(city_datacity == "bengaluru"){
        cityKey= "6153e8119fe23b6da322878e";
    }
    getPickupLocations(cityKey);
}

function getPickupLocations(cityKey){
    var popup_div = document.getElementById('popup_div');

    async function callApiForAddress(cityKey){
        let response = await fetch(`https://onnbikes-server.herokuapp.com/city/${cityKey}/address`);

        let data = await response.json();
        //console.log('data:', data.address);

        var dt3 = data.address;
        console.log('dt3:', dt3)
        // for showing data on popups
        dt3.forEach(function (cityes){
        
            var div = document.createElement('div');
            div.style.backgroundColor = "#f7f7f7";
            
            var heading = document.createElement('h3')
            heading.innerText = cityes.address;
            var para = document.createElement('P');
            para.innerText = cityes.station_time;
            var para2 = document.createElement('P');
            para2.innerText = cityes.landmark;
            var para3 = document.createElement('P');
            para3.style.backgroundColor ="#00b468";
            para3.style.height = '25px';
            para3.onclick = function(){fun1234(cityes._id)}
            para3.innerText = "5+  Available   ➜"
    
            div.append(heading,para,para2,para3);
    
            popup_div.append(div);
            
        })
    }
    callApiForAddress(cityKey);

    //var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
    

}

//This Fuction is only for sendign Data to Localstorage 


function sendDataToNextPage(cityKey){
    //console.log('sendDataToNextPage:');
    

    //var datas2 = JSON.parse(localStorage.getItem("selectedLocationData"));
    var datas3 = JSON.parse(localStorage.getItem("Date"));
    var datas4 = JSON.parse(localStorage.getItem("bookedBike"));
    

    var datas5 = JSON.parse(localStorage.getItem("user_login"));
    //console.log('datas5:', datas5)
    
    let userid= datas5.userId;
    

    //cityKey , userid, 

    var checkout_arr = [];

    // var id = datas4[0].id;
    // var cityname = datas3.city;
    // var city_location = datas2.loac;
    // var city_location_address = datas2.lk;
    // var city_location_station_timing = datas2.lc;
    var endDate = datas3.endDate;
    var startDate = datas3.startDate;
    var plan = datas3.plan;
    // var image = datas4[0].image;
    // var bikeName = datas4[0].name;
    // var price = datas4[0].price;

    // var address = city_location+", "+city_location_address;

    // var obj={
    //     cityName: cityname,
    //     plan:plan,
    //     address:address,
    //     date1:startDate,
    //     date2:endDate,
    //     excess:"Exess 2km/hr",
    //     free: "free 150 kms",
    //     image: image,
    //     name: bikeName,
    //     price: price,
    // }
    //checkout_arr.push(obj);


    // console.log("+++++++++++++++++++");
    // console.log('userid:', userid)
    // console.log('cityKey:', cityKey);
    // console.log('startDate:', startDate)
    // console.log('endDate:', endDate)
    // console.log('plan:', plan)
    // console.log('datas4:', datas4[0]._id)
    
    let bookedbikeid = datas4[0]._id;

    var ckform={
        userid:userid,
        address:cityKey,
        startDate:startDate,
        endDate:endDate,
        plan:plan,
        bookedBike:bookedbikeid
    }

    check_out = JSON.stringify(ckform);
    localStorage.setItem("ldskjf",check_out);

    async function sendCheckOutData(){
        console.log('sendCheckOutData:');

        let response = await fetch(`https://onnbikes-server.herokuapp.com/checkout`,{
            method:"POST",
            body:check_out,
            headers:{"content-Type": "application/json"}
        });

        let data = await response.json();
              //console.log('data:', data.item._id)
              
        //console.log('data: After Receving responce from server : ', data.item._id);
        let dt = data.item._id;
        let temp = JSON.stringify(dt);
        localStorage.setItem("checkout", temp);

        location.href = "third.html";

    }

    sendCheckOutData();
}


// address == citykey
//startd = startda
//enddate = endfjdlskjf
//paln = plan
//booked bike






/////////////////----------------------//////////////////

function goToHomePage(){
    location.href = "../index.html";
}

///dummy data on localstorage

// var obj = {
//     user_login:"253456415486431"
// }
// let jobj= JSON.stringify(obj);

// localStorage.setItem("user_login",jobj);
