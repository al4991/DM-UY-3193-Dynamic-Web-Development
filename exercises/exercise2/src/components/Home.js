import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 

const apiKey = '35a285fb74dd51dc2c2c06ef66604ba9'; 
export default function Home(props) { 
    
    const [city, setCity] = useState(''); 
    const [weather, setWeather] = useState({}); 
    const [error, setError] = useState();

    function queryWeatherAPI(queryCity) { 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
        .then((res) => 
            setWeather(res.data)
        )
        .catch((err) => 
            setError(err)
        )
    }

    useEffect(() => {
        async function fetchWeather() { 
            setCity('London');
            queryWeatherAPI('London')
        }
        fetchWeather();
    }, []);

    return (
        <div> 
            <h1>Weather in {city}</h1>
            <p>Humidity: {!weather['main'] ? undefined : weather['main']['humidity']}</p>
        </div>
    )
}

