import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSnowflake, faSun, faMeteor, faCloudRain, faWater} from '@fortawesome/free-solid-svg-icons'

export default function WeatherIcon({weatherMain}) { 
    switch (weatherMain){
        case 'Mist':
        case 'Fog':
            return <FontAwesomeIcon icon={faWater} />
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} />
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake} />
        case 'Sunny':
            return <FontAwesomeIcon icon={faSun} /> 
        case 'Rain':
            return <FontAwesomeIcon icon={faCloudRain} />  
        default: 
            return <FontAwesomeIcon icon={faMeteor} />
    }
}