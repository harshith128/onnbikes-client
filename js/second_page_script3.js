//console.log("In script 3");


//the Fuction fun1 is used for checkbox --- MANUFACTURER

function fun1(ck){
    untickCheckBox()
    document.getElementById("check1").checked = true;
    if(ck.checked){
        //console.log("Just ckecked");
        var ckbox = "615409b54e41cc5e314ac30d"
        callApiCheckBoxManifacturer(ckbox);
        
    }else{
        //console.log("just uncked");
        callApi();
    }
}
function fun2(ck){
    untickCheckBox()
    document.getElementById("check2").checked = true;
    if(ck.checked){
        //console.log("Just ckecked");
        var ckbox = "6153ee8ee7e0ae30c029b1a3"
        callApiCheckBoxManifacturer(ckbox);
    }else{
        //console.log("just uncked");
        callApi();
    }
}
function fun3(ck){
    untickCheckBox()
    document.getElementById("check3").checked = true;
    if(ck.checked){
        //console.log("Just ckecked");
        var ckbox = "6153ee4ce7e0ae30c029b1a1"
        callApiCheckBoxManifacturer(ckbox);
    }else{
        //console.log("just uncked");
        callApi();
    }
}
function fun4(ck){
    untickCheckBox()
    document.getElementById("check4").checked = true;
    if(ck.checked){
        //console.log("Just ckecked");
        var ckbox = "6153eea4e7e0ae30c029b1a5"
        callApiCheckBoxManifacturer(ckbox);
    }else{
        //console.log("just uncked");
        callApi();
    }
}





//for filter data using manifacturere

async function callApiCheckBoxManifacturer(keys){


try{

    let response = await fetch(`https://onnbikes-server.herokuapp.com/bikes/manufacturer/${keys}`);

    let data = await response.json()
    // console.log('data:', data)
    

    // console.log('data:', data.bikes[0]);

    var product = data.bikes;
    //console.log('product:', product)

    var data_div = document.getElementById('data_div');
data_div.innerHTML = null;

product.forEach(function (products){
    
    var div = document.createElement('div');
    div.classList.add("one_div1");

    var div_img_div = document.createElement('div');
    div_img_div.classList.add("img_div");

    var img123 = document.createElement('img');
    img123.classList.add("img123");
    img123.src = products.image;

    div_img_div.append(img123)

    var div_bk = document.createElement('div');

    var div_bike_name = document.createElement('div');
    div_bike_name.classList.add("bike_name_bk")
    div_bike_name.innerText = products.name;

    div_bk.append(div_bike_name);
//div s_one
    var div_s_one =document.createElement('div');
    div_s_one.classList.add("s_one");
    div_s_one.classList.add("flex-child");

    var div_s_one_one =document.createElement('div');
    div_s_one_one.classList.add("s_one_one");
    div_s_one_one.innerText = "Free 904 kms"

    var div_s_one_two =document.createElement('div');
    div_s_one_two.classList.add("s_one_two");

    var div_s_one_two_center =document.createElement('div');
    div_s_one_two_center.classList.add("center11");
    div_s_one_two_center.innerText = " ₹"+products.price;
    
    div_s_one_two.append( div_s_one_two_center);
    div_s_one.append(div_s_one_one, div_s_one_two)

    //for second part
//div s_two
    var div_s_two =document.createElement('div');
    div_s_two.classList.add("s_two");
    div_s_two.classList.add("flex-child");

    var div_s_two_one =document.createElement('div');
    div_s_two_one.classList.add("s_two_one");
    div_s_two_one.innerText = "Exess ₹2/km"
    
    var div_s_two_two =document.createElement('div');
    div_s_two_two.classList.add("s_two_two");

    var div_s_two_two_booking =document.createElement('div');
    div_s_two_two_booking.classList.add("s_two_booking");

    var btn = document.createElement('button');
    btn.classList.add("btn11");
    btn.innerText = "Book Now";

    btn.onclick=(function (){
        bookNowClicked(products);
    })

    div_s_two_two_booking.append(btn);
    div_s_two_two.append(div_s_two_two_booking);
    div_s_two.append(div_s_two_one,div_s_two_two);
    
    var onlyone = document.createElement('div');
    onlyone.classList.add("flex-container");
    onlyone.append(div_s_one,div_s_two)

    div.append(div_img_div,div_bk,onlyone);

    data_div.append(div);
})
    
    

}catch(err){
console.log('err:', err)
}

}
