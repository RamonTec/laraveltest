import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const WeatherView = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const searchWeather = () => {
        setLoading(true);
    fetch(`/weather/${search}`)
        .then((res) => res.json())
        .then((result) => {
            setLoading(false);
        setWeather(result);
        })
        .catch((error) => {
            setLoading(false);
        console.error('Error fetching weather data:', error);
        });
    };

    const fetchWeatherForCountries = () => {
        fetch('/clima-paises')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Procesa la información según tus necesidades
        })
        .catch((error) => console.error('Error fetching weather data:', error));
    }

    return (
        <Container>
            <div className="App">
            <header className="App-header">

                <h1>Weather App</h1>
                <div>
                <Form.Control
                    type="text"
                    placeholder="Enter city/town..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button onClick={searchWeather}>Search</Button>
                </div>

                {/* If weather is not undefined display results from API */}
                {loading && <p className='text-white'>Cargando clima...</p>}
                {!loading && weather?.main !== undefined && (
                <div>
                    {/* Location */}
                    <p>Location: {weather?.name}</p>

                    {/* Temperature Celsius */}
                    <p>Temperature: {weather?.main.temp}°C</p>

                    {/* Condition (Sunny) */}
                    <p>Condition: {weather?.weather[0].main}</p>
                    <p>Description: {weather?.weather[0].description}</p>
                </div>
                )}
            </header>
            </div>
        </Container>
    );
}

export default WeatherView;
