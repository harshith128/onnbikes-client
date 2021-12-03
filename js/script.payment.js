async function addBooking(){
    let bookingId = JSON.parse(localStorage.getItem("checkout"));

    let res = await fetch(`https://onnbikes-server.herokuapp.com/${bookingId}`);
    let data = await res.json();
    //console.log(data)
    let address = data.item.address;

    let details = document.querySelectorAll(".book");

    let start = data.item.startDate;
    let end = data.item.endDate;

    let excess = "Exess 2km/hr";
    let name = data.item.bookedBike.name;
    let total = data.item.bookedBike.price
    let price = Math.floor(total / 1.05);
    let add = data.item.address.address + ", " + data.item.address.landmark;

    let p_name = document.createElement("p");
    p_name.innerText = name;
    p_to = `₹${total}`;
    let addtotal = document.createElement("p");
    addtotal.setAttribute("class", "right");
    addtotal.innerText = `₹${total}`;
    details[0].append(p_name, addtotal);

    let start_p = document.createElement("p");
    start_p.setAttribute("class", "reducesize");
    let p_start = document.createElement("p");
    let end_p = document.createElement("p");
    end_p.setAttribute("class", "reducesize");
    end_p.setAttribute("class", "right reducesize");
    let p_end = document.createElement("p");
    p_end.setAttribute("class", "right");

    // console.log(start)
    // console.log(end)

    let startYear = start.substring(0, 4);
    let startMonth = start.substring(5, 7);
    startMonth = getMonth(+startMonth)
    let startDate = start.substring(8, 10);
    let startHour = start.substring(11, 13);
    let startMin = start.substring(14, 16);
    startHour = checkHour(startHour, startMin);
    // console.log(startYear, startMonth, startDate, startHour, startMin)

    let endYear = end.substring(0, 4);
    let endMonth = end.substring(5, 7);
    endMonth = getMonth(+endMonth)
    let endDate = end.substring(8, 10);
    let endHour = end.substring(11, 13);
    let endMin = end.substring(14, 16);
    endHour = checkHour(endHour, endMin);
    // console.log(endYear, endMonth, endDate, endHour, endMin)

    start_p.innerText = "START TRIP";
    end_p.innerText = "END TRIP";
    p_start.innerText = `${startMonth} ${startDate} - ${startHour}`;
    p_end.innerText = `${endMonth} ${endDate} - ${endHour}`;
    details[1].append(start_p, end_p, p_start, p_end);

    let place = document.createElement("p");
    place.setAttribute("class", "reducesize");
    place.innerText = "PICKUP & RETURN LOCATION";
    let newAdd = document.createElement("p");
    newAdd.innerText = add;
    details[2].append(place, add);

    let breakdown = document.createElement("p");
    breakdown.innerText = "Payment Breakdown";
    details[3].append(breakdown);

    let tariff = document.createElement("p");
    tariff.innerHTML = 'Tariff<span>  (Inclussive all taxes)</span>'
    let addTariff = document.createElement("p");
    addTariff.setAttribute("class", "right");
    addTariff.innerText = `₹${price}`;
    details[4].append(tariff, addTariff);

    let amount = document.createElement("p");
    amount.innerText = "Payable Amount";
    let addamount = document.createElement("p");
    addamount.setAttribute("class", "right");
    addamount.innerText = `₹${total}`;
    details[5].append(amount, addamount);

    let addexcess = document.querySelector(".excess");
    let p_excess = document.createElement("p");
    p_excess.setAttribute("class", "right");
    p_excess.innerText = excess;
    addexcess.append(p_excess);
}
addBooking();
document.querySelector(".cardPay").addEventListener("click", loadPayment);

function loadPayment(){
    window.location = "cardPay.html";
}

function getMonth(num){
    switch (num) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "Aug";
            case 9:
                return "Sept";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec"
            default:
                break;
        }
}

function checkHour(val1, val2){
    if(+val1 === 0){
        return `12:${val2} AM`;
    } else if(+val1 > 12){
        return `${+val1 - 12}:${val2} PM`;
    } else if(+val1 === 12){
        return `12:${val2} PM`;
    } else if(+val1 < 12){
        return `${val1}:${val2} AM`;
    }
}