import { useEffect, useState } from "react";

function WeatherDisplay() {

    const [currentTemp, setCurrentTemp] = useState(0);
    const [currentWindspeed, setCurrentWindspeed] = useState(0);

    useEffect(() => {
        // the anonymous function being called goes between these curly braces
        console.log("inside useEffect");
        async function getCurrentWeather() {
            let response = await fetch('http://localhost:3000/weather');
            let weather = await response.json();
            console.log(weather);
            setCurrentTemp((((weather.temp - 273.15) * 1.8) + 32).toFixed(1));
            setCurrentWindspeed((weather.wind_speed * 2.2369362921).toFixed(1));
        }
        getCurrentWeather();    
    }, [] // dependencies for useEffect
    )

    return (
        <>
        <p>Current temperature: {currentTemp} F</p>
        <p>Current windspeed: {currentWindspeed} MPH</p>
        </>
    )

}

export default WeatherDisplay;