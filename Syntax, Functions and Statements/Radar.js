function Radar(speed, area) {

    let areas = {
        city: 50,
        residential: 20,
        interstate: 90,
        motorway: 130
    }

    let checkLimitStatus = (number) => {
        if (number <= 20) return "speeding";
        if (number >= 20 && number <= 40) return "excessive speeding";
        if (number > 40) return "reckless driving"
    }

    let outputPatterns = (boolean, speed, speedLimit, status, difference) => {
        return (boolean) ? `Driving ${speed} km/h in a ${speedLimit} zone` : `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    let checkSpeeding = (speed, area) => {
        if (areas[area] >= speed) return outputPatterns(true, speed, areas[area])
        if (areas[area] < speed) return outputPatterns(false, speed, areas[area], checkLimitStatus(speed - areas[area]), speed - areas[area])

    }

    return checkSpeeding(speed, area)
}

console.log(
    Radar(200, "motorway")
)

->  The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
