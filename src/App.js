import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const name = 'Chiang Mai'
  const apikey = process.env.REACT_APP_API_KEY // your api key
  const [city,setCity] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect( ()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metric`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
      setIsLoading(true)
    })

  },[apikey])

  return (
    (isLoading&& <div className="App">
      <section>
        <div className='location'>
          <h1 className='city'>{city.name}</h1>
          <p className='state'>{city.sys.country}</p>
        </div>
        <div className='card'>
          <div className='weather'>
            <h1>{city.main.temp} &deg;C</h1>
            <small>max: {city.main.temp_max} &deg;C <span>|</span> min: {city.main.temp_min} &deg;C</small>
          </div>
          <div className='info'>
            <div className='status'>status : {city.weather[0].main}</div>
            <div className='humidity'>Humidity : {city.main.humidity}</div>
            <div className='wind'>Wind speed : {city.wind.speed}</div>
          </div>
        </div>
      </section>
    </div>
    )
    
  );
}

export default App;
