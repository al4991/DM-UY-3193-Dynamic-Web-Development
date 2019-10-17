import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import WeatherIcon from './WeatherIcon';
import PageWrapper from './PageWrapper';
import Header from './Header';
import TemperatureBasedWrapper from './PageWrapper';

const apiKey = '35a285fb74dd51dc2c2c06ef66604ba9'; 

export default function Home(props) { 
    
    const [city, setCity] = useState(''); 
    const [weather, setWeather] = useState({}); 
    const [error, setError] = useState();

    function queryWeatherAPI(queryCity) { 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
        .then((res) => {
            console.log(res.data);
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
            <Header temp={weather.main ? KtoF(weather.main.temp): undefined} > 
                <a href="/?city=Seoul">
                    <button style={{background:'none', border:'none'}}>Seoul</button> 
                </a> 
                <a href="/?city=London">
                    <button style={{background:'none', border:'none'}}>London</button>
                </a>
                <a href="/?city=Miami">
                    <button style={{background:'none', border:'none'}}>Miami</button>
                </a>
                <a href="/?city=Chicago">
                    <button style={{background:'none', border:'none'}}>Chicago</button>
                </a>
            </Header> 

            <PageWrapper temp={weather.main ? KtoF(weather.main.temp): undefined}>
                <h1>
                    Weather in {city} <div/> 
                    <WeatherIcon weatherMain={weather.weather ? weather.weather[0].main : undefined} />
                </h1>
                <p>Current Temperature: {weather.main? KtoF(weather.main.temp): undefined}</p>
                <p>Today's High Temperature: {weather.main ? KtoF(weather.main.temp_max): undefined}</p>
                <p>Today's Low Temperature: {weather.main? KtoF(weather.main.temp_min) : undefined}</p>
                <p>Humidity: {!weather.main ? undefined : weather.main.humidity} </p>
                <p>Cloudy: {weather.clouds? weather.clouds.all : undefined} </p>
                <p>Wind: {weather.wind? weather.wind.speed + "km/H coming at " + weather.wind.deg + " degrees" : undefined}</p>
                
            </PageWrapper>
        </div> 
    )
}

