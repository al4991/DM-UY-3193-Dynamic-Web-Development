import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 

const apiKey = '35a285fb74dd51dc2c2c06ef66604ba9'; 
export default function Home(props) { 
    
    const [city, setCity] = useState(''); 
    const [weather, setWeather] = useState({}); 
    const [error, setError] = useState();

    function queryWeatherAPI(queryCity) { 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
        .then((res) => {
            console.log(res);
            return setWeather(res.data)}
        )
        .catch((err) => 
            setError(err)
        )
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(props.location.search)
        const cityParams = urlParams.get('city') ? urlParams.get('city') : 'London'; 
        async function fetchWeather() { 
            setCity(cityParams);
            queryWeatherAPI(cityParams);
        }
        fetchWeather();
    }, []);

    const KtoF = (K) => ((K-273.15) * (9/5) + 32).toFixed(2);

    return (
        <div>
            <h1>Weather in {city}</h1>
            <p>Current Weather: {weather.main? KtoF(weather.main.temp): undefined}</p>
            <p>Today's High Temperature: {weather.main ? KtoF(weather.main.temp_max): undefined}</p>
            <p>Today's Low Temperature: {weather.main? KtoF(weather.main.temp_min) : undefined}</p>
            <p>Humidity: {!weather['main'] ? undefined : weather['main']['humidity']}</p>
            <p>Cloudy: {weather.clouds? weather.clouds.all : undefined} </p>
            <p>Wind: {weather.wind? weather.wind.speed + "km/H coming at " + weather.wind.deg + " degrees" : undefined}</p>
            <a href="/?city=Seoul">Seoul</a> <div />
            <a href="/?city=London">London</a><div />
            <a href="/?city=Miami">Miami</a><div />
            <a href="/?city=Chicago">Chicago</a><div />
        </div>
    )
}
