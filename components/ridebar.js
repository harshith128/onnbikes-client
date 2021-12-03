function ridebar(){

    return `<div class="city">
        <div class="popupCity" id="popup-1-city">
            <div class="overlayCity"></div>
            <div class="contentCity">
                <div class="close-btn-city" onclick="togglePopupcity()">×</div>
                <h1 class="cityHeaderChoose">Select your current city</h1>
                <div class="city_left">
                    <button onclick="cityAhmed()" id="ahm"><img src="https://www.linkpicture.com/q/ahmedabad.png" alt="ahmedabad" class=" city_images_pop"></button>
                    <div class="grayCity txCity">AHMEDABAD</div>
                    <button onclick="cityBeng()" class="marg-top-city" id="beng"><img src="https://www.linkpicture.com/q/bengaluru.png" alt="bengaluru" class=" city_images_pop"></button>
                    <div class="grayCity txCity">BENGALURU</div>
                </div>

                <div class="city_left ">
                    <button onclick="cityGuru()" id="guru"><img src="https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Delhi_NCR-512.png" alt="gurugram" class=" city_images_pop"></button>
                    <div class="grayCity txCity">GURUGRAM</div>
                    <button onclick="cityHyd()" class="marg-top-city" id="hyd"><img src="https://www.linkpicture.com/q/hyderabad.png" alt="hyderabad" class=" city_images_pop"></button>
                    <div class="grayCity txCity">HYDERABAD</div>
                </div>
                <div class="city_left">
                    <button onclick="cityJai()" id="jaipur"><img src="https://www.linkpicture.com/q/jaipur.png" alt="jaipur" class=" city_images_pop"></button>
                    <div class="grayCity txCity">JAIPUR</div>
                    <button onclick="cityMysu()" class="marg-top-city" id="mysu"><img src="https://www.linkpicture.com/q/mysuru.png" alt="mysuru" class=" city_images_pop"></button>
                    <div class="grayCity txCity">MYSURU</div>
                </div>
                <div class="city_left">
                    <button onclick="cityPun()" id="pun"><img src="https://www.linkpicture.com/q/pune.png" alt="pune" class=" city_images_pop"></button>
                    <div class="grayCity txCity">PUNE</div>
                    <button onclick="cityUdai()" class="marg-top-city" id="udai"><img src="https://www.linkpicture.com/q/udaipur.png" alt="udaipur" class=" city_images_pop"></button>
                    <div class="grayCity txCity">UDAIPUR</div>
                </div>
            </div>
        </div>

        <button onclick="togglePopupcity()" id="select_c">SELECT CITY</button>
    </div>
    <div class="booking">
        <select>
            <option value="hour">HOURLY/DAILY</option>
            <option value="day">30 DAY BOOKING</option>
        </select>
    </div>
    <div class="startDate">
        <input type="datetime-local" placeholder="START DATE" />
    </div>
    <div class="endDate" onclick="callStart()">
        <input type="datetime-local" placeholder="END DATE" />
    </div>
    <div class="rideBtn" onclick="rideNow()">
        <button>RIDE NOW</button>
    </div>`
 }
 
 export default ridebar