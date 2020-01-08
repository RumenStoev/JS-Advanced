function attachEventsListeners() {
////////////////////////////////////////////////////////
    let dayConventor = getElementById("days");
    let buttonDay = getElementById("daysBtn");
    let hoursConventor = getElementById("hours");


    buttonDay.addEventListener("click", function () {
        tranferTime(dayConventor, 24, hoursConventor)
    });
 //////////////////////////////////////////////////////////////////////////

    let buttonHour = getElementById("hoursBtn");
    let minuteConventor = getElementById("minutes");

    buttonHour.addEventListener("click",function () {
        tranferTime(hoursConventor,60,minuteConventor)
    })
    //////////////////////////////////////////////////////////////////////
    let buttonSeconds = getElementById("minutesBtn");
    let inputSecond = getElementById("seconds");

    buttonSeconds.addEventListener("click",function() {
        tranferTime(minuteConventor,60,inputSecond)
    })
////////////////////////////////////////////////////////////////////////////////
}



    function tranferTime(objValue, num, placeExecute) {
        let tranferStatus = objValue.value * num;
        placeExecute.value = tranferStatus;
        return placeExecute
    }

    function getElementById(val) {
        let element = document.getElementById(val);
        return element
    }
